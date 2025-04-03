<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OperacaoParquimetroController extends Controller
{
    public function index()
    {
        return view('cadastros.operacoes-parquimetro.index');
    }

    public function create()
    {
        return view('cadastros.operacoes-parquimetro.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('operacoes-parquimetro.index')->with('success', 'Operação cadastrada com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.operacoes-parquimetro.show');
    }

    public function edit($id)
    {
        return view('cadastros.operacoes-parquimetro.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('operacoes-parquimetro.index')->with('success', 'Operação atualizada com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('operacoes-parquimetro.index')->with('success', 'Operação excluída com sucesso!');
    }
}

