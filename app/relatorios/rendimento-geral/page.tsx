"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function RendimentoGeralPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [origem, setOrigem] = useState("TODOS")
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
            <DollarSign className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Rendimento Geral</h1>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label>Data inicial</Label>
              <Input
                type="date"
                value={dataInicial}
                onChange={(e) => setDataInicial(e.target.value)}
              />
            </div>
            <div>
              <Label>Data final</Label>
              <Input
                type="date"
                value={dataFinal}
                onChange={(e) => setDataFinal(e.target.value)}
              />
            </div>
            <div>
              <Label>Origem</Label>
              <Select value={origem} onValueChange={setOrigem}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="AGENTE_CAMPO">AGENTE DE CAMPO</SelectItem>
                  <SelectItem value="SISTEMA">SISTEMA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6">
            <Button 
              onClick={handleBuscar}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Buscar Dados
            </Button>
          </div>
        </CardContent>
      </Card>

      {mostrarResultados && (
        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Nome</th>
                    <th className="px-4 py-2 text-center" colSpan={3}>Tickets</th>
                    <th className="px-4 py-2 text-center" colSpan={2}>Regularizações</th>
                    <th className="px-4 py-2 text-center" colSpan={4}>Recargas</th>
                    <th className="px-4 py-2 text-center" colSpan={2}>Cartões</th>
                    <th className="px-4 py-2 text-center">TOTAL</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2"></th>
                    <th className="px-4 py-2">Qtde</th>
                    <th className="px-4 py-2">Reap.</th>
                    <th className="px-4 py-2">Valor</th>
                    <th className="px-4 py-2">Qtde</th>
                    <th className="px-4 py-2">Valor</th>
                    <th className="px-4 py-2">Qtde cartão</th>
                    <th className="px-4 py-2">Valor cartão</th>
                    <th className="px-4 py-2">Qtde saldo</th>
                    <th className="px-4 py-2">Valor saldo</th>
                    <th className="px-4 py-2">Qtde vendas</th>
                    <th className="px-4 py-2">Valor vendas</th>
                    <th className="px-4 py-2">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">AGENTE DE CAMPO</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-center">39</td>
                    <td className="px-4 py-2 text-right">102,50</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-right font-bold">102,50</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold">
                    <td className="px-4 py-2">TOTAL GERAL</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-center">39</td>
                    <td className="px-4 py-2 text-right">102,50</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-center">0</td>
                    <td className="px-4 py-2 text-right">0,00</td>
                    <td className="px-4 py-2 text-right">102,50</td>
                  </tr>
                </tbody>
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
    </div>
  )
} 