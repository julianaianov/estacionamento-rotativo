<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MotivoBaixaAiController extends Controller
{
    public function index()
    {
        return view('cadastros.motivos-baixa-ai.index');
    }

    public function create()
    {
        return view('cadastros.motivos-baixa-ai.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('motivos-baixa-ai.index')->with('success', 'Motivo cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.motivos-baixa-ai.show');
    }

    public function edit($id)
    {
        return view('cadastros.motivos-baixa-ai.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('motivos-baixa-ai.index')->with('success', 'Motivo atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('motivos-baixa-ai.index')->with('success', 'Motivo excluído com sucesso!');
    }
}

