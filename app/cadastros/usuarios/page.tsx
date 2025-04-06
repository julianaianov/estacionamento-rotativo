"use client"

import Link from "next/link"
import { useState } from "react"
import { Users, ArrowLeft } from "lucide-react"

interface User {
  codigo: string
  nome: string
  login: string
  status: string
  tipoUsuario: string
}

export default function UsuariosDashboard() {
  const [users] = useState<User[]>([
    {
      codigo: "309",
      nome: "Adriano Correia Ribeiro",
      login: "GM03",
      status: "Ativo",
      tipoUsuario: "AGENTE DE TRANSITO"
    },
    {
      codigo: "311",
      nome: "Adriano de Andrade dos Santos",
      login: "GM04",
      status: "Ativo",
      tipoUsuario: "AGENTE DE TRANSITO"
    },
    {
      codigo: "313",
      nome: "Adriano Pessanha Santana",
      login: "GM05",
      status: "Ativo",
      tipoUsuario: "AGENTE DE TRANSITO"
    },
    {
      codigo: "3",
      nome: "AGATHA MARINHO",
      login: "agatha",
      status: "Inativo",
      tipoUsuario: "ADM"
    },
    {
      codigo: "315",
      nome: "Alex Sandro Pinto Maia",
      login: "GM06",
      status: "Inativo",
      tipoUsuario: "AGENTE DE TRANSITO"
    },
    {
      codigo: "452",
      nome: "Anderson",
      login: "Anderson",
      status: "Ativo",
      tipoUsuario: "CCo"
    }
  ])

  return (
          <div>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Users className="w-6 h-6 mr-2" />
            <h1 className="text-2xl font-bold">Cadastro de Usuários</h1>
          </div>
          <Link
            href="/cadastros/usuarios/novo"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            Adicionar novo Usuário
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Código Usuário
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Login
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Tipo Usuário
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.codigo} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{user.codigo}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.nome}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.login}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Ativo"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.tipoUsuario}
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600 hover:text-blue-900">
                      <Link href={`/cadastros/usuarios/editar/${user.codigo}`} className="font-medium">
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <Link
          href="/"
          className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white px-6 py-1.5 rounded text-sm font-medium inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
      </div>
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
}

