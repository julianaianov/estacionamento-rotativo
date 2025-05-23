"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

const MARCAS = [
  "ACURA", "AGRALE", "ALFA ROMEO", "AMERICAR", "ASIA MOTORS", "ASTON MARTIN",
  "AUDI", "AUSTIN", "BAJA", "BEACH", "BENTLEY", "BGR 5", "BMW", "BUGWAY",
  "BUICK", "BYD", "CADILLAC", "CBT", "CHAMONIX"
]

const CORES = [
  "AMARELA", "AZUL", "BEGE", "BRANCA", "CINZA", "DOURADA", "GRENA", "LARANJA",
  "MARROM", "PRATA", "PRETA", "ROSA", "ROXA", "VERDE", "VERMELHA", "FANTASIA"
]

const ESPECIES = [
  "PASSAGEIRO", "CARGA", "MISTO", "CORRIDA", "TRACAO", "ESPECIAL", "COLECAO"
]

const ALERTAS = [
  "0 - NENHUM", "1 - ROUBO", "2 - ISENTO", "3 - RESTRICAO DOCUMENTO"
]

export default function ManutencaoVeiculosPage() {
  const [placa, setPlaca] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    cor: "",
    especie: "PASSAGEIRO",
    estado: "RIODE JANEIRO",
    cidade: "MARICA",
    alerta: "0 - NENHUM"
  })

  const handleBuscarDados = () => {
    if (placa.trim()) {
      setShowForm(true)
      // Aqui você adicionaria a lógica para buscar os dados do veículo
    }
  }

  const handleSalvar = () => {
    // Implementar lógica de salvamento
    console.log("Salvando dados do veículo:", { placa, ...formData })
  }

  const handleCancelar = () => {
    setShowForm(false)
    setPlaca("")
    setFormData({
      marca: "",
      modelo: "",
      cor: "",
      especie: "PASSAGEIRO",
      estado: "RIODE JANEIRO",
      cidade: "MARICA",
      alerta: "0 - NENHUM"
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 rounded shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Dados do Veículo</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="max-w-md space-y-4">
            <div>
              <Label>Placa:</Label>
              <Input
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                className="w-full"
                maxLength={7}
              />
            </div>
            <Button
              onClick={handleBuscarDados}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white"
            >
              Buscar Dados
            </Button>
          </div>

          {showForm && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>MARCA:</Label>
                <Select
                  value={formData.marca}
                  onValueChange={(value) => setFormData({ ...formData, marca: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    {MARCAS.map((marca) => (
                      <SelectItem key={marca} value={marca}>
                        {marca}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>MODELO:</Label>
                <Select
                  value={formData.modelo}
                  onValueChange={(value) => setFormData({ ...formData, modelo: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE A MARCA ::" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Modelo options will be populated based on selected marca */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>COR:</Label>
                <Select
                  value={formData.cor}
                  onValueChange={(value) => setFormData({ ...formData, cor: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder=":: SELECIONE ::" />
                  </SelectTrigger>
                  <SelectContent>
                    {CORES.map((cor) => (
                      <SelectItem key={cor} value={cor}>
                        {cor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>ESPECIE:</Label>
                <Select
                  value={formData.especie}
                  onValueChange={(value) => setFormData({ ...formData, especie: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="PASSAGEIRO" />
                  </SelectTrigger>
                  <SelectContent>
                    {ESPECIES.map((especie) => (
                      <SelectItem key={especie} value={especie}>
                        {especie}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>ESTADO:</Label>
                <Select
                  value={formData.estado}
                  onValueChange={(value) => setFormData({ ...formData, estado: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="RIO DE JANEIRO" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RIODE JANEIRO">RIO DE JANEIRO</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>CIDADE:</Label>
                <Select
                  value={formData.cidade}
                  onValueChange={(value) => setFormData({ ...formData, cidade: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="MARICA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MARICA">MARICA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>ALERTA:</Label>
                <Select
                  value={formData.alerta}
                  onValueChange={(value) => setFormData({ ...formData, alerta: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="0 - NENHUM" />
                  </SelectTrigger>
                  <SelectContent>
                    {ALERTAS.map((alerta) => (
                      <SelectItem key={alerta} value={alerta}>
                        {alerta}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 flex gap-4">
                <Button
                  onClick={handleSalvar}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Salvar
                </Button>
                <Button
                  onClick={handleCancelar}
                  variant="outline"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back button */}
      <div className="flex justify-center mt-6">
        <Link href="/cadastros">
          <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>
    </div>
  )
} 