<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CadastroController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\TariffController;
use App\Http\Controllers\OperacionalController;
use App\Http\Controllers\ParkingRecordController;
use App\Http\Controllers\TempoRealController;
use App\Http\Controllers\PDVController;
use App\Http\Controllers\RelatorioController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ParquimetroController;
use App\Http\Controllers\RuaSetorController;
use App\Http\Controllers\IsentoPosController;
use App\Http\Controllers\FeriadoController;
use App\Http\Controllers\SacMotivoController;
use App\Http\Controllers\TabelaValorController;
use App\Http\Controllers\TipoAdvertenciaController;
use App\Http\Controllers\TurnoController;
use App\Http\Controllers\ManutencaoVeiculoController;
use App\Http\Controllers\VeiculoMarcaModeloController;
use App\Http\Controllers\ImpostoController;
use App\Http\Controllers\IsentoVagaSetorController;
use App\Http\Controllers\RotaController;
use App\Http\Controllers\OperacaoParquimetroController;
use App\Http\Controllers\MotivoBaixaAiController;
use App\Http\Controllers\DispositivoController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Autenticação
Auth::routes();

// Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Rotas protegidas por autenticação
Route::middleware(['auth'])->group(function () {
    // Rotas para Cadastros
    Route::prefix('cadastros')->group(function () {
        Route::get('/', [CadastroController::class, 'index'])->name('cadastros');
        
        // Rotas de usuários
        Route::get('usuarios/novo', [UserController::class, 'create'])->name('usuarios.novo');
        Route::resource('usuarios', UserController::class);
        
        // Outras rotas de cadastro
        Route::resource('veiculos', VehicleController::class);
        Route::resource('tarifas', TariffController::class);
        Route::resource('clientes', ClienteController::class);
        Route::resource('parquimetros', ParquimetroController::class);
        Route::resource('ruas-setores', RuaSetorController::class);
        Route::resource('isentos-pos-pago', IsentoPosController::class);
        Route::resource('feriados', FeriadoController::class);
        Route::resource('sac-motivos', SacMotivoController::class);
        Route::resource('tabelas-valores', TabelaValorController::class);
        Route::resource('tipo-advertencias', TipoAdvertenciaController::class);
        Route::resource('turnos', TurnoController::class);
        Route::resource('manutencao-veiculos', ManutencaoVeiculoController::class);
        Route::resource('veiculos-marca-modelo', VeiculoMarcaModeloController::class);
        Route::resource('impostos', ImpostoController::class);
        Route::resource('isentos-vaga-setor', IsentoVagaSetorController::class);
        Route::resource('rotas', RotaController::class);
        Route::resource('operacoes-parquimetro', OperacaoParquimetroController::class);
        Route::resource('motivos-baixa-ai', MotivoBaixaAiController::class);
        Route::resource('dispositivos', DispositivoController::class);
    });

    // Rotas para Operacional
    Route::prefix('operacional')->group(function () {
        Route::get('/', [OperacionalController::class, 'index'])->name('operacional');
        Route::resource('registros', ParkingRecordController::class);
        Route::get('/registros/{registro}/finalizar', [ParkingRecordController::class, 'finalizar'])->name('registros.finalizar');
        Route::post('/registros/{registro}/finalizar', [ParkingRecordController::class, 'processarFinalizacao'])->name('registros.processar-finalizacao');
    });

    // Rotas para Tempo Real
    Route::prefix('tempo-real')->group(function () {
        Route::get('/', [TempoRealController::class, 'index'])->name('tempo-real');
        Route::get('/monitoramento', [TempoRealController::class, 'monitoramento'])->name('tempo-real.monitoramento');
    });

    // Rotas para PDV
    Route::prefix('pdv')->group(function () {
        Route::get('/', [PDVController::class, 'index'])->name('pdv.index');
        Route::post('/venda', [PDVController::class, 'processarVenda'])->name('pdv.venda');
        Route::post('/recarga', [PDVController::class, 'recarga'])->name('pdv.recarga');
    });

    // Rotas para Relatórios
    Route::prefix('relatorios')->group(function () {
        Route::get('/', [RelatorioController::class, 'index'])->name('relatorios.index');
        Route::get('/financeiros', [RelatorioController::class, 'financeiros'])->name('relatorios.financeiros');
        Route::get('/operacionais', [RelatorioController::class, 'operacionais'])->name('relatorios.operacionais');
    });
});
