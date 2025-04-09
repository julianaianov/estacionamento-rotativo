"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileText, Download, Mail, Printer, Search } from "lucide-react"
import Link from "next/link"

type Pagamento = {
  data: string
  pdv: string
  vencimento: string
  tipoPagamento: string
  emitente: string
  nossoNumero: string
  valor: string
  status: string
}

export default function RelatorioPagamentosPage() {
  const [filtroPeriodo, setFiltroPeriodo] = useState("emissao")
  const [dataInicial, setDataInicial] = useState("01/04/2025")
  const [dataFinal, setDataFinal] = useState("08/04/2025")
  const [lojista, setLojista] = useState("todos")
  const [status, setStatus] = useState("todos")
  const [nossoNumero, setNossoNumero] = useState("")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo para a tabela
  const pagamentos: Pagamento[] = [
    {
      data: "02/04/2025 11:11",
      pdv: "DROGARIA ULTRAFARMA",
      vencimento: "13/04/2025",
      tipoPagamento: "BOLETO",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029304",
      valor: "407,60",
      status: "Aberto"
    },
    {
      data: "02/04/2025 11:12",
      pdv: "DROGARIA PRECO POPULAR",
      vencimento: "13/04/2025",
      tipoPagamento: "BOLETO",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029346",
      valor: "43,25",
      status: "Aberto"
    },
    {
      data: "02/04/2025 11:12",
      pdv: "INFOAI INFORMATICA",
      vencimento: "13/04/2025",
      tipoPagamento: "BOLETO",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029359",
      valor: "112,80",
      status: "Aberto"
    },
    {
      data: "02/04/2025 11:13",
      pdv: "NACAO RUBRO NEGRA",
      vencimento: "13/04/2025",
      tipoPagamento: "BOLETO",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029393",
      valor: "132,50",
      status: "Aberto"
    },
    {
      data: "02/04/2025 11:14",
      pdv: "BANCA DO BILLY",
      vencimento: "13/04/2025",
      tipoPagamento: "BOLETO",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029529",
      valor: "4,50",
      status: "Quitado"
    },
    {
      data: "02/04/2025 14:08",
      pdv: "PRAIA E SOL",
      vencimento: "13/04/2025",
      tipoPagamento: "BOLETO",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161036144",
      valor: "87,00",
      status: "Cancelado"
    }
  ]

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

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
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Pagamentos</h1>
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
              <div>
                <Label>Filtrar período por</Label>
                <RadioGroup
                  value={filtroPeriodo}
                  onValueChange={setFiltroPeriodo}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="emissao" id="emissao" />
                    <Label htmlFor="emissao">Data emissão</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vencimento" id="vencimento" />
                    <Label htmlFor="vencimento">Data vencimento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pagamento" id="pagamento" />
                    <Label htmlFor="pagamento">Data pagamento</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Label>Data inicial</Label>
                  <Input
                    type="text"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Data final</Label>
                  <Input
                    type="text"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Lojista</Label>
                  <Select value={lojista} onValueChange={setLojista}>
                    <SelectTrigger>
                      <SelectValue placeholder="TODOS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">TODOS</SelectItem>
                      <SelectItem value="ultrafarma">DROGARIA ULTRAFARMA</SelectItem>
                      <SelectItem value="popular">DROGARIA PRECO POPULAR</SelectItem>
                      <SelectItem value="infoai">INFOAI INFORMATICA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="TODOS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">TODOS</SelectItem>
                      <SelectItem value="aberto">Aberto</SelectItem>
                      <SelectItem value="quitado">Quitado</SelectItem>
                      <SelectItem value="cancelado">Cancelado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Nosso número</Label>
                  <Input
                    type="text"
                    value={nossoNumero}
                    onChange={(e) => setNossoNumero(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Button 
                  onClick={handleBuscar}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </Button>

                {mostrarResultados && (
                  <Button 
                    onClick={handleExportarCSV}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Exportar CSV
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        {mostrarResultados && (
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>PDV</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Tipo Pag.</TableHead>
                    <TableHead>Emitente</TableHead>
                    <TableHead>Nosso número</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pagamentos.map((pagamento, index) => (
                    <TableRow key={index}>
                      <TableCell>{pagamento.data}</TableCell>
                      <TableCell>{pagamento.pdv}</TableCell>
                      <TableCell>{pagamento.vencimento}</TableCell>
                      <TableCell>{pagamento.tipoPagamento}</TableCell>
                      <TableCell>{pagamento.emitente}</TableCell>
                      <TableCell>{pagamento.nossoNumero}</TableCell>
                      <TableCell>{pagamento.valor}</TableCell>
                      <TableCell>{pagamento.status}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

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