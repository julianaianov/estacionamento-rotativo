<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SacMotivoController extends Controller
{
    public function index()
    {
        return view('cadastros.sac-motivos.index');
    }

    public function create()
    {
        return view('cadastros.sac-motivos.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('sac-motivos.index')->with('success', 'Motivo cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.sac-motivos.show');
    }

    public function edit($id)
    {
        return view('cadastros.sac-motivos.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('sac-motivos.index')->with('success', 'Motivo atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('sac-motivos.index')->with('success', 'Motivo excluído com sucesso!');
    }
}

