"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Route, Star, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NovaRotaPage() {
  const [codigo, setCodigo] = useState("1")
  const [descricao, setDescricao] = useState("")
  const [operador, setOperador] = useState("")
  const [status, setStatus] = useState("Ativo")
  const [area, setArea] = useState("")
  const [setor, setSetor] = useState("")

  const handlePesquisar = () => {
    // Implementar lógica de pesquisa
    console.log("Pesquisando...")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Route className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Rotas</h1>
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
                <div className="flex gap-1">
                  <Input
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex flex-col gap-1">
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-600">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-gray-600">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
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
                <Label>Operador</Label>
                <Select value={operador} onValueChange={setOperador}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="op1">Operador 1</SelectItem>
                    <SelectItem value="op2">Operador 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Seção de Vagas */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Vagas</h2>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label>Área</Label>
                  <Select value={area} onValueChange={setArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="AEROPORTO" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aeroporto">AEROPORTO</SelectItem>
                      <SelectItem value="centro">CENTRO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label>Setor</Label>
                  <Select value={setor} onValueChange={setSetor}>
                    <SelectTrigger>
                      <SelectValue placeholder="ENTRADA 45 GRAUS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrada45">ENTRADA 45 GRAUS</SelectItem>
                      <SelectItem value="setor2">SETOR 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={handlePesquisar}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Pesquisar
                  </Button>
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-2 mt-6">
              <Link href="/cadastros/rotas">
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
          <Link href="/cadastros/rotas">
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