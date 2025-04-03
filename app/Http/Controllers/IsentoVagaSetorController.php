<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IsentoVagaSetorController extends Controller
{
    public function index()
    {
        return view('cadastros.isentos-vaga-setor.index');
    }

    public function create()
    {
        return view('cadastros.isentos-vaga-setor.create');
    }

    public function store(Request $request)
    {
        // Lógica para salvar
        return redirect()->route('isentos-vaga-setor.index')->with('success', 'Isento por Vaga/Setor cadastrado com sucesso!');
    }  'Isento por Vaga/Setor cadastrado com sucesso!');
    }

    public function show($id)
    {
        return view('cadastros.isentos-vaga-setor.show');
    }

    public function edit($id)
    {
        return view('cadastros.isentos-vaga-setor.edit');
    }

    public function update(Request $request, $id)
    {
        // Lógica para atualizar
        return redirect()->route('isentos-vaga-setor.index')->with('success', 'Isento por Vaga/Setor atualizado com sucesso!');
    }

    public function destroy($id)
    {
        // Lógica para excluir
        return redirect()->route('isentos-vaga-setor.index')->with('success', 'Isento por Vaga/Setor excluído com sucesso!');
    }
}

