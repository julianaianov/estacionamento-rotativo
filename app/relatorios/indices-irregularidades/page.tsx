"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function IndicesIrregularidadesPage() {
  const [showResults, setShowResults] = useState(false)
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [area, setArea] = useState("todas")
  const [agruparPorTipoAI, setAgruparPorTipoAI] = useState(false)
  const [agruparPorMes, setAgruparPorMes] = useState(false)
  const [agruparPorHora, setAgruparPorHora] = useState(false)
  const [aiXMultas, setAiXMultas] = useState(false)

  // Sample data for the chart - replace with real data
  const data = [
    { date: "31/03", aiQuitadas: 41, aiPendente: 282, multas: 0 },
    { date: "01/04", aiQuitadas: 117, aiPendente: 1298, multas: 0 },
    { date: "02/04", aiQuitadas: 86, aiPendente: 947, multas: 0 },
    { date: "03/04", aiQuitadas: 94, aiPendente: 1011, multas: 0 },
  ]

  const handleBuscarDados = () => {
    setShowResults(true)
  }

  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Índices de Irregularidades</h1>
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
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Área
              </label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODAS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">:: TODAS ::</SelectItem>
                  <SelectItem value="area1">Área 1</SelectItem>
                  <SelectItem value="area2">Área 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Início
              </label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Final
              </label>
              <Input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agruparPorTipoAI"
                checked={agruparPorTipoAI}
                onChange={(e) => setAgruparPorTipoAI(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agruparPorTipoAI" className="ml-2 block text-sm text-gray-900">
                Agrupar por tipo AI
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agruparPorMes"
                checked={agruparPorMes}
                onChange={(e) => setAgruparPorMes(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agruparPorMes" className="ml-2 block text-sm text-gray-900">
                Agrupar por Mês
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agruparPorHora"
                checked={agruparPorHora}
                onChange={(e) => setAgruparPorHora(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agruparPorHora" className="ml-2 block text-sm text-gray-900">
                Agrupar por hora
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="aiXMultas"
                checked={aiXMultas}
                onChange={(e) => setAiXMultas(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="aiXMultas" className="ml-2 block text-sm text-gray-900">
                AI x Multas
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <Button
              onClick={handleBuscarDados}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Buscar Dados
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Exportar CSV
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Exportar PDF
            </Button>
          </div>

          {showResults && (
            <>
              <div className="mt-6 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="aiQuitadas"
                      name="AI Quitadas"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="aiPendente"
                      name="AI Pendente"
                      stroke="#dc2626"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="multas"
                      name="Multas"
                      stroke="#eab308"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Data
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Qtde Quitado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Valor Quitado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Qtde Pendente
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Qtde Multas
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Qtde Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          R$ Pendente
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          % Pendente
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">31/03</td>
                        <td className="px-6 py-4 whitespace-nowrap">41</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 102,50</td>
                        <td className="px-6 py-4 whitespace-nowrap">282</td>
                        <td className="px-6 py-4 whitespace-nowrap">0</td>
                        <td className="px-6 py-4 whitespace-nowrap">323</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 705,00</td>
                        <td className="px-6 py-4 whitespace-nowrap">87,31%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">01/04</td>
                        <td className="px-6 py-4 whitespace-nowrap">117</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 292,50</td>
                        <td className="px-6 py-4 whitespace-nowrap">1.298</td>
                        <td className="px-6 py-4 whitespace-nowrap">0</td>
                        <td className="px-6 py-4 whitespace-nowrap">1.415</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 3.245,00</td>
                        <td className="px-6 py-4 whitespace-nowrap">91,73%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">02/04</td>
                        <td className="px-6 py-4 whitespace-nowrap">86</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 215,00</td>
                        <td className="px-6 py-4 whitespace-nowrap">947</td>
                        <td className="px-6 py-4 whitespace-nowrap">0</td>
                        <td className="px-6 py-4 whitespace-nowrap">1.033</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 2.365,00</td>
                        <td className="px-6 py-4 whitespace-nowrap">91,67%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">03/04</td>
                        <td className="px-6 py-4 whitespace-nowrap">94</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 235,00</td>
                        <td className="px-6 py-4 whitespace-nowrap">1.011</td>
                        <td className="px-6 py-4 whitespace-nowrap">0</td>
                        <td className="px-6 py-4 whitespace-nowrap">1.105</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ 2.527,50</td>
                        <td className="px-6 py-4 whitespace-nowrap">91,49%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
} 