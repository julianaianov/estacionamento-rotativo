"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Watch, Star, ArrowLeft, PenSquare } from "lucide-react"
import Link from "next/link"

interface Turno {
  id: number
  descricao: string
  horaInicio: string
  horaFim: string
  status: "Ativo" | "Inativo"
}

export default function TurnosPage() {
  const [turnos] = useState<Turno[]>([
    { id: 1, descricao: "MANHÃ", horaInicio: "06:00", horaFim: "12:00", status: "Ativo" },
    { id: 2, descricao: "TARDE", horaInicio: "12:00", horaFim: "18:00", status: "Ativo" },
    { id: 3, descricao: "NOITE", horaInicio: "18:00", horaFim: "00:00", status: "Ativo" },
    { id: 4, descricao: "MADRUGADA", horaInicio: "00:00", horaFim: "06:00", status: "Inativo" }
  ])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Watch className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Turnos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Add Button */}
      <div className="mb-6">
        <Link href="/cadastros/turnos/novo">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Adicionar novo
          </Button>
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                {["ID", "Descrição", "Hora Início", "Hora Fim", "Status", "Ações"].map((title) => (
                  <th
                    key={title}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {turnos.map((turno) => (
                <tr key={turno.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {turno.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {turno.descricao}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {turno.horaInicio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {turno.horaFim}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      turno.status === "Ativo"
                        ? "bg-green-100 text-green-800 dark:bg-green-600 dark:text-white"
                        : "bg-red-100 text-red-800 dark:bg-red-600 dark:text-white"
                    }`}>
                      {turno.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    <button className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">
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