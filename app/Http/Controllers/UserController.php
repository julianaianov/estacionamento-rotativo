<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();
        return response()->json($users);
    }

    public function create()
    {
        return view('cadastros.usuarios.create');
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            Log::info('Tentando criar novo usuário', [
                'request' => $request->all(),
                'headers' => $request->headers->all()
            ]);

            $validated = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'confirmed', Password::defaults()],
                'role' => ['required', 'string', 'in:admin,operador,supervisor'],
                'status' => ['boolean'],
            ]);

            Log::info('Validação passou', ['validated' => $validated]);

            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
                'role' => $validated['role'],
                'status' => $validated['status'] ?? true,
            ]);

            Log::info('Usuário criado com sucesso', ['user' => $user]);

            DB::commit();

            if ($request->wantsJson() || $request->ajax()) {
                return response()->json([
                    'message' => 'Usuário cadastrado com sucesso!',
                    'user' => $user
                ], 201);
            }

            return redirect()->route('usuarios.index')
                           ->with('success', 'Usuário cadastrado com sucesso!');
        } catch (\Exception $e) {
            DB::rollBack();
            
            Log::error('Erro ao criar usuário', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'request' => $request->all()
            ]);

            if ($request->wantsJson() || $request->ajax()) {
                return response()->json([
                    'message' => 'Erro ao cadastrar usuário',
                    'error' => $e->getMessage()
                ], 500);
            }

            return back()
                ->withInput()
                ->withErrors(['error' => 'Erro ao cadastrar usuário: ' . $e->getMessage()]);
        }
    }

    public function show($id)
    {
        return view('cadastros.usuarios.show');
    }

    public function edit($id)
    {
        return view('cadastros.usuarios.edit');
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::findOrFail($id);
            
            $validated = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $id],
                'password' => ['nullable', 'confirmed', Password::defaults()],
                'role' => ['required', 'string', 'in:admin,operador,supervisor'],
                'status' => ['boolean'],
            ]);

            $user->name = $validated['name'];
            $user->email = $validated['email'];
            $user->role = $validated['role'];
            $user->status = $validated['status'] ?? true;

            if (!empty($validated['password'])) {
                $user->password = Hash::make($validated['password']);
            }

            $user->save();

            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Usuário atualizado com sucesso!',
                    'user' => $user
                ]);
            }

            return redirect()->route('usuarios.index')->with('success', 'Usuário atualizado com sucesso!');
        } catch (\Exception $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Erro ao atualizar usuário',
                    'error' => $e->getMessage()
                ], 500);
            }
            return back()->withErrors(['error' => 'Erro ao atualizar usuário: ' . $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            if (request()->wantsJson()) {
                return response()->json([
                    'message' => 'Usuário excluído com sucesso!'
                ]);
            }

            return redirect()->route('usuarios.index')->with('success', 'Usuário excluído com sucesso!');
        } catch (\Exception $e) {
            if (request()->wantsJson()) {
                return response()->json([
                    'message' => 'Erro ao excluir usuário',
                    'error' => $e->getMessage()
                ], 500);
            }
            return back()->withErrors(['error' => 'Erro ao excluir usuário: ' . $e->getMessage()]);
        }
    }
} 