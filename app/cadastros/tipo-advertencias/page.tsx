"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, Star, ArrowLeft, Pencil, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface TipoAdvertencia {
  id: number
  descricao: string
  tipo: string
  status: string
  valor: string
  diasPPagto: number
  vBonus: string
}

export default function TipoAdvertenciasPage() {
  const [advertencias] = useState<TipoAdvertencia[]>([
    {
      id: 5,
      descricao: "PLACA ISENTA - OCUPACAO DE VAGA ALEM DO PERMITIDO",
      tipo: "AI",
      status: "a",
      valor: "CARRO - BANCARIO/COML: R$ 0,00\nCARRO - BANCARIO/COML: R$ 0,00\nCARRO - ORLA BARRA M: R$ 0,00\nCARRO - BARROCO/COML: R$ 0,00\nCARRO - ORLA ITAIPUACU: R$ 0,00\nCARRO - RESIDENCIAL : R$ 0,00\nCARRO - AEROPORTO: R$ 0,00",
      diasPPagto: 0,
      vBonus: "R$ 0,00"
    },
    {
      id: 2,
      descricao: "TEMPO DE ESTACIONAMENTO VENCIDO",
      tipo: "AI",
      status: "a",
      valor: "CARRO - BANCARIO/COML: R$ 2,50\nCARRO - RESIDENCIAL : R$ 2,50\nCARRO - ORLA BARRA M: R$ 5,00\nCARRO - BARROCO/COML: R$ 2,50\nCARRO - ORLA ITAIPUACU: R$ 5,00\nCARRO - AEROPORTO: R$ 2,50",
      diasPPagto: 1,
      vBonus: "R$ 0,00"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 rounded shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Tipo de Advertências</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <Link href="/cadastros/tipo-advertencias/novo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Adicionar
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Dias P/Pagto</TableHead>
                  <TableHead>V.Bonus</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {advertencias.map((advertencia) => (
                  <TableRow key={advertencia.id} className="hover:bg-gray-400">
                    <TableCell>{advertencia.id}</TableCell>
                    <TableCell>{advertencia.descricao}</TableCell>
                    <TableCell>{advertencia.tipo}</TableCell>
                    <TableCell>{advertencia.status}</TableCell>
                    <TableCell className="whitespace-pre-line">{advertencia.valor}</TableCell>
                    <TableCell>{advertencia.diasPPagto}</TableCell>
                    <TableCell>{advertencia.vBonus}</TableCell>
                    <TableCell>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Pencil className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
        <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 