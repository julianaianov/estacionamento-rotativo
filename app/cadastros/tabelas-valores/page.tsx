"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calculator, Star, ArrowLeft, Pencil, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface TabelaValor {
  id: number
  descricao: string
  valor: number
  status: string
}

export default function TabelasValoresPage() {
  const [tabelas] = useState<TabelaValor[]>([
    {
      id: 1,
      descricao: "Tarifa Regular - 1 hora",
      valor: 2.50,
      status: "Ativo"
    },
    {
      id: 2,
      descricao: "Tarifa Regular - 2 horas",
      valor: 5.00,
      status: "Ativo"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 rounded shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Tabelas e Valores</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <Link href="/cadastros/tabelas-valores/novo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar novo
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tabelas.map((tabela) => (
                  <TableRow key={tabela.id} className="hover:bg-gray-300">
                    <TableCell>{tabela.id}</TableCell>
                    <TableCell>{tabela.descricao}</TableCell>
                    <TableCell>R$ {tabela.valor.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        tabela.status === "Ativo"
                          ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white"
                          : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-white"
                      }`}>
                        {tabela.status}
                      </span>

                    </TableCell>
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