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
        // Validação dos dados
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'documento' => 'required|string|max:32',
            'tipo_pessoa' => 'required|in:cpf,cnpj',
            'email' => 'nullable|email',
            'telefone' => 'nullable|string|max:32',
        ]);

        // Criação do cliente
        $cliente = \App\Models\Cliente::create($validated);

        // Salvar placas, se enviadas
        if ($request->has('placas') && is_array($request->placas)) {
            foreach ($request->placas as $placa) {
                if (!empty($placa)) {
                    $cliente->placas()->create(['placa' => $placa]);
                }
            }
        }

        // Retorno JSON para API
        return response()->json([
            'message' => 'Cliente cadastrado com sucesso!',
            'cliente' => $cliente->load('placas')
        ], 201);
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

