"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Info, Star, ArrowLeft, PenSquare } from "lucide-react"
import Link from "next/link"

interface Motivo {
  id: number
  descricao: string
  prioridade: "Normal" | "Alta"
  notificar: "Sim" | "Não"
  diasParaAtendimento: number
}

export default function SacMotivosPage() {
  const [motivos] = useState<Motivo[]>([
    { id: 15, descricao: "ATUALIZAÇÃO DE PLACA", prioridade: "Normal", notificar: "Não", diasParaAtendimento: 1 },
    { id: 23, descricao: "COMPROVANTE DE PAGAMENTO", prioridade: "Normal", notificar: "Não", diasParaAtendimento: 0 },
    { id: 1, descricao: "DUVIDA APP", prioridade: "Alta", notificar: "Não", diasParaAtendimento: 1 },
    { id: 3, descricao: "DUVIDA NOTIFICACAO", prioridade: "Normal", notificar: "Não", diasParaAtendimento: 2 },
    { id: 2, descricao: "DUVIDA SINALIZACAO", prioridade: "Normal", notificar: "Não", diasParaAtendimento: 2 },
    { id: 6, descricao: "DUVIDAS DE UTILIZACAO", prioridade: "Alta", notificar: "Não", diasParaAtendimento: 2 },
    { id: 24, descricao: "ELOGIO", prioridade: "Normal", notificar: "Sim", diasParaAtendimento: 2 },
    { id: 21, descricao: "ERRO DE PLACA", prioridade: "Normal", notificar: "Não", diasParaAtendimento: 0 },
    { id: 27, descricao: "ERRO DO AGENTE", prioridade: "Normal", notificar: "Sim", diasParaAtendimento: 0 },
    { id: 9, descricao: "PLACA MARICA", prioridade: "Alta", notificar: "Não", diasParaAtendimento: 2 }
  ])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow rounded-lg mb-6">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Info className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Motivos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Add Button */}
      <div className="mb-6">
        <Link href="/cadastros/sac-motivos/novo">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Adicionar novo
          </Button>
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Prioridade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Notificar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Dias para atend.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {motivos.map((motivo) => (
                <tr key={motivo.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {motivo.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {motivo.descricao}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {motivo.prioridade}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {motivo.notificar}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {motivo.diasParaAtendimento}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <button className="text-blue-600 hover:text-blue-800">
                      <PenSquare className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Back button and gradient line */}
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
