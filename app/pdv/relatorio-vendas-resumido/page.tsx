"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, ChartBar } from "lucide-react"
import Link from "next/link"

type VendaResumida = {
  data: string
  quantidade: number
  valor: string
  formaPagamento: string
}

export default function RelatorioVendasResumidoPage() {
  const [pdv, setPdv] = useState("todos")
  const [dataInicial, setDataInicial] = useState("01/04/2025")
  const [dataFinal, setDataFinal] = useState("30/04/2025")

  // Dados de exemplo para a tabela
  const vendas: VendaResumida[] = [
    {
      data: "01/04/2025",
      quantidade: 15,
      valor: "R$ 450,00",
      formaPagamento: "Cartão de Crédito"
    },
    {
      data: "01/04/2025",
      quantidade: 8,
      valor: "R$ 240,00",
      formaPagamento: "PIX"
    },
    {
      data: "01/04/2025",
      quantidade: 5,
      valor: "R$ 150,00",
      formaPagamento: "Dinheiro"
    }
  ]

  const handleBuscar = () => {
    // Implementar busca
    console.log("Buscando dados...")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <ChartBar className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Vendas Resumido</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Filters Card */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 max-w-md">
                <div>
                  <Label htmlFor="pdv">PDV *</Label>
                  <Select value={pdv} onValueChange={setPdv}>
                    <SelectTrigger>
                      <SelectValue placeholder=":: SELECIONE ::" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">:: SELECIONE ::</SelectItem>
                      <SelectItem value="praia-sol">PRAIA E SOL</SelectItem>
                      <SelectItem value="vasconcelos">Vasconcelos LTDA</SelectItem>
                      <SelectItem value="banca-trem">BANCA DO TREM TABACARIA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dataInicial">Data inicial *</Label>
                  <Input
                    id="dataInicial"
                    type="text"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="dataFinal">Data final *</Label>
                  <Input
                    id="dataFinal"
                    type="text"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                  />
                </div>

                <div>
                  <Button 
                    onClick={handleBuscar}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-24"
                  >
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Forma de Pagamento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendas.map((venda, index) => (
                  <TableRow key={index}>
                    <TableCell>{venda.data}</TableCell>
                    <TableCell>{venda.quantidade}</TableCell>
                    <TableCell>{venda.valor}</TableCell>
                    <TableCell>{venda.formaPagamento}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Back button */}
        <div className="flex justify-center">
          <Link href="/pdv">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
              <FileText className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 