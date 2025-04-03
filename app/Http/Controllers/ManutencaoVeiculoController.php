<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManutencaoVeiculoController extends Controller
{
    public function index()
    {
        return view('cadastros.manutencao-veiculos.index');
    }

    public function create()
    {
        return view('cadastros.manutencao-veiculos.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('manutencao-veiculos.index')->with('success', 'Manutenção cadastrada com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.manutencao-veiculos.show');
    }

    public function edit($id)
    {
        return view('cadastros.manutencao-veiculos.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('manutencao-veiculos.index')->with('success', 'Manutenção atualizada com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('manutencao-veiculos.index')->with('success', 'Manutenção excluída com sucesso!');
    }
}

