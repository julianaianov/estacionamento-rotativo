"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NovoFeriadoPage() {
  const [codigo, setCodigo] = useState("179")
  const [descricao, setDescricao] = useState("")
  const [data, setData] = useState("")
  const [ano, setAno] = useState("")
  const [feriadoFixo, setFeriadoFixo] = useState(false)

  const handleSalvar = () => {
    // Implementar lógica de salvamento
    console.log("Salvando feriado...")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex items-center">
          <Calendar className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Cadastro de Feriados</h1>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Novo Feriado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-32">
                <Label htmlFor="codigo">Código</Label>
                <Input
                  id="codigo"
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

            <div>
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="data">Data</Label>
                <Input
                  id="data"
                  type="text"
                  placeholder="DD/MM"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="ano">Ano(Opcional)</Label>
                <Input
                  id="ano"
                  type="text"
                  placeholder="AAAA"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="feriadoFixo"
                checked={feriadoFixo}
                onCheckedChange={(checked: boolean) => setFeriadoFixo(checked)}
              />
              <label
                htmlFor="feriadoFixo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Feriado fixo
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300">
                Novo
              </Button>
              <Button variant="secondary" className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                Cancelar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSalvar}>
                Salvar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Back button */}
      <div className="flex justify-center mt-8">
        <Link href="/cadastros/feriados">
          <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
} 