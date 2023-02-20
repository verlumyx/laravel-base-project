<?php

declare(strict_types=1);

namespace Plenitud\Usuario\Infrastructure\Controller\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

final class LoginController extends ApiController
{
    public function __invoke(Request $request): JsonResponse
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);


        if ($validator->fails()) {
            return new JsonResponse([
                'ok' => false,
                'content' => [],
                'error' => $validator->errors()
            ], JsonResponse::HTTP_BAD_REQUEST);
        }

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return new JsonResponse([
                'ok' => false,
                'content' => [],
                'error' => ['Unauthorized']
            ], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        return new JsonResponse([
            'ok' => true,
            'content' => [
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ],
            'error' => []
        ], JsonResponse::HTTP_OK);
    }
}