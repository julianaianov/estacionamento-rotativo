"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function CreditosEstornoPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [cpf, setCpf] = useState("")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <RefreshCcw className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Créditos/Estorno Gerados</h1>
          </div>
          <div className="flex gap-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Exportar CSV
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Exportar PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Label>Data Inicial:</Label>
              <Input
                type="date"
                value={dataInicial}
                onChange={(e) => setDataInicial(e.target.value)}
              />
            </div>
            <div>
              <Label>Data Final:</Label>
              <Input
                type="date"
                value={dataFinal}
                onChange={(e) => setDataFinal(e.target.value)}
              />
            </div>
            <div>
              <Label>CPF:</Label>
              <Input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite o CPF"
              />
            </div>
          </div>

          <div className="mt-6">
            <Button 
              onClick={handleBuscar}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      {mostrarResultados && (
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Data</th>
                    <th className="px-4 py-2 text-left">Hora</th>
                    <th className="px-4 py-2 text-left">Tipo</th>
                    <th className="px-4 py-2 text-left">Descrição</th>
                    <th className="px-4 py-2 text-left">Usuário</th>
                    <th className="px-4 py-2 text-right">Valor</th>
                    <th className="px-4 py-2 text-left">Observação</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example data row */}
                  <tr className="border-b">
                    <td className="px-4 py-2">16/04/2024</td>
                    <td className="px-4 py-2">14:30</td>
                    <td className="px-4 py-2">Crédito</td>
                    <td className="px-4 py-2">Recarga de saldo</td>
                    <td className="px-4 py-2">João Silva</td>
                    <td className="px-4 py-2 text-right">R$ 50,00</td>
                    <td className="px-4 py-2">Recarga via PIX</td>
                  </tr>
                </tbody>
                {/* Footer with totals */}
                <tfoot>
                  <tr className="bg-gray-50 font-bold">
                    <td colSpan={5} className="px-4 py-2 text-right">Total:</td>
                    <td className="px-4 py-2 text-right">R$ 50,00</td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Back button */}
      <div className="flex justify-center mt-8">
        <Link href="/relatorios">
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