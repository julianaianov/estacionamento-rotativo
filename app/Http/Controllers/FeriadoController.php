<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FeriadoController extends Controller
{
    public function index()
    {
        return view('cadastros.feriados.index');
    }

    public function create()
    {
        return view('cadastros.feriados.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('feriados.index')->with('success', 'Feriado cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.feriados.show');
    }

    public function edit($id)
    {
        return view('cadastros.feriados.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('feriados.index')->with('success', 'Feriado atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('feriados.index')->with('success', 'Feriado excluído com sucesso!');
    }
}

