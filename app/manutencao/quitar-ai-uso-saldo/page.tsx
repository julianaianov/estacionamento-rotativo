"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Car, ArrowLeft, Printer } from "lucide-react"
import Link from "next/link"

type Notification = {
  emissao: string
  valor: string
  ticket: string
  motivo: string
  box: string
  local: string
  veiculo: string
  bonus: string
}

export default function QuitarAIPage() {
  const [placa, setPlaca] = useState("")
  const [veiculoInfo, setVeiculoInfo] = useState({
    placa: "ABC1234",
    veiculo: "VW/SANTANA CG",
    cor: "VERMELHA"
  })
  const [notificacoes, setNotificacoes] = useState<Notification[]>([
    {
      emissao: "09/09/22 07:33 - 09:33",
      valor: "R$ 5,00",
      ticket: "MAR01190934",
      motivo: "VEICULO SE",
      box: "15/43",
      local: "AV BEIRA MAR, SN",
      veiculo: "VW/SANTANA",
      bonus: "- - -"
    },
    {
      emissao: "12/09/22 07:20 - 09:20",
      valor: "R$ 2,50",
      ticket: "MAR01192920",
      motivo: "VEICULO SE",
      box: "541",
      local: "Rua Maria Cordeiro Cardoso, SN",
      veiculo: "VW/SANTANA",
      bonus: "- - -"
    },
    {
      emissao: "13/09/22 09:37 - 11:37",
      valor: "R$ 2,50",
      ticket: "MAR01194232",
      motivo: "VEICULO SE",
      box: "2",
      local: "RUA VEREADOR FRANCISCO SABINO DA COSTA, SN",
      veiculo: "SANTANA(VO",
      bonus: "- - -"
    },
    {
      emissao: "14/09/22 09:24 - 11:24",
      valor: "R$ 2,50",
      ticket: "MAR01195321",
      motivo: "VEICULO SE",
      box: "555",
      local: "AV NOSSA SENHORA DO AMPARO, SN",
      veiculo: "VW/SANTANA",
      bonus: "- - -"
    },
    {
      emissao: "18/09/22 07:45 - 09:45",
      valor: "R$ 5,00",
      ticket: "MAR01197551",
      motivo: "VEICULO SE",
      box: "1259",
      local: "BOLSAO ORLA 1, SN",
      veiculo: "VW/SANTANA",
      bonus: "- - -"
    },
    {
      emissao: "19/09/22 08:37 - 10:37",
      valor: "R$ 2,50",
      ticket: "MAR01197762",
      motivo: "VEICULO SE",
      box: "541",
      local: "Rua Maria Cordeiro Cardoso, SN",
      veiculo: "VW/SANTANA",
      bonus: "- - -"
    }
  ])

  const handleBuscarDados = () => {
    // Aqui você implementaria a lógica real de busca
    console.log("Buscando dados para a placa:", placa)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="bg-white shadow dark:bg-gray-900">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Quitação AI/Notificação</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Search Card */}
        <Card>
          <CardHeader>
            <CardTitle>Buscar Veículo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-4">
                <div>
                  <Label>Placa:</Label>
                  <Input
                    value={placa}
                    onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                    placeholder="ABC1234"
                    className="w-32 uppercase"
                  />
                </div>
                <Button 
                  onClick={handleBuscarDados}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Buscar Dados
                </Button>
              </div>

              {veiculoInfo && (
                <div className="mt-4 space-y-2 text-sm">
                  <p><strong>PLACA:</strong> {veiculoInfo.placa}</p>
                  <p><strong>VEÍCULO:</strong> {veiculoInfo.veiculo}</p>
                  <p><strong>COR:</strong> {veiculoInfo.cor}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Emis/Saída</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Motivo</TableHead>
                  <TableHead>Box/Vaga</TableHead>
                  <TableHead>Local</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Bonus</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notificacoes.map((notificacao, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{notificacao.emissao}</TableCell>
                    <TableCell>{notificacao.valor}</TableCell>
                    <TableCell>{notificacao.ticket}</TableCell>
                    <TableCell>{notificacao.motivo}</TableCell>
                    <TableCell>{notificacao.box}</TableCell>
                    <TableCell>{notificacao.local}</TableCell>
                    <TableCell>{notificacao.veiculo}</TableCell>
                    <TableCell>{notificacao.bonus}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        <Printer className="h-4 w-4" />
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