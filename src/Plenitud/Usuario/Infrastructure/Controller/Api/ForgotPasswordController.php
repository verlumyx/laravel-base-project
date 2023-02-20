<?php

declare(strict_types=1);

namespace Plenitud\Usuario\Infrastructure\Controller\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

final class ForgotPasswordController extends ApiController
{
    private $messages = [
        Password::RESET_LINK_SENT => "El correo se ha enviado correctamente.",
        Password::RESET_THROTTLED => "Por favor, espere unos minutos para enviar el correo de nuevo.",
        Password::INVALID_USER => "Este correo no es válido.",
    ];

    public function __invoke(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), ['email' => 'required|email',]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $status = Password::sendResetLink($request->only('email'));

        $code = $this->getCodeResponse($status);

        return response()->json([
            "message" => key_exists($status, $this->messages)
                ? $this->messages[$status]
                : "An error has occurred. please try again later",
            "ok" => $status == Password::RESET_LINK_SENT ? true : false
        ], $code);
    }

    private function getCodeResponse(string $status)
    {
        switch ($status) {
            case Password::RESET_LINK_SENT:
                return Response::HTTP_OK;

            case Password::RESET_THROTTLED:
                return Response::HTTP_UNPROCESSABLE_ENTITY;

            default:
                return Response::HTTP_BAD_REQUEST;
        }
    }
}