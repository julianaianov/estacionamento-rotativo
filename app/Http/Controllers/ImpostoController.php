<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImpostoController extends Controller
{
    public function index()
    {
        return view('cadastros.impostos.index');
    }

    public function create()
    {
        return view('cadastros.impostos.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('impostos.index')->with('success', 'Imposto cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.impostos.show');
    }

    public function edit($id)
    {
        return view('cadastros.impostos.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('impostos.index')->with('success', 'Imposto atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('impostos.index')->with('success', 'Imposto excluído com sucesso!');
    }
}

