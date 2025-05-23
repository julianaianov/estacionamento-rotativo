"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Route, Star, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Rota {
  id: number
  descricao: string
  operador: string
  status: string
  area: string
  setor: string
}

export default function RotasPage() {
  const [rotas] = useState<Rota[]>([
    {
      id: 1,
      descricao: "Rota Centro 1",
      operador: "João Silva",
      status: "Ativo",
      area: "CENTRO",
      setor: "SETOR 1"
    },
    {
      id: 2,
      descricao: "Rota Orla 1",
      operador: "Maria Santos",
      status: "Ativo",
      area: "ORLA",
      setor: "SETOR 2"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 rounded shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Route className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Rotas</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <Link href="/cadastros/rotas/novo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar novo
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-950">
                  <th className="px-4 py-2 text-left">Código</th>
                  <th className="px-4 py-2 text-left">Descrição</th>
                  <th className="px-4 py-2 text-left">Operador</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Área</th>
                  <th className="px-4 py-2 text-left">Setor</th>
                  <th className="px-4 py-2 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {rotas.map((rota) => (
                  <tr key={rota.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{rota.id}</td>
                    <td className="px-4 py-2">{rota.descricao}</td>
                    <td className="px-4 py-2">{rota.operador}</td>
                    <td className="px-4 py-2">{rota.status}</td>
                    <td className="px-4 py-2">{rota.area}</td>
                    <td className="px-4 py-2">{rota.setor}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
        <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 