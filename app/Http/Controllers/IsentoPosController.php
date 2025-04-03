<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IsentoPosController extends Controller
{
    public function index()
    {
        return view('cadastros.isentos-pos-pago.index');
    }

    public function create()
    {
        return view('cadastros.isentos-pos-pago.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('isentos-pos-pago.index')->with('success', 'Isento/Pós-Pago cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.isentos-pos-pago.show');
    }

    public function edit($id)
    {
        return view('cadastros.isentos-pos-pago.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('isentos-pos-pago.index')->with('success', 'Isento/Pós-Pago atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('isentos-pos-pago.index')->with('success', 'Isento/Pós-Pago excluído com sucesso!');
    }
}

