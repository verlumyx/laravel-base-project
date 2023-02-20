<?php

declare(strict_types=1);

namespace Plenitud\Usuario\Infrastructure\Controller\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;

final class NewPasswordController extends ApiController
{
    private $messages = [
        Password::PASSWORD_RESET => "Contraseña cambiada con éxito.",
        Password::INVALID_USER => "Este email no es válido.",
        Password::INVALID_TOKEN => "El enlace de recuperación de contraseña no es válido.",
    ];

    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $status = Password::broker()->reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();
                event(new PasswordReset($user));
            }
        );

        $code = $this->getCodeResponse($status);

        return response()->json([
            "message" => key_exists($status, $this->messages)
                ? $this->messages[$status]
                : "An error has occurred. please try again later",
            "ok" => $status == Password::PASSWORD_RESET ? true : false
        ], $code);
    }

    private function getCodeResponse(string $status)
    {
        switch ($status) {
            case Password::PASSWORD_RESET:
                return Response::HTTP_OK;

            default:
                return Response::HTTP_BAD_REQUEST;
        }
    }
}



