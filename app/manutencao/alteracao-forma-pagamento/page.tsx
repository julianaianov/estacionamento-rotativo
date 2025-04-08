"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AlterarFormaPagamentoPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [placa, setPlaca] = useState("")
  const [documento, setDocumento] = useState("")
  const [tipoDocumento, setTipoDocumento] = useState("CPF")
  const [resultados, setResultados] = useState<any[]>([])

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de busca
    console.log("Buscando com filtros:", {
      dataInicial,
      dataFinal,
      placa,
      documento,
      tipoDocumento
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Alteração forma de pagamento (Ticket e Recarga)</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBuscar} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dataInicial">Data Inicial:</Label>
                  <Input
                    id="dataInicial"
                    type="date"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dataFinal">Data Final:</Label>
                  <Input
                    id="dataFinal"
                    type="date"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="placa">Placa:</Label>
                <Input
                  id="placa"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  className="max-w-md"
                />
              </div>

              <div className="space-y-4">
                <Label>CPF/CNPJ:</Label>
                <RadioGroup
                  value={tipoDocumento}
                  onValueChange={setTipoDocumento}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="CPF" id="cpf" />
                    <Label htmlFor="cpf">CPF</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="CNPJ" id="cnpj" />
                    <Label htmlFor="cnpj">CNPJ</Label>
                  </div>
                </RadioGroup>

                <Input
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  placeholder={`Digite o ${tipoDocumento}`}
                  className="max-w-md"
                />
              </div>

              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Buscar
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results Card */}
        <Card>
          <CardContent className="pt-6">
            {resultados.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                Nenhuma informação localizada.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Placa</TableHead>
                    <TableHead>CPF/CNPJ</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resultados.map((resultado, index) => (
                    <TableRow key={index}>
                      <TableCell>{resultado.data}</TableCell>
                      <TableCell>{resultado.placa}</TableCell>
                      <TableCell>{resultado.documento}</TableCell>
                      <TableCell>{resultado.valor}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          Alterar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
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

        {/* Gradient line */}
        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 