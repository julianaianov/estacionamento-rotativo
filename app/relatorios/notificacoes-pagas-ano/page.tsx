"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileBarChart, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function NotificacoesPagasAnoPage() {
  const [anoInicial, setAnoInicial] = useState("2025")
  const [anoFinal, setAnoFinal] = useState("2025")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  // Dados de exemplo
  const dados = [
    {
      ano: "2025",
      quantidadeAIs: "27.369",
      valorUn: "R$ 2,50",
      valorTotal: "R$ 68.422,50"
    },
    {
      ano: "2025",
      quantidadeAIs: "1.671",
      valorUn: "R$ 5,00",
      valorTotal: "R$ 8.355,00"
    }
  ]

  const totais = {
    registros: "2",
    quantidade: "29.040",
    valor: "R$ 76.777,50"
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <FileBarChart className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Notificações Pagas por Ano</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Ano Inicial:</Label>
              <Input
                type="number"
                value={anoInicial}
                onChange={(e) => setAnoInicial(e.target.value)}
                min="2000"
                max="2100"
              />
            </div>
            <div>
              <Label>Ano Final:</Label>
              <Input
                type="number"
                value={anoFinal}
                onChange={(e) => setAnoFinal(e.target.value)}
                min="2000"
                max="2100"
              />
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
                    <th className="px-4 py-2 text-left">Ano</th>
                    <th className="px-4 py-2 text-left">Quantidade AIs</th>
                    <th className="px-4 py-2 text-left">Valor Un.</th>
                    <th className="px-4 py-2 text-left">Valor Total</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{item.ano}</td>
                      <td className="px-4 py-2">{item.quantidadeAIs}</td>
                      <td className="px-4 py-2">{item.valorUn}</td>
                      <td className="px-4 py-2">{item.valorTotal}</td>
                    </tr>
                  ))}
                  <tr className="bg-green-100">
                    <td className="px-4 py-2 font-bold">Total de Registros: {totais.registros}</td>
                    <td className="px-4 py-2 font-bold">{totais.quantidade}</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2 font-bold">{totais.valor}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>Ano:</strong> {anoInicial}<br />
                <strong>Total Registros:</strong> {totais.quantidade}<br />
                <strong>Valor Total:</strong> {totais.valor}
              </p>
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