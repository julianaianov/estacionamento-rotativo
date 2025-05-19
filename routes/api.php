<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ParquimetroController;
use App\Http\Controllers\TabelaValorController;
use App\Http\Controllers\MotivoBaixaAiController;
use App\Http\Controllers\FeriadoController;
use App\Http\Controllers\RotaController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API Routes para Parquímetros
Route::apiResource('parquimetros', ParquimetroController::class);

// API Routes para Tabela de Valores
Route::apiResource('tabela-valores', TabelaValorController::class);

// API Routes para Motivos de Baixa
Route::apiResource('motivos-baixa', MotivoBaixaAiController::class);

// API Routes para Feriados
Route::apiResource('feriados', FeriadoController::class);

// API Routes para Rotas
Route::apiResource('rotas', RotaController::class);

// API Routes para Clientes
Route::middleware(['web'])->group(function () {
    Route::apiResource('clientes', ClienteController::class);
});

// API Routes para Usuários
Route::middleware(['api'])->group(function () {
    Route::get('/usuarios', [UserController::class, 'index']);
    Route::post('/usuarios', [UserController::class, 'store']);
}); 