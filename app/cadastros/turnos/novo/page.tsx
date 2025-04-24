"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoTurnoPage() {
  const [codigo, setCodigo] = useState("18")
  const [descricao, setDescricao] = useState("")
  const [local, setLocal] = useState("")
  const [horaInicio, setHoraInicio] = useState("")
  const [horaFim, setHoraFim] = useState("")
  const [inicioCob, setInicioCob] = useState("")
  const [fimCob, setFimCob] = useState("")
  const [diaSemana, setDiaSemana] = useState("")
  const [status, setStatus] = useState("Ativo")

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Turnos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4 max-w-3xl">
            {/* Primeira linha */}
            <div className="flex gap-4 items-start">
              <div className="w-32">
                <Label>Código</Label>
                <Input
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <Label>Descrição</Label>
                <Input
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-48">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Segunda linha */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label>Local</Label>
                <Select value={local} onValueChange={setLocal}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local1">Local 1</SelectItem>
                    <SelectItem value="local2">Local 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-48">
                <Label>Hora Inicial</Label>
                <Input
                  type="time"
                  value={horaInicio}
                  onChange={(e) => setHoraInicio(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-48">
                <Label>Hora Final</Label>
                <Input
                  type="time"
                  value={horaFim}
                  onChange={(e) => setHoraFim(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Terceira linha */}
            <div className="flex gap-4">
              <div className="w-48">
                <Label>Inicio Cob.</Label>
                <Input
                  type="time"
                  value={inicioCob}
                  onChange={(e) => setInicioCob(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-48">
                <Label>Fim Cob.</Label>
                <Input
                  type="time"
                  value={fimCob}
                  onChange={(e) => setFimCob(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <Label>Dia Semana</Label>
                <Select value={diaSemana} onValueChange={setDiaSemana}>
                  <SelectTrigger>
                    <SelectValue placeholder="D.Útil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="util">D.Útil</SelectItem>
                    <SelectItem value="sabado">Sábado</SelectItem>
                    <SelectItem value="domingo">Domingo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-2 mt-6">
              <Link href="/cadastros/turnos">
                <Button variant="outline" className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                  Cancelar
                </Button>
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Salvar
              </Button>
              <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                Novo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros/turnos">
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