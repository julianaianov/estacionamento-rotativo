"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoTabelaValorPage() {
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [status, setStatus] = useState("Ativo")

  const handleSalvar = () => {
    // Implementar lógica de salvamento
    console.log("Salvando tabela de valor...")
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Tabelas e Valores</h1>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Input 
                id="descricao" 
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a descrição"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="valor">Valor</Label>
              <Input 
                id="valor"
                type="number"
                step="0.01"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="0,00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ativo">Ativo</SelectItem>
                  <SelectItem value="Inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link href="/cadastros/tabelas-valores">
              <Button type="button" className="bg-orange-500 hover:bg-orange-600 text-white">
                Cancelar
              </Button>
            </Link>
            <Button 
              type="button"
              onClick={handleSalvar}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Salvar
            </Button>
          </div>
        </form>
      </Card>

      <div className="mt-6 flex justify-center">
        <Link href="/cadastros/tabelas-valores">
          <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <div className="h-1 mt-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
    </div>
  )
} 