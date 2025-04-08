"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Printer, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

type PrintLayout = {
  id: string
  tipo: string
  impressora: string
  area: string
  status: "Ativo" | "Inativo"
}

export default function LayoutImpressoesPage() {
  const [codigo, setCodigo] = useState("")
  const [tipoTicket, setTipoTicket] = useState("")
  const [area, setArea] = useState("")
  const [modelo, setModelo] = useState("")
  const [tipoCodBarras, setTipoCodBarras] = useState("")
  const [status, setStatus] = useState("")
  const [conteudo, setConteudo] = useState(
    "MARICA ROTATIVO\nCODEMAR-SA.COM.BR\nCNPJ: 20.009.382/0001-21\nRUA JOVINO D. OLIVEIRA, 481\nMARICA/RJ\n(21)97060-0642"
  )

  // Mock data for the table
  const layouts: PrintLayout[] = [
    { id: "3", tipo: "TPU", impressora: "DPP 250", area: "-", status: "Inativo" },
    { id: "4", tipo: "TPU", impressora: "DPP 250", area: "-", status: "Inativo" },
    { id: "5", tipo: "TPU", impressora: "DPP 250", area: "-", status: "Ativo" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Printer className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Layout de impressões</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Input
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  placeholder="Digite o código"
                  className="w-24"
                />
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <Label>Tipo de Ticket*</Label>
                <Select value={tipoTicket} onValueChange={setTipoTicket}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tpu">TPU</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Área</Label>
                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="centro">Centro</SelectItem>
                    <SelectItem value="bairro">Bairro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Modelo</Label>
                <Select value={modelo} onValueChange={setModelo}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modelo1">Modelo 1</SelectItem>
                    <SelectItem value="modelo2">Modelo 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tipo cód. barras</Label>
                <Select value={tipoCodBarras} onValueChange={setTipoCodBarras}>
                  <SelectTrigger>
                    <SelectValue placeholder="NENHUM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nenhum">NENHUM</SelectItem>
                    <SelectItem value="code128">CODE 128</SelectItem>
                    <SelectItem value="qrcode">QR Code</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ativo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Print Preview */}
            <div className="mt-6">
              <Label>Conteúdo 1*</Label>
              <div className="mt-2 p-4 bg-[#FFFCD6] border border-gray-200 rounded-lg min-h-[200px] font-mono text-center">
                {conteudo.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
              <Textarea
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
                className="mt-4"
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card>
          <CardHeader>
            <CardTitle>Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Impressora</TableHead>
                  <TableHead>Área</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {layouts.map((layout) => (
                  <TableRow key={layout.id}>
                    <TableCell>{layout.id}</TableCell>
                    <TableCell>{layout.tipo}</TableCell>
                    <TableCell>{layout.impressora}</TableCell>
                    <TableCell>{layout.area}</TableCell>
                    <TableCell>{layout.status}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                1 - 3 / 3 (3)
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Próximo
                </Button>
              </div>
            </div>
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