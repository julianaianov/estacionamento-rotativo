<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RotaController extends Controller
{
    public function index()
    {
        return view('cadastros.rotas.index');
    }

    public function create()
    {
        return view('cadastros.rotas.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('rotas.index')->with('success', 'Rota cadastrada com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.rotas.show');
    }

    public function edit($id)
    {
        return view('cadastros.rotas.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('rotas.index')->with('success', 'Rota atualizada com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('rotas.index')->with('success', 'Rota excluída com sucesso!');
    }
}

