"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, ArrowLeft, Car } from "lucide-react"
import Link from "next/link"

export default function ConsultaTicketsPage() {
  const [showResults, setShowResults] = useState(false)
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [placa, setPlaca] = useState("")
  const [ticket, setTicket] = useState("")
  const [boxVaga, setBoxVaga] = useState("")
  const [area, setArea] = useState("todas")
  const [setor, setSetor] = useState("todos")
  const [usuario, setUsuario] = useState("todos")
  const [tipo, setTipo] = useState("todos")
  const [origem, setOrigem] = useState("todas")
  const [tipoPagamento, setTipoPagamento] = useState("todos")
  const [tipoVeiculo, setTipoVeiculo] = useState("CARRO")

  const handleBuscarDados = () => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Consulta Tickets</h1>
            </div>
            <Link href="/relatorios">
              <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Início
              </label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Fim
              </label>
              <Input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Placa (opcional)
              </label>
              <Input
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
                className="w-full"
                placeholder="Digite a placa"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ticket (opcional)
              </label>
              <Input
                type="text"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                className="w-full"
                placeholder="Digite o número do ticket"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Box/Vaga (opcional)
              </label>
              <Input
                type="text"
                value={boxVaga}
                onChange={(e) => setBoxVaga(e.target.value)}
                className="w-full"
                placeholder="Digite o box/vaga"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Área
              </label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODAS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">:: TODAS ::</SelectItem>
                  <SelectItem value="area1">Área 1</SelectItem>
                  <SelectItem value="area2">Área 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Setor
              </label>
              <Select value={setor} onValueChange={setSetor}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">:: TODOS ::</SelectItem>
                  <SelectItem value="setor1">Setor 1</SelectItem>
                  <SelectItem value="setor2">Setor 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Usuário
              </label>
              <Select value={usuario} onValueChange={setUsuario}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">:: TODOS ::</SelectItem>
                  <SelectItem value="user1">Usuário 1</SelectItem>
                  <SelectItem value="user2">Usuário 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo
              </label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">:: TODOS ::</SelectItem>
                  <SelectItem value="tipo1">Tipo 1</SelectItem>
                  <SelectItem value="tipo2">Tipo 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Origem
              </label>
              <Select value={origem} onValueChange={setOrigem}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODAS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">:: TODAS ::</SelectItem>
                  <SelectItem value="origem1">Origem 1</SelectItem>
                  <SelectItem value="origem2">Origem 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo pagamento
              </label>
              <Select value={tipoPagamento} onValueChange={setTipoPagamento}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">:: TODOS ::</SelectItem>
                  <SelectItem value="dinheiro">Dinheiro</SelectItem>
                  <SelectItem value="cartao">Cartão</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de veículo
              </label>
              <Select value={tipoVeiculo} onValueChange={setTipoVeiculo}>
                <SelectTrigger>
                  <SelectValue placeholder="CARRO" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CARRO">CARRO</SelectItem>
                  <SelectItem value="MOTO">MOTO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleBuscarDados}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar Dados
            </Button>
          </div>

          {showResults && (
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data/Hora
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Placa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Box/Vaga
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Add table rows here */}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
} 