<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DispositivoController extends Controller
{
    public function index()
    {
        return view('cadastros.dispositivos.index');
    }

    public function create()
    {
        return view('cadastros.dispositivos.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('dispositivos.index')->with('success', 'Dispositivo cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.dispositivos.show');
    }

    public function edit($id)
    {
        return view('cadastros.dispositivos.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('dispositivos.index')->with('success', 'Dispositivo atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('dispositivos.index')->with('success', 'Dispositivo excluído com sucesso!');
    }
}

