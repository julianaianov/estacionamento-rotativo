"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, DollarSign, FileSpreadsheet, Download } from "lucide-react"
import Link from "next/link"

type FaturamentoData = {
  data: string
  dinheiro: number
  cCredito: number
  cDebito: number
  comissao: number
}

export default function FaturamentoPeriodoPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [tipoRelatorio, setTipoRelatorio] = useState("faturado")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo para as tabelas
  const dadosEstacionamento: FaturamentoData[] = [
    { data: "01/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 },
    { data: "02/04/2025", dinheiro: 2.50, cCredito: 0.00, cDebito: 0.00, comissao: 0.25 },
    { data: "03/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 },
    { data: "04/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 },
    { data: "05/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 2.00, comissao: 0.20 }
  ]

  const dadosRecCTPagto: FaturamentoData[] = [
    { data: "01/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 },
    { data: "02/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 },
    { data: "03/04/2025", dinheiro: 20.00, cCredito: 0.00, cDebito: 0.00, comissao: 2.00 },
    { data: "04/04/2025", dinheiro: 15.00, cCredito: 0.00, cDebito: 0.00, comissao: 1.50 },
    { data: "05/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 }
  ]

  const dadosRegularizacao: FaturamentoData[] = [
    { data: "01/04/2025", dinheiro: 142.50, cCredito: 42.50, cDebito: 2.50, comissao: 18.75 },
    { data: "02/04/2025", dinheiro: 20.00, cCredito: 0.00, cDebito: 67.50, comissao: 8.75 },
    { data: "03/04/2025", dinheiro: 67.50, cCredito: 0.00, cDebito: 157.50, comissao: 22.50 },
    { data: "04/04/2025", dinheiro: 7.50, cCredito: 0.00, cDebito: 60.00, comissao: 6.75 },
    { data: "05/04/2025", dinheiro: 0.00, cCredito: 0.00, cDebito: 0.00, comissao: 0.00 }
  ]

  const calcularTotal = (dados: FaturamentoData[]) => {
    return dados.reduce(
      (acc, curr) => ({
        data: "TOTAL",
        dinheiro: acc.dinheiro + curr.dinheiro,
        cCredito: acc.cCredito + curr.cCredito,
        cDebito: acc.cDebito + curr.cDebito,
        comissao: acc.comissao + curr.comissao
      }),
      { data: "", dinheiro: 0, cCredito: 0, cDebito: 0, comissao: 0 }
    )
  }

  const formatarValor = (valor: number) => {
    return valor.toFixed(2)
  }

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  const renderTabela = (titulo: string, dados: FaturamentoData[]) => {
    const total = calcularTotal(dados)
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{titulo}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Dinheiro</TableHead>
                <TableHead className="text-right">C.crédito</TableHead>
                <TableHead className="text-right">C.débito</TableHead>
                <TableHead className="text-right">Comissão</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dados.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.data}</TableCell>
                  <TableCell className="text-right">{formatarValor(item.dinheiro)}</TableCell>
                  <TableCell className="text-right">{formatarValor(item.cCredito)}</TableCell>
                  <TableCell className="text-right">{formatarValor(item.cDebito)}</TableCell>
                  <TableCell className="text-right">{formatarValor(item.comissao)}</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold">
                <TableCell>{total.data}</TableCell>
                <TableCell className="text-right">{formatarValor(total.dinheiro)}</TableCell>
                <TableCell className="text-right">{formatarValor(total.cCredito)}</TableCell>
                <TableCell className="text-right">{formatarValor(total.cDebito)}</TableCell>
                <TableCell className="text-right">{formatarValor(total.comissao)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Faturamento por Período</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Filters Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <Label>Data Inicial:</Label>
                  <Input
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
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
              </div>

              <div className="space-y-4">
                <RadioGroup
                  value={tipoRelatorio}
                  onValueChange={setTipoRelatorio}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="faturado" id="faturado" />
                    <Label htmlFor="faturado">Faturado no período</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fechado" id="fechado" />
                    <Label htmlFor="fechado">Fechado no período</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleBuscar}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Buscar
                </Button>
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
          </CardContent>
        </Card>

        {/* Results */}
        {mostrarResultados && (
          <div className="space-y-6">
            {renderTabela("ESTACIONAMENTO", dadosEstacionamento)}
            {renderTabela("REC CT.PAGTO/CARTÃO", dadosRecCTPagto)}
            {renderTabela("REGULARIZAÇÃO", dadosRegularizacao)}
          </div>
        )}

        {/* Back button */}
        <div className="flex justify-center">
          <Link href="/relatorios">
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