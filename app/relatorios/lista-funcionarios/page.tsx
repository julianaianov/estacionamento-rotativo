"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ListaFuncionariosPage() {
  const [showResults, setShowResults] = useState(false)
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [usuario, setUsuario] = useState("todos")
  const [formato, setFormato] = useState("detalhado")

  const handleBuscarDados = () => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Lista de Funcionários</h1>
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
          <CardHeader className="px-0 pt-0">
            <CardTitle>Filtros de Busca</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataInicio">Data Início:</Label>
                <Input 
                  type="date" 
                  id="dataInicio"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dataFinal">Data Final:</Label>
                <Input 
                  type="date" 
                  id="dataFinal"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="usuario">Usuário:</Label>
              <Select value={usuario} onValueChange={setUsuario}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">:: TODOS ::</SelectItem>
                  <SelectItem value="1035">AP35 - Marcelo</SelectItem>
                  <SelectItem value="2024">M-ANDREA</SelectItem>
                  <SelectItem value="2004">M-CRISTINA</SelectItem>
                  <SelectItem value="2020">M-KARINE</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="formato">Formato:</Label>
              <Select value={formato} onValueChange={setFormato}>
                <SelectTrigger>
                  <SelectValue placeholder="Detalhado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="detalhado">Detalhado</SelectItem>
                  <SelectItem value="resumido">Resumido</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between">
              <Button 
                onClick={handleBuscarDados}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Buscar Dados
              </Button>
              {showResults && (
                <div className="space-x-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Exportar CSV
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Exportar PDF
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card className="mt-6">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Usuário</th>
                      <th className="px-4 py-3 text-left font-medium">Nome</th>
                      <th className="px-4 py-3 text-left font-medium">H.Início</th>
                      <th className="px-4 py-3 text-left font-medium">H.Fim</th>
                      <th className="px-4 py-3 text-left font-medium">Horas</th>
                      <th className="px-4 py-3 text-left font-medium">V.Calculado</th>
                      <th className="px-4 py-3 text-left font-medium">V.Entregue</th>
                      <th className="px-4 py-3 text-left font-medium">Diferença</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3">1035</td>
                      <td className="px-4 py-3">AP35 - Marcelo</td>
                      <td className="px-4 py-3">07/04/25 07:35:07</td>
                      <td className="px-4 py-3">//</td>
                      <td className="px-4 py-3">00:00</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3">2024</td>
                      <td className="px-4 py-3">M-ANDREA</td>
                      <td className="px-4 py-3">07/04/25 07:08:08</td>
                      <td className="px-4 py-3">//</td>
                      <td className="px-4 py-3">00:00</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3">2020</td>
                      <td className="px-4 py-3">M-KARINE</td>
                      <td className="px-4 py-3">07/04/25 07:07:26</td>
                      <td className="px-4 py-3">07/04/25 15:10:08</td>
                      <td className="px-4 py-3">08:02</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 