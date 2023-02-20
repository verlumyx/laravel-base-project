<?php

declare(strict_types=1);

namespace Plenitud\Usuario\Infrastructure\Controller\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

final class RefreshController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function __invoke()
    {
        return new JsonResponse([
            'ok' => true,
            'content' => [
                'user' => Auth::user(),
                'authorisation' => [
                    'token' =>  Auth::refresh(),
                    'type' => 'bearer',
                ]
            ],
            'error' => []
        ], JsonResponse::HTTP_OK);
    }
}