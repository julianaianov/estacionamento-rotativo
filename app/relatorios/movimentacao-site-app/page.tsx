"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, ArrowLeft, Download, Printer } from "lucide-react"
import Link from "next/link"

export default function MovimentacaoSiteAppPage() {
  const [dataInicio, setDataInicio] = useState("")
  const [dataTermino, setDataTermino] = useState("")
  const [tipo, setTipo] = useState("TODOS")
  const [tipoPagamento, setTipoPagamento] = useState("TODOS")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo
  const movimentacoes = [
    {
      placa: "SRC6F95",
      data: "16/04/2025 07:10",
      cliente: "MAR02232483",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "2,50",
      taxa: ""
    },
    {
      placa: "KYU3H86",
      data: "16/04/2025 07:41",
      cliente: "MAR02232484",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "2,00",
      taxa: ""
    },
    {
      placa: "KXY6I28",
      data: "16/04/2025 08:18",
      cliente: "MAR02232485",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "5,00",
      taxa: ""
    },
    {
      placa: "LOY8260",
      data: "16/04/2025 08:19",
      cliente: "MAR02232486",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "5,00",
      taxa: ""
    },
    {
      placa: "FPT9D67",
      data: "16/04/2025 08:56",
      cliente: "MAR02232487",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "2,50",
      taxa: ""
    },
    {
      placa: "LMA9200",
      data: "16/04/2025 09:18",
      cliente: "MAR02232488",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "2,50",
      taxa: ""
    },
    {
      placa: "HXR3041",
      data: "16/04/2025 09:43",
      cliente: "MAR02232489",
      ticket: "",
      tipo: "Tickets",
      tPagamento: "USO DE SALDO",
      valor: "2,00",
      taxa: ""
    }
  ]

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <LayoutGrid className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório Movimentação Site e Aplicativo</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <Label>Data Início:</Label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
            </div>
            <div>
              <Label>Data Término:</Label>
              <Input
                type="date"
                value={dataTermino}
                onChange={(e) => setDataTermino(e.target.value)}
              />
            </div>
            <div>
              <Label>Tipo:</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="TICKETS">Tickets</SelectItem>
                  <SelectItem value="RECARGAS">Recargas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Tipo pagamento:</Label>
              <Select value={tipoPagamento} onValueChange={setTipoPagamento}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="USO_SALDO">Uso de Saldo</SelectItem>
                  <SelectItem value="PIX">PIX</SelectItem>
                  <SelectItem value="CARTAO">Cartão</SelectItem>
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
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Placa</th>
                    <th className="px-4 py-2 text-left">Data</th>
                    <th className="px-4 py-2 text-left">Cliente</th>
                    <th className="px-4 py-2 text-left">Ticket</th>
                    <th className="px-4 py-2 text-left">Tipo</th>
                    <th className="px-4 py-2 text-left">T.Pagamento</th>
                    <th className="px-4 py-2 text-right">Valor</th>
                    <th className="px-4 py-2 text-right">Taxa</th>
                    <th className="px-4 py-2 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {movimentacoes.map((mov, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2">{mov.placa}</td>
                      <td className="px-4 py-2">{mov.data}</td>
                      <td className="px-4 py-2">{mov.cliente}</td>
                      <td className="px-4 py-2">{mov.ticket}</td>
                      <td className="px-4 py-2">{mov.tipo}</td>
                      <td className="px-4 py-2">{mov.tPagamento}</td>
                      <td className="px-4 py-2 text-right">{mov.valor}</td>
                      <td className="px-4 py-2 text-right">{mov.taxa}</td>
                      <td className="px-4 py-2 text-center">
                        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
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

      <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
} 