"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Flag, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoIsentoVagaSetorPage() {
  const [cpf, setCpf] = useState("")
  const [placa, setPlaca] = useState("")
  const [vaga, setVaga] = useState("")
  const [area, setArea] = useState("")
  const [setor, setSetor] = useState("")

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Flag className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Isento por Vaga/Setor</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4 max-w-3xl">
            {/* Primeira linha */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label>CPF</Label>
                <Input
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="w-full"
                  placeholder="Digite o CPF"
                />
              </div>
              <div className="w-48">
                <Label>Placa</Label>
                <Input
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  className="w-full"
                  placeholder="Digite a placa"
                />
              </div>
              <div className="w-48">
                <Label>Vaga</Label>
                <Input
                  value={vaga}
                  onChange={(e) => setVaga(e.target.value)}
                  className="w-full"
                  placeholder="Digite a vaga"
                />
              </div>
            </div>

            {/* Segunda linha */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label>Área</Label>
                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="area1">Área 1</SelectItem>
                    <SelectItem value="area2">Área 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label>Setor</Label>
                <Select value={setor} onValueChange={setSetor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="setor1">Setor 1</SelectItem>
                    <SelectItem value="setor2">Setor 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-2 mt-6">
              <Link href="/cadastros/isentos-vaga-setor">
                <Button variant="outline" className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                  Cancelar
                </Button>
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros/isentos-vaga-setor">
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