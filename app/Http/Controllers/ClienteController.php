<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function index()
    {
        return view('cadastros.clientes.index');
    }

    public function create()
    {
        return view('cadastros.clientes.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('clientes.index')->with('success', 'Cliente cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.clientes.show');
    }

    public function edit($id)
    {
        return view('cadastros.clientes.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('clientes.index')->with('success', 'Cliente atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('clientes.index')->with('success', 'Cliente excluído com sucesso!');
    }
}

