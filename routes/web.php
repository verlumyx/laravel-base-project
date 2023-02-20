<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/panel_admin/login', fn() => view("panel_admin"));
Route::get('/panel_admin/forget_password', fn() => view("panel_admin"));
Route::get('/panel_admin/reset_password', fn() => view("panel_admin"))->name("password.reset");

Route::get('/panel_admin/dashboard', fn() => view("panel_admin"));

Route::get('/panel_admin/experiencias_diarias', fn() => view("panel_admin"));
Route::get('/panel_admin/experiencias_diarias/crear', fn() => view("panel_admin"));
Route::get('/panel_admin/experiencias_diarias/editar/{id}', fn() => view("panel_admin"));
