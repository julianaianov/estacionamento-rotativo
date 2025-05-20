<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PosPago;

class PosPagoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
        ]);
        $posPago = PosPago::create([
            'cliente_id' => $request->cliente_id,
        ]);
        return response()->json($posPago, 201);
    }
} 