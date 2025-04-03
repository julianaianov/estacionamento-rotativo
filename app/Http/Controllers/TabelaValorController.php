<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TabelaValorController extends Controller
{
    public function index()
    {
        return view('cadastros.tabelas-valores.index');
    }

    public function create()
    {
        return view('cadastros.tabelas-valores.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('tabelas-valores.index')->with('success', 'Tabela/Valor cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.tabelas-valores.show');
    }

    public function edit($id)
    {
        return view('cadastros.tabelas-valores.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('tabelas-valores.index')->with('success', 'Tabela/Valor atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('tabelas-valores.index')->with('success', 'Tabela/Valor excluído com sucesso!');
    }
}

