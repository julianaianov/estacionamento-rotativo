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
use App\Http\Controllers\RuaSetorController;
use App\Http\Controllers\IsentoController;
use App\Http\Controllers\PosPagoController;

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
Route::apiResource('clientes', ClienteController::class);
// Buscar cliente pela placa
Route::get('/clientes/busca-por-placa', [ClienteController::class, 'buscarPorPlaca']);
// Cadastrar como isento
Route::post('/isentos', [IsentoController::class, 'store']);
// Cadastrar como pós-pago
Route::post('/pos-pagos', [PosPagoController::class, 'store']);
// Total de isentos
Route::get('/isentos/total', [IsentoController::class, 'total']);
// Adicionar placa a um cliente
Route::post('/clientes/{id}/placas', [ClienteController::class, 'adicionarPlaca']);

// API Routes para Usuários
Route::middleware(['api'])->group(function () {
    Route::get('/usuarios', [UserController::class, 'index']);
    Route::post('/usuarios', [UserController::class, 'store']);
});

// API Routes para Ruas e Setores
Route::apiResource('ruas-setores', RuaSetorController::class); 