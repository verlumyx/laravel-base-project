<?php

declare(strict_types=1);

namespace Plenitud\Usuario\Infrastructure\Controller\Api;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

final class LogoutController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function __invoke()
    {
        Auth::logout();
        return response()->json([
            'ok' => true,
            'content' => [],
            'error' => []
        ], JsonResponse::HTTP_OK);
    }
}