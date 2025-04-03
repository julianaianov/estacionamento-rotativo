<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TipoAdvertenciaController extends Controller
{
    public function index()
    {
        return view('cadastros.tipo-advertencias.index');
    }

    public function create()
    {
        return view('cadastros.tipo-advertencias.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('tipo-advertencias.index')->with('success', 'Tipo de Advertência cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.tipo-advertencias.show');
    }

    public function edit($id)
    {
        return view('cadastros.tipo-advertencias.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('tipo-advertencias.index')->with('success', 'Tipo de Advertência atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('tipo-advertencias.index')->with('success', 'Tipo de Advertência excluído com sucesso!');
    }
}

