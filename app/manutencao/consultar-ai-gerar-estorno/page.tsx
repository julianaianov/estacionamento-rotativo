"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function ConsultarAIGerarEstornoPage() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [plate, setPlate] = useState("")
  const [aiStatus, setAiStatus] = useState("pendente")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (startDate && endDate) {
      setShowResults(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="bg-white shadow dark:bg-gray-900">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Search className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Consulta: Avisos De Irregularidade/Gerar Estorno</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="startDate">Data Inicial:</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="endDate">Data Final:</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="plate">Placa:</Label>
                <Input
                  id="plate"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="Digite a placa do veículo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-base">Status da AI:</Label>
                <RadioGroup
                  defaultValue="pendente"
                  className="flex items-center space-x-4 mt-2"
                  onValueChange={setAiStatus}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pendente" id="pendente" />
                    <Label htmlFor="pendente">AI Pendente</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="quitada" id="quitada" />
                    <Label htmlFor="quitada">AI Quitada</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Buscar Dados
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card>
            <CardHeader>
              <CardTitle>Resultados da busca:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data/Hora
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Placa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        08/04/2024 14:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ABC1234
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        R$ 50,00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Pendente
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Button variant="link" className="text-blue-600 hover:text-blue-800">
                          Gerar Estorno
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back button at the bottom */}
        <div className="flex justify-center">
          <Link href="/manutencao">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 