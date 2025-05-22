<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RuaSetor;

class RuaSetorController extends Controller
{
    public function index()
    {
        return response()->json(RuaSetor::all());
    }

    public function create()
    {
        return view('cadastros.ruas-setores.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'setor' => 'nullable|string|max:255',
            'cep' => 'nullable|string|max:20',
            'bairro' => 'nullable|string|max:255',
            'cidade' => 'nullable|string|max:255',
            'uf' => 'nullable|string|max:2',
        ]);
        $ruaSetor = RuaSetor::create($validated);
        return response()->json($ruaSetor, 201);
    }

    public function show($id)
    {
        $ruaSetor = RuaSetor::findOrFail($id);
        return response()->json($ruaSetor);
    }

    public function edit($id)
    {
        return view('cadastros.ruas-setores.edit');
    }

    public function update(Request $request, $id)
    {
        $ruaSetor = RuaSetor::findOrFail($id);
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'setor' => 'nullable|string|max:255',
            'cep' => 'nullable|string|max:20',
            'bairro' => 'nullable|string|max:255',
            'cidade' => 'nullable|string|max:255',
            'uf' => 'nullable|string|max:2',
        ]);
        $ruaSetor->update($validated);
        return response()->json($ruaSetor);
    }

    public function destroy($id)
    {
        $ruaSetor = RuaSetor::findOrFail($id);
        $ruaSetor->delete();
        return response()->json(['message' => 'Excluído com sucesso']);
    }
}

