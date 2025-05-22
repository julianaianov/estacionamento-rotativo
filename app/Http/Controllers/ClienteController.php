<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    public function index(Request $request)
    {
        $clientes = Cliente::with('placas')->get();
        return response()->json($clientes);
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

    // Buscar cliente pela placa
    public function buscarPorPlaca(Request $request)
    {
        $placa = $request->query('placa');
        if (!$placa) {
            return response()->json(['message' => 'Placa não informada'], 400);
        }
        $cliente = \App\Models\Cliente::whereHas('placas', function($q) use ($placa) {
            $q->where('placa', $placa);
        })->with('placas')->first();
        if (!$cliente) {
            return response()->json(['message' => 'Cliente não encontrado'], 404);
        }
        return response()->json($cliente);
    }

    public function adicionarPlaca(Request $request, $id)
    {
        $request->validate([
            'placa' => 'required|string|unique:placas,placa',
        ]);
        $cliente = \App\Models\Cliente::findOrFail($id);
        $cliente->placas()->create(['placa' => $request->placa]);
        return response()->json(['message' => 'Placa adicionada com sucesso!']);
    }
}

