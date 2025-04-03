<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TurnoController extends Controller
{
    public function index()
    {
        return view('cadastros.turnos.index');
    }

    public function create()
    {
        return view('cadastros.turnos.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('turnos.index')->with('success', 'Turno cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.turnos.show');
    }

    public function edit($id)
    {
        return view('cadastros.turnos.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('turnos.index')->with('success', 'Turno atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('turnos.index')->with('success', 'Turno excluído com sucesso!');
    }
}

