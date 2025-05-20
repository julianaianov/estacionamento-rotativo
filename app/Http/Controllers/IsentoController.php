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
        return response()->json(
            \App\Models\Isento::with('cliente.placas')->get()
        );
    }
} 