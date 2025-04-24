"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Star, Pencil, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FeriadosPage() {
  // Dados de exemplo
  const feriados = [
    { codigo: 1, descricao: "Independencia", data: "07/09", ano: "TODOS", fixo: "Sim" },
    { codigo: 3, descricao: "Nossa Senhora Aparecida", data: "12/10", ano: "TODOS", fixo: "Sim" },
    { codigo: 5, descricao: "Sexta feira santa", data: "19/04", ano: "2019", fixo: "Não" },
    { codigo: 7, descricao: "PROCLAMACAO DA REPUBLICA", data: "15/11", ano: "TODOS", fixo: "Sim" },
    { codigo: 9, descricao: "FINADOS", data: "02/11", ano: "TODOS", fixo: "Sim" },
    { codigo: 11, descricao: "NATAL", data: "25/12", ano: "TODOS", fixo: "Sim" },
    { codigo: 13, descricao: "Dia do comércio", data: "21/10", ano: "2019", fixo: "Não" },
    { codigo: 15, descricao: "DIA DA CONSCIÊNCIA NEGRA", data: "20/11", ano: "2019", fixo: "Sim" }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Cadastro de Feriados</h1>
          </div>
          <Star className="h-6 w-6 text-yellow-400" />
        </div>
      </div>

      {/* Add button */}
      <div className="mb-6">
        <Link href="/cadastros/feriados/novo">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Adicionar novo Feriado
          </Button>
        </Link>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Código Feriado</th>
                  <th className="px-4 py-2 text-left">Descrição</th>
                  <th className="px-4 py-2 text-left">Data</th>
                  <th className="px-4 py-2 text-left">Ano</th>
                  <th className="px-4 py-2 text-left">Fixo</th>
                  <th className="px-4 py-2 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {feriados.map((feriado, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2">{feriado.codigo}</td>
                    <td className="px-4 py-2">{feriado.descricao}</td>
                    <td className="px-4 py-2">{feriado.data}</td>
                    <td className="px-4 py-2">{feriado.ano}</td>
                    <td className="px-4 py-2">{feriado.fixo}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center space-x-2">
                        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Back button */}
      <div className="flex justify-center mt-8">
        <Link href="/cadastros">
          <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
} 