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

type Fechamento = {
  fechamento: string
  data: string
  referencia: string
  pdv: string
  emitente: string
  nossoNumero: string
  vencimento: string
  valor: string
  status: string
}

export default function RelatorioFechamentosPage() {
  const [dataInicial, setDataInicial] = useState("01/04/2025")
  const [dataFinal, setDataFinal] = useState("08/04/2025")
  const [lojista, setLojista] = useState("todos")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo para a tabela
  const fechamentos: Fechamento[] = [
    {
      fechamento: "2130",
      data: "02/04/2025 11:11",
      referencia: "01/03/2025-31/03/2025",
      pdv: "DROGARIA ULTRAFARMA",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029304",
      vencimento: "13/04/2025",
      valor: "407,60",
      status: "Aberto"
    },
    {
      fechamento: "2131",
      data: "02/04/2025 11:12",
      referencia: "01/03/2025-31/03/2025",
      pdv: "DROGARIA PRECO POPULAR",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029346",
      vencimento: "13/04/2025",
      valor: "43,25",
      status: "Aberto"
    },
    {
      fechamento: "2132",
      data: "02/04/2025 11:12",
      referencia: "01/03/2025-31/03/2025",
      pdv: "INFOAL INFORMATICA",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029359",
      vencimento: "13/04/2025",
      valor: "112,80",
      status: "Aberto"
    },
    {
      fechamento: "2133",
      data: "02/04/2025 11:13",
      referencia: "01/03/2025-31/03/2025",
      pdv: "NACAO RUBRO NEGRA",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029393",
      vencimento: "13/04/2025",
      valor: "132,50",
      status: "Aberto"
    },
    {
      fechamento: "2134",
      data: "02/04/2025 11:14",
      referencia: "01/04/2025-02/04/2025",
      pdv: "Bazar Teixeira",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029478",
      vencimento: "13/04/2025",
      valor: "4,25",
      status: "Aberto"
    },
    {
      fechamento: "2135",
      data: "02/04/2025 11:14",
      referencia: "01/04/2025-02/04/2025",
      pdv: "ELECTRIMAR",
      emitente: "M51 - WESLLEY",
      nossoNumero: "14000000161029507",
      vencimento: "13/04/2025",
      valor: "47,25",
      status: "Aberto"
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
            <h1 className="text-2xl font-bold text-gray-900">Relatório de Fechamentos</h1>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
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
              </div>

              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <Button 
                    onClick={handleBuscar}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Buscar
                  </Button>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Detalhado
                  </Button>
                </div>

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
                    <TableHead>Fechamento</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Referência</TableHead>
                    <TableHead>PDV</TableHead>
                    <TableHead>Emitente</TableHead>
                    <TableHead>Nosso número</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fechamentos.map((fechamento, index) => (
                    <TableRow key={index}>
                      <TableCell>{fechamento.fechamento}</TableCell>
                      <TableCell>{fechamento.data}</TableCell>
                      <TableCell>{fechamento.referencia}</TableCell>
                      <TableCell>{fechamento.pdv}</TableCell>
                      <TableCell>{fechamento.emitente}</TableCell>
                      <TableCell>{fechamento.nossoNumero}</TableCell>
                      <TableCell>{fechamento.vencimento}</TableCell>
                      <TableCell>{fechamento.valor}</TableCell>
                      <TableCell>{fechamento.status}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
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