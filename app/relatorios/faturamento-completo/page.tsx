"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, DollarSign, Download, FileSpreadsheet, BarChart } from "lucide-react"
import Link from "next/link"

export default function FaturamentoCompletoPage() {
  const [showResults, setShowResults] = useState(false)
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")

  const handleBuscarDados = () => {
    // Simular busca de dados
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Faturamento Completo</h1>
            </div>
            <Link href="/relatorios">
              <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dataInicio">Data Início</Label>
                <Input
                  id="dataInicio"
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dataFim">Data Fim</Label>
                <Input
                  id="dataFim"
                  type="date"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <Button onClick={handleBuscarDados} className="bg-blue-600 hover:bg-blue-700 text-white">
                Buscar Dados
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <div className="space-y-6">
            {/* Resumo do Faturamento */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Faturamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Geral</p>
                    <p className="text-2xl font-bold text-blue-700">R$ 15.240,00</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Ticket Médio</p>
                    <p className="text-2xl font-bold text-green-700">R$ 25,40</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total de Tickets</p>
                    <p className="text-2xl font-bold text-yellow-700">600</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detalhamento por Forma de Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle>Detalhamento por Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Forma de Pagamento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantidade
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Valor Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Percentual
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Cartão de Crédito
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          250
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          R$ 6.250,00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          41%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          PIX
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          200
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          R$ 5.000,00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          33%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Dinheiro
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          150
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          R$ 3.990,00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          26%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Gráfico de Faturamento Diário */}
            <Card>
              <CardHeader>
                <CardTitle>Faturamento Diário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  {/* Aqui você pode adicionar um gráfico usando uma biblioteca como Chart.js */}
                  <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                    <BarChart className="h-12 w-12 text-gray-400" />
                    <span className="ml-2 text-gray-500">Gráfico de Faturamento Diário</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Botões de Exportação */}
            <div className="flex justify-end space-x-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Exportar Excel
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Exportar PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 