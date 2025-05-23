"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface MotivosBaixaAI {
  codigo: string
  descricao: string
  status: string
}

export default function MotivosBaixaAIDashboard() {
  const [motivos, setMotivos] = useState<MotivosBaixaAI[]>([
    { codigo: "1", descricao: "TESTE", status: "Inativo" },
    { codigo: "2", descricao: "SISTEMA NÃO DEU BAIXA", status: "Ativo" },
    { codigo: "3", descricao: "RUA SEM PLACA", status: "Ativo" },
    { codigo: "4", descricao: "CLIENTE TROCOU O SETOR", status: "Ativo" },
    { codigo: "5", descricao: "DIGITO ERRADO", status: "Ativo" },
    { codigo: "6", descricao: "VAGA SEM PLACA", status: "Ativo" },
    { codigo: "7", descricao: "MAIORES DEVEDORES", status: "Ativo" },
    { codigo: "8", descricao: "VEÍCULOS SEM VAGA DE GARAGEM", status: "Ativo" },
  ])

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Cadastro de motivos de baixa de AI</h1>
        </div>
        <div className="flex items-center">
          <Button 
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Adicionar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Card className="mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 w-32">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Descrição
                </th>
                <th scope="col" className="px-6 py-3 w-32">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-20">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {motivos.map((motivo, index) => (
                <tr 
                  key={motivo.codigo} 
                  className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {motivo.codigo}
                  </td>
                  <td className="px-6 py-4">
                    {motivo.descricao}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      motivo.status === 'Ativo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {motivo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <Link href="/cadastros">
          <Button 
            variant="outline" 
            className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white border-none flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mt-6"></div>
    </div>
  )
} 