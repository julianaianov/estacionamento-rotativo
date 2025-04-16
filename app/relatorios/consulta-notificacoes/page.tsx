"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertOctagon, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ConsultaNotificacoesPage() {
  const [area, setArea] = useState("TODAS")
  const [setor, setSetor] = useState("TODOS")
  const [rua, setRua] = useState("TODOS")
  const [dataInicio, setDataInicio] = useState("")
  const [horaInicio, setHoraInicio] = useState("00:00")
  const [dataTermino, setDataTermino] = useState("")
  const [horaTermino, setHoraTermino] = useState("23:59")
  const [ticket, setTicket] = useState("")
  const [placa, setPlaca] = useState("")
  const [addMascaraPlaca, setAddMascaraPlaca] = useState(true)
  const [denunciado, setDenunciado] = useState(false)
  const [usuarioEmitente, setUsuarioEmitente] = useState("TODOS")
  const [tipoAdvertencia, setTipoAdvertencia] = useState("TODOS")
  const [filtro, setFiltro] = useState("TODAS")
  const [tipoVeiculo, setTipoVeiculo] = useState("TODOS")
  const [modeloMarca, setModeloMarca] = useState("TODOS")
  const [tipoVisualizacao, setTipoVisualizacao] = useState("resumido")
  const [buscarPorQuitacao, setBuscarPorQuitacao] = useState(false)
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <AlertOctagon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Consulta Notificações/AI</h1>
          </div>
          <div className="flex gap-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Exportar CSV
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Exportar PDF
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Label>Área</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODAS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODAS">:: TODAS ::</SelectItem>
                  <SelectItem value="CENTRO">CENTRO</SelectItem>
                  <SelectItem value="ORLA">ORLA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Setor</Label>
              <Select value={setor} onValueChange={setSetor}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="SETOR_1">SETOR 1</SelectItem>
                  <SelectItem value="SETOR_2">SETOR 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Rua</Label>
              <Select value={rua} onValueChange={setRua}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Data Início</Label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
            </div>

            <div>
              <Label>Hora Início</Label>
              <Input
                type="time"
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
              />
            </div>

            <div>
              <Label>Data Término</Label>
              <Input
                type="date"
                value={dataTermino}
                onChange={(e) => setDataTermino(e.target.value)}
              />
            </div>

            <div>
              <Label>Hora Término</Label>
              <Input
                type="time"
                value={horaTermino}
                onChange={(e) => setHoraTermino(e.target.value)}
              />
            </div>

            <div>
              <Label>Ticket</Label>
              <Input
                type="text"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
              />
            </div>

            <div>
              <Label>Placa</Label>
              <Input
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
              />
              <div className="flex items-center mt-2">
                <Checkbox
                  id="mascaraPlaca"
                  checked={addMascaraPlaca}
                  onCheckedChange={(checked: boolean) => setAddMascaraPlaca(checked)}
                />
                <label htmlFor="mascaraPlaca" className="ml-2 text-sm">
                  Add máscara placa
                </label>
              </div>
            </div>

            <div>
              <Label>Usuário Emitente</Label>
              <Select value={usuarioEmitente} onValueChange={setUsuarioEmitente}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tipo advertência</Label>
              <Select value={tipoAdvertencia} onValueChange={setTipoAdvertencia}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Filtro</Label>
              <Select value={filtro} onValueChange={setFiltro}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODAS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODAS">:: TODAS ::</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tipo Veículo</Label>
              <Select value={tipoVeiculo} onValueChange={setTipoVeiculo}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Modelo/Marca Veículo</Label>
              <Select value={modeloMarca} onValueChange={setModeloMarca}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="detalhado"
                  value="detalhado"
                  checked={tipoVisualizacao === "detalhado"}
                  onChange={(e) => setTipoVisualizacao(e.target.value)}
                  className="form-radio"
                />
                <label htmlFor="detalhado">Detalhado</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="resumido"
                  value="resumido"
                  checked={tipoVisualizacao === "resumido"}
                  onChange={(e) => setTipoVisualizacao(e.target.value)}
                  className="form-radio"
                />
                <label htmlFor="resumido">Resumido</label>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="buscarQuitacao"
                checked={buscarPorQuitacao}
                onCheckedChange={(checked: boolean) => setBuscarPorQuitacao(checked)}
              />
              <label htmlFor="buscarQuitacao" className="ml-2">
                Buscar pela data de quitação
              </label>
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
                    <th className="px-4 py-2">Placa</th>
                    <th className="px-4 py-2">Veículo</th>
                    <th className="px-4 py-2">Ticket</th>
                    <th className="px-4 py-2">Vaga</th>
                    <th className="px-4 py-2">Hora Emissão</th>
                    <th className="px-4 py-2">Hora Chegada</th>
                    <th className="px-4 py-2">Hora Saída</th>
                    <th className="px-4 py-2">Hora Reg.</th>
                    <th className="px-4 py-2">Valor</th>
                    <th className="px-4 py-2">Motivo</th>
                    <th className="px-4 py-2">Rua</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Tipo Veic.</th>
                    <th className="px-4 py-2">Quant. AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={14} className="px-4 py-4 text-center text-gray-500">
                      Total Registros: 0<br />
                      Valor: R$ 0,00
                    </td>
                  </tr>
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