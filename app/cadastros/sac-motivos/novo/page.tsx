"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Info, Star, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NovoMotivoPage() {
  const [codigo, setCodigo] = useState("28")
  const [descricao, setDescricao] = useState("")
  const [prioridade, setPrioridade] = useState("NORMAL")
  const [notificar, setNotificar] = useState("SIM")
  const [diasAtendimento, setDiasAtendimento] = useState("")

  const handleSalvar = () => {
    // Implementar lógica de salvamento
    console.log("Salvando motivo...")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Info className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Motivos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6 max-w-3xl">
            {/* Código com botões de navegação */}
            <div className="flex items-center gap-4">
              <div className="w-32">
                <Label>Código</Label>
                <Input
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-1 mt-6">
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Descrição */}
            <div>
              <Label>Descrição</Label>
              <Input
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Prioridade */}
              <div>
                <Label>Prioridade</Label>
                <select
                  value={prioridade}
                  onChange={(e) => setPrioridade(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="NORMAL">NORMAL</option>
                  <option value="ALTA">ALTA</option>
                </select>
              </div>

              {/* Notificar */}
              <div>
                <Label>Notificar</Label>
                <select
                  value={notificar}
                  onChange={(e) => setNotificar(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>

              {/* Dias para atendimento */}
              <div>
                <Label>Dias para atendimento</Label>
                <Input
                  type="number"
                  value={diasAtendimento}
                  onChange={(e) => setDiasAtendimento(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-4 mt-6">
              <Link href="/cadastros/sac-motivos">
                <Button variant="outline" className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                  Cancelar
                </Button>
              </Link>
              <Button onClick={handleSalvar} className="bg-blue-600 hover:bg-blue-700 text-white">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros/sac-motivos">
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