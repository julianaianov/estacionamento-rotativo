<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

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
        try {
            // Validação dos dados
            $validated = $request->validate([
                'nome' => 'required|string|max:255',
                'documento' => 'required|string|max:32',
                'tipo_pessoa' => 'required|in:cpf,cnpj',
                'email' => 'nullable|email',
                'telefone' => 'nullable|string|max:32',
            ]);

            // Criação do cliente
            $cliente = Cliente::create($validated);

            // Salvar placas, se enviadas
            if ($request->has('placas') && is_array($request->placas)) {
                foreach ($request->placas as $placa) {
                    if (!empty($placa)) {
                        $cliente->placas()->create(['placa' => $placa]);
                    }
                }
            }

            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Cliente cadastrado com sucesso!',
                    'cliente' => $cliente->load('placas')
                ], 201);
            }

            return redirect()->route('clientes.index')->with('success', 'Cliente cadastrado com sucesso!');
        } catch (\Exception $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Erro ao cadastrar cliente',
                    'error' => $e->getMessage()
                ], 500);
            }
            return back()->withErrors(['error' => 'Erro ao cadastrar cliente: ' . $e->getMessage()]);
        }
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

