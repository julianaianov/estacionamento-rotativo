"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smartphone, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function UsoAppPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo
  const usuarios = [
    {
      nome: "Geison Passos",
      cpfPlaca: "106.371.667-52",
      email: "geisonpassos.adv@gmail.com",
      fone: "(21) 3731-3576",
      saldo: "25,00",
      ticketsAtivados: "8"
    },
    {
      nome: "João Felipe Fogageiro Olival",
      cpfPlaca: "108.737.397-28",
      email: "joaofelipeolival@gmail.com",
      fone: "21-98815-8947 / 21-98815-8947",
      saldo: "14,18",
      ticketsAtivados: "8"
    },
    {
      nome: "celso cabral nunes",
      cpfPlaca: "516.935.007-44",
      email: "cabral@cabralarquitetura.com.br",
      fone: "",
      saldo: "389,00",
      ticketsAtivados: "6"
    },
    {
      nome: "ana paula de campos",
      cpfPlaca: "054.095.837-95",
      email: "aninha0506@yahoo.com.br",
      fone: "",
      saldo: "18,00",
      ticketsAtivados: "5"
    },
    {
      nome: "Daniel de Oliveira Almeida",
      cpfPlaca: "088.498.667-55",
      email: "oa.daniel@gmail.com",
      fone: "(21) 9761-0780",
      saldo: "27,54",
      ticketsAtivados: "5"
    }
  ]

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Smartphone className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Relatório de uso do APP</h1>
          </div>
          <div className="flex gap-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Exportar CSV
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Data inicial:</Label>
              <Input
                type="date"
                value={dataInicial}
                onChange={(e) => setDataInicial(e.target.value)}
              />
            </div>
            <div>
              <Label>Data final:</Label>
              <Input
                type="date"
                value={dataFinal}
                onChange={(e) => setDataFinal(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <Button 
              onClick={handleBuscar}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Buscar Dados
            </Button>
          </div>
        </CardContent>
      </Card>

      {mostrarResultados && (
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Nome</th>
                    <th className="px-4 py-2 text-left">CPF/Placa</th>
                    <th className="px-4 py-2 text-left">E-mail</th>
                    <th className="px-4 py-2 text-left">Fone</th>
                    <th className="px-4 py-2 text-right">Saldo</th>
                    <th className="px-4 py-2 text-center">Tickets Ativados</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2">{usuario.nome}</td>
                      <td className="px-4 py-2">{usuario.cpfPlaca}</td>
                      <td className="px-4 py-2">{usuario.email}</td>
                      <td className="px-4 py-2">{usuario.fone}</td>
                      <td className="px-4 py-2 text-right">{usuario.saldo}</td>
                      <td className="px-4 py-2 text-center">{usuario.ticketsAtivados}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Back button */}
      <div className="flex justify-center mt-8">
        <Link href="/relatorios">
          <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>
    </div>
  )
} 