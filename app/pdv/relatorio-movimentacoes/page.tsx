"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download, Printer } from "lucide-react"
import Link from "next/link"

type MovimentacaoPDV = {
  pdv: string
  tipo: string
  limite: string
  vendasReal: string
  valorCaixa: string
  creditoCredito: string
  creditoDebito: string
  limiteDisponivel: string
  comissao: string
  valorPagar: string
  minBoleto: string
}

export default function RelatorioMovimentacoesPage() {
  const [lojista, setLojista] = useState("")
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")

  // Dados de exemplo para a tabela
  const movimentacoes: MovimentacaoPDV[] = [
    {
      pdv: "PRAIA E SOL",
      tipo: "Pós-pago",
      limite: "0,00",
      vendasReal: "480,00",
      valorCaixa: "135,00",
      creditoCredito: "345,00",
      creditoDebito: "-135,00",
      limiteDisponivel: "48,00",
      comissao: "87,00",
      valorPagar: "800,00",
      minBoleto: "800,00"
    },
    {
      pdv: "Vasconcelos LTDA (BANCA 2 IRMAOS)",
      tipo: "Pós-pago",
      limite: "0,00",
      vendasReal: "0,00",
      valorCaixa: "0,00",
      creditoCredito: "0,00",
      creditoDebito: "0,00",
      limiteDisponivel: "0,00",
      comissao: "0,00",
      valorPagar: "800,00",
      minBoleto: "800,00"
    },
    {
      pdv: "BANCA DO TREM TABACARIA",
      tipo: "Pós-pago",
      limite: "4.000,00",
      vendasReal: "0,00",
      valorCaixa: "0,00",
      creditoCredito: "0,00",
      creditoDebito: "4.000,00",
      limiteDisponivel: "0,00",
      comissao: "0,00",
      valorPagar: "800,00",
      minBoleto: "800,00"
    }
  ]

  const handleExportarCSV = () => {
    // Implementar exportação CSV
    console.log("Exportando CSV...")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Movimentações</h1>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label>Lojista:</Label>
                  <Select value={lojista} onValueChange={setLojista}>
                    <SelectTrigger>
                      <SelectValue placeholder="TODOS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">TODOS</SelectItem>
                      <SelectItem value="praia-sol">PRAIA E SOL</SelectItem>
                      <SelectItem value="vasconcelos">Vasconcelos LTDA</SelectItem>
                      <SelectItem value="banca-trem">BANCA DO TREM TABACARIA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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

              <div className="flex justify-between items-center">
                <Button 
                  onClick={handleExportarCSV}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Exportar CSV
                </Button>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
                  <TableHead>PDV</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Limite</TableHead>
                  <TableHead>Vendas Real</TableHead>
                  <TableHead>V.Caixa(Din.)</TableHead>
                  <TableHead>C.Cred + C.Deb.</TableHead>
                  <TableHead>Limite disponível</TableHead>
                  <TableHead>Comissão</TableHead>
                  <TableHead>Valor pagar</TableHead>
                  <TableHead>Mín. boleto</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movimentacoes.map((mov, index) => (
                  <TableRow key={index}>
                    <TableCell>{mov.pdv}</TableCell>
                    <TableCell>{mov.tipo}</TableCell>
                    <TableCell>{mov.limite}</TableCell>
                    <TableCell>{mov.vendasReal}</TableCell>
                    <TableCell>{mov.valorCaixa}</TableCell>
                    <TableCell>{mov.creditoCredito}</TableCell>
                    <TableCell>{mov.limiteDisponivel}</TableCell>
                    <TableCell>{mov.comissao}</TableCell>
                    <TableCell>{mov.valorPagar}</TableCell>
                    <TableCell>{mov.minBoleto}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        <Printer className="h-4 w-4" />
                      </Button>
                    </TableCell>
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