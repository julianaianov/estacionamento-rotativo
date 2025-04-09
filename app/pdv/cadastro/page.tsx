"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ShoppingCart, ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"

type PDV = {
  id: string
  razao: string
  fantasia: string
  cnpj: string
  endereco: string
}

export default function CadastroPDVPage() {
  const [status, setStatus] = useState("TODOS")
  const [pdvs, setPdvs] = useState<PDV[]>([
    {
      id: "87",
      razao: "49.606.060/0001-41 Leonardo Vasconcelos Coimbra",
      fantasia: "Vasconcelos LTDA (BANCA 2 IRMAOS)",
      cnpj: "49.606.060/0001-41",
      endereco: "Rua Domécio da Gama, 709"
    },
    {
      id: "86",
      razao: "50788467 DIEGO CHAVES MOREIRA",
      fantasia: "BANCA DO TREM TABACARIA",
      cnpj: "50.788.467/0001-16",
      endereco: "RUA RIBEIRO DE ALMEIDA, S/N"
    },
    {
      id: "85",
      razao: "MONICA MOREIRA CONFEITARIA E CAFE LTDA",
      fantasia: "MONICA MOREIRA CAKE DESIGN",
      cnpj: "34.965.842/0001-08",
      endereco: "Rua Barao de Inoa, 36"
    },
    {
      id: "84",
      razao: "CODEMAR BARRA DE MARICA",
      fantasia: "CODEMAR BARRA DE MARICA",
      cnpj: "02.992.465/0001-00",
      endereco: "AV. LITORANEA, S/N"
    },
    {
      id: "83",
      razao: "CODEMAR ITAIPUACU",
      fantasia: "CODEMAR ITAIPUACU",
      cnpj: "20.009.382/0001-21",
      endereco: "AV. BEMVINDO TAQUES HORTA JR., S/N"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="space-y-8">
        {/* Filters Card */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="w-48">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="TODOS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">TODOS</SelectItem>
                    <SelectItem value="ATIVO">ATIVO</SelectItem>
                    <SelectItem value="INATIVO">INATIVO</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Adicionar novo Lojista
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">ID</TableHead>
                  <TableHead>Razão</TableHead>
                  <TableHead>Fantasia</TableHead>
                  <TableHead>CNPJ</TableHead>
                  <TableHead>Endereço</TableHead>
                  <TableHead className="w-20"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pdvs.map((pdv) => (
                  <TableRow key={pdv.id}>
                    <TableCell>{pdv.id}</TableCell>
                    <TableCell>{pdv.razao}</TableCell>
                    <TableCell>{pdv.fantasia}</TableCell>
                    <TableCell>{pdv.cnpj}</TableCell>
                    <TableCell>{pdv.endereco}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        <Pencil className="h-4 w-4" />
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