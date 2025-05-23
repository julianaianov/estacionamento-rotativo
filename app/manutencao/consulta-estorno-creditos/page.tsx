"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, ArrowLeft, X } from "lucide-react"
import Link from "next/link"

type Credit = {
  data: string
  placaCpfCnpj: string
  usuario: string
  tipoPagamento: string
  origem: string
  valor: string
}

export default function ConsultarEstornarCreditosPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [identificadorTipo, setIdentificadorTipo] = useState("placa")
  const [identificador, setIdentificador] = useState("")
  const [usuario, setUsuario] = useState("")
  const [tipoPagamento, setTipoPagamento] = useState("")
  const [origem, setOrigem] = useState("")
  const [tipoCreditoPlaca, setTipoCreditoPlaca] = useState("Placa/CPF")

  const credits: Credit[] = [
    { data: "08/04/2025 00:04", placaCpfCnpj: "104.242.827-12", usuario: "null", tipoPagamento: "PIX", origem: "APP IOS", valor: "R$ 20,00" },
    { data: "08/04/2025 07:15", placaCpfCnpj: "018.598.637-44", usuario: "null", tipoPagamento: "PIX", origem: "APP ANDROID", valor: "R$ 10,00" },
    { data: "08/04/2025 08:15", placaCpfCnpj: "128.291.197-03", usuario: "null", tipoPagamento: "PIX", origem: "APP ANDROID", valor: "R$ 2,50" },
    { data: "08/04/2025 08:25", placaCpfCnpj: "113.782.177-99", usuario: "null", tipoPagamento: "CRED REDE", origem: "APP IOS", valor: "R$ 7,50" },
    { data: "08/04/2025 08:40", placaCpfCnpj: "762.822.367-20", usuario: "null", tipoPagamento: "PIX", origem: "APP ANDROID", valor: "R$ 30,00" },
    { data: "08/04/2025 09:01", placaCpfCnpj: "020.535.087-95", usuario: "null", tipoPagamento: "PIX", origem: "APP ANDROID", valor: "R$ 5,00" }
  ]

  const handleBuscarDados = () => {
    console.log("Buscando créditos com os filtros:", {
      dataInicial,
      dataFinal,
      identificadorTipo,
      identificador,
      usuario,
      tipoPagamento,
      origem
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="px-6 py-4">
        <div className="flex items-center">
          <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Consulta/Estornar Créditos</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Label>Data Inicial:</Label>
                  <Input type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} />
                </div>
                <div>
                  <Label>Data Final:</Label>
                  <Input type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />
                </div>
              </div>

              <div className="space-y-4">
                <RadioGroup
                  value={identificadorTipo}
                  onValueChange={setIdentificadorTipo}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="placa" id="placa" />
                    <Label htmlFor="placa">Placa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cpf" id="cpf" />
                    <Label htmlFor="cpf">CPF</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cnpj" id="cnpj" />
                    <Label htmlFor="cnpj">CNPJ</Label>
                  </div>
                </RadioGroup>

                <Input
                  value={identificador}
                  onChange={(e) => setIdentificador(e.target.value)}
                  placeholder={`Digite o ${identificadorTipo.toUpperCase()}`}
                  className="max-w-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Label>Usuário:</Label>
                  <Select value={usuario} onValueChange={setUsuario}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user1">Usuário 1</SelectItem>
                      <SelectItem value="user2">Usuário 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tipo de pagamento:</Label>
                  <Select value={tipoPagamento} onValueChange={setTipoPagamento}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PIX">PIX</SelectItem>
                      <SelectItem value="CRED_REDE">CRED REDE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Origem:</Label>
                  <Select value={origem} onValueChange={setOrigem}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="APP_IOS">APP IOS</SelectItem>
                      <SelectItem value="APP_ANDROID">APP ANDROID</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tipo de crédito:</Label>
                  <Select value={tipoCreditoPlaca} onValueChange={setTipoCreditoPlaca}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Placa/CPF">Placa/CPF</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Button onClick={handleBuscarDados} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Buscar Dados
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
                  <TableHead>Data</TableHead>
                  <TableHead>Placa/CPF/CNPJ</TableHead>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Tipo Pagamento</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {credits.map((credit, index) => (
                  <TableRow key={index}>
                    <TableCell>{credit.data}</TableCell>
                    <TableCell>{credit.placaCpfCnpj}</TableCell>
                    <TableCell>{credit.usuario}</TableCell>
                    <TableCell>{credit.tipoPagamento}</TableCell>
                    <TableCell>{credit.origem}</TableCell>
                    <TableCell>{credit.valor}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <X className="h-4 w-4" />
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
