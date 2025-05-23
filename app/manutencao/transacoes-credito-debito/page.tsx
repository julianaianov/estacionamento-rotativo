"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"

type Transaction = {
  placa: string
  cliente: string
  data: string
  situacao: string
  tipoPagamento: string
  codAutorizacao: string
  valor: string
}

export default function TransacoesCreditoDebitoPage() {
  const [dataInicio, setDataInicio] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [situacao, setSituacao] = useState("Aprovados")
  const [tipoPagamento, setTipoPagamento] = useState("TODOS")
  const [somenteEstornados, setSomenteEstornados] = useState(false)

  // Mock data for the table
  const transactions: Transaction[] = [
    {
      placa: "104.650.847-45",
      cliente: "Paulo Eduardo Moreira filho",
      data: "01/04/2025 09:00",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "5dac767675857c5feb31e5790677ba71",
      valor: "R$ 30,00"
    },
    {
      placa: "754.010.887-87",
      cliente: "Nilton Lima da Silva",
      data: "01/04/2025 10:38",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "9eed9d94c74b8ab687f080df3b8edf28",
      valor: "R$ 10,00"
    },
    {
      placa: "012.785.677-39",
      cliente: "Sidnei da conceicao Silva",
      data: "01/04/2025 11:33",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "6fd0d55c7185e5596ee61b9857c73690",
      valor: "R$ 50,00"
    },
    {
      placa: "140.517.497-89",
      cliente: "Matheus Menezes de Almeida",
      data: "01/04/2025 11:50",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "19c1903d7d027a3f050ff4a0476e3964",
      valor: "R$ 100,00"
    },
    {
      placa: "140.517.497-89",
      cliente: "Matheus Menezes de Almeida",
      data: "01/04/2025 11:50",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "64daa3059fe1dc3011d21d60c57a75bf",
      valor: "R$ 2,50"
    },
    {
      placa: "081.917.597-80",
      cliente: "Carlos Eduardo Barbalho",
      data: "01/04/2025 12:17",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "0519584c64cf2b5e474d34ee39ed5f96",
      valor: "R$ 2,50"
    },
    {
      placa: "021.121.457-46",
      cliente: "André Andrade",
      data: "01/04/2025 14:59",
      situacao: "Aprovado",
      tipoPagamento: "PIX",
      codAutorizacao: "ec1392a62b2614ab35d70b5b8b6e7ee7",
      valor: "R$ 100,00"
    }
  ]

  const handleBuscar = () => {
    // Aqui você implementaria a lógica real de busca
    console.log("Buscando transações com os filtros:", {
      dataInicio,
      dataFinal,
      situacao,
      tipoPagamento,
      somenteEstornados
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="bg-white shadow dark:bg-gray-900">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Transações Crédito/Débito</h1>
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
                <Label>Data Final:</Label>
                <Input
                  type="date"
                  value={dataFinal}
                  onChange={(e) => setDataFinal(e.target.value)}
                />
              </div>

              <div>
                <Label>Situação:</Label>
                <Select value={situacao} onValueChange={setSituacao}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Aprovados">Aprovados</SelectItem>
                    <SelectItem value="Pendentes">Pendentes</SelectItem>
                    <SelectItem value="Rejeitados">Rejeitados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tipo Pagamento:</Label>
                <Select value={tipoPagamento} onValueChange={setTipoPagamento}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">TODOS</SelectItem>
                    <SelectItem value="PIX">PIX</SelectItem>
                    <SelectItem value="CREDITO">Crédito</SelectItem>
                    <SelectItem value="DEBITO">Débito</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="estornados"
                  checked={somenteEstornados}
                  onCheckedChange={(checked) => setSomenteEstornados(checked as boolean)}
                />
                <Label htmlFor="estornados">Somente estornados</Label>
              </div>

              <div>
                <Button 
                  onClick={handleBuscar}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Buscar
                </Button>
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
                  <TableHead>Placa</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Situação</TableHead>
                  <TableHead>Tipo Pag.</TableHead>
                  <TableHead>Cód. Autorização</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.placa}</TableCell>
                    <TableCell>{transaction.cliente}</TableCell>
                    <TableCell>{transaction.data}</TableCell>
                    <TableCell>{transaction.situacao}</TableCell>
                    <TableCell>{transaction.tipoPagamento}</TableCell>
                    <TableCell className="font-mono">{transaction.codAutorizacao}</TableCell>
                    <TableCell className="text-right">{transaction.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Back button */}
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