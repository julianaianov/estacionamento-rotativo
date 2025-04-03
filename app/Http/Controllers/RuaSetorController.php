<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RuaSetorController extends Controller
{
    public function index()
    {
        return view('cadastros.ruas-setores.index');
    }

    public function create()
    {
        return view('cadastros.ruas-setores.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('ruas-setores.index')->with('success', 'Rua/Setor cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.ruas-setores.show');
    }

    public function edit($id)
    {
        return view('cadastros.ruas-setores.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('ruas-setores.index')->with('success', 'Rua/Setor atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('ruas-setores.index')->with('success', 'Rua/Setor excluído com sucesso!');
    }
}

