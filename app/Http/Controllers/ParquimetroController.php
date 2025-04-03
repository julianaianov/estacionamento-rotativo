<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ParquimetroController extends Controller
{
    public function index()
    {
        return view('cadastros.parquimetros.index');
    }

    public function create()
    {
        return view('cadastros.parquimetros.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('parquimetros.index')->with('success', 'Parquímetro cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.parquimetros.show');
    }

    public function edit($id)
    {
        return view('cadastros.parquimetros.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('parquimetros.index')->with('success', 'Parquímetro atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('parquimetros.index')->with('success', 'Parquímetro excluído com sucesso!');
    }
}

