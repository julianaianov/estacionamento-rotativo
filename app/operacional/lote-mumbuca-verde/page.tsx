"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, ArrowLeft, Search, Download } from "lucide-react"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface LoteItem {
  cliente: string
  email: string
  documento: string
  dataHora: string
  valor: string
}

export default function LoteMumbucaVerdeDashboard() {
  const [dataInicio, setDataInicio] = useState("")
  const [dataTermino, setDataTermino] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [lotes, setLotes] = useState<LoteItem[]>([])

  const handleBuscar = () => {
    setLoading(true)
    // Simulação de chamada à API
    setTimeout(() => {
      setLotes([
        {
          cliente: "Alberto",
          email: "lessimoraes4@gmail.com",
          documento: "414.203.497-91",
          dataHora: "01/04/2025 07:30",
          valor: "R$ 0,82"
        },
        {
          cliente: "Francisco Onorato",
          email: "franciscoonoratofilho@gmail.com",
          documento: "036.028.197-44",
          dataHora: "01/04/2025 08:19",
          valor: "R$ 0,10"
        },
        {
          cliente: "Ademir David",
          email: "ademirs.david@gmail.com",
          documento: "006.619.067-36",
          dataHora: "01/04/2025 08:38",
          valor: "R$ 0,82"
        },
        // Adicione mais itens conforme necessário
      ])
      setShowResults(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Leaf className="h-6 w-6 mr-2 text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">Lotes de conversão de créditos</h1>
        </div>
      </div>

      {/* Filtros */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Data Término
            </label>
            <Input
              type="date"
              value={dataTermino}
              onChange={(e) => setDataTermino(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="space-x-2">
            <Button 
              onClick={handleBuscar}
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Buscando...
                </span>
              ) : (
                <span className="flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </span>
              )}
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Listar últimos lotes
            </Button>
          </div>
          {showResults && (
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Gerar lote
              </span>
            </Button>
          )}
        </div>
      </Card>

      {/* Tabela de Resultados */}
      {showResults && (
        <Card className="mb-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Documento</TableHead>
                  <TableHead>Data/Hora</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lotes.map((lote, index) => (
                  <TableRow key={index}>
                    <TableCell>{lote.cliente}</TableCell>
                    <TableCell>{lote.email}</TableCell>
                    <TableCell>{lote.documento}</TableCell>
                    <TableCell>{lote.dataHora}</TableCell>
                    <TableCell>{lote.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <Link href="/">
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