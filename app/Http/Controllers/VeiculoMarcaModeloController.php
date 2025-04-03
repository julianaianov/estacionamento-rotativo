<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VeiculoMarcaModeloController extends Controller
{
    public function index()
    {
        return view('cadastros.veiculos-marca-modelo.index');
    }

    public function create()
    {
        return view('cadastros.veiculos-marca-modelo.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('veiculos-marca-modelo.index')->with('success', 'Marca/Modelo cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.veiculos-marca-modelo.show');
    }

    public function edit($id)
    {
        return view('cadastros.veiculos-marca-modelo.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('veiculos-marca-modelo.index')->with('success', 'Marca/Modelo atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('veiculos-marca-modelo.index')->with('success', 'Marca/Modelo excluído com sucesso!');
    }
}

