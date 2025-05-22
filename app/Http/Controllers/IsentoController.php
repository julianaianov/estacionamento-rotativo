<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Isento;

class IsentoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'motivo' => 'required|string|max:255',
        ]);
        $isento = Isento::create([
            'cliente_id' => $request->cliente_id,
            'motivo' => $request->motivo,
        ]);
        return response()->json($isento, 201);
    }

    public function total()
    {
        return response()->json(['total' => \App\Models\Isento::count()]);
    }

    public function index()
    {
        $isentos = \App\Models\Isento::with(['cliente.placas'])->get();
        $result = $isentos->map(function($isento) {
            $cliente = $isento->cliente;
            $placa = $cliente && $cliente->placas->count() > 0 ? $cliente->placas->first()->placa : null;
            return [
                'id' => $isento->id,
                'nome' => $cliente->nome ?? '',
                'documento' => $cliente->documento ?? '',
                'placa' => $placa,
                'motivo' => $isento->motivo,
            ];
        });
        return response()->json($result);
    }
} 