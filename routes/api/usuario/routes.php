<?php

use Illuminate\Support\Facades\Route;

Route::post('/auth/login', \Plenitud\Usuario\Infrastructure\Controller\Api\LoginController::class);
Route::post('/auth/forgot-password', \Plenitud\Usuario\Infrastructure\Controller\Api\ForgotPasswordController::class);
Route::post('/auth/reset-password', \Plenitud\Usuario\Infrastructure\Controller\Api\NewPasswordController::class);

Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::post('/auth/logout', \Plenitud\Usuario\Infrastructure\Controller\Api\LogoutController::class);
    Route::get('/auth/refresh', \Plenitud\Usuario\Infrastructure\Controller\Api\RefreshController::class);
});