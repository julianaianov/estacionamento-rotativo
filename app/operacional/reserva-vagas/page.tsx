"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Car, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReservaVagasPage() {
  const [tipoPessoa, setTipoPessoa] = useState("fisica")
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [tipoVeiculo, setTipoVeiculo] = useState("")
  const [vaga, setVaga] = useState("")

  const handleVerReservas = () => {
    // Implementar lógica para ver reservas
    console.log("Verificando reservas...")
  }

  const handleAddVaga = () => {
    // Implementar lógica para adicionar vaga
    console.log("Adicionando vaga...")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Reserva de Vagas</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div>
                  <Label className="text-base">Tipo pessoa</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <RadioGroup defaultValue="fisica" onValueChange={setTipoPessoa} className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fisica" id="fisica" />
                        <Label htmlFor="fisica">Física</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="juridica" id="juridica" />
                        <Label htmlFor="juridica">Jurídica</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="w-[300px]"
                  />
                </div>

                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-[300px]"
                  />
                </div>

                <div className="flex gap-4">
                  <div>
                    <Label htmlFor="dataInicio">Data Início</Label>
                    <Input
                      id="dataInicio"
                      type="date"
                      value={dataInicio}
                      onChange={(e) => setDataInicio(e.target.value)}
                      className="w-[150px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dataFim">Data Fim</Label>
                    <Input
                      id="dataFim"
                      type="date"
                      value={dataFim}
                      onChange={(e) => setDataFim(e.target.value)}
                      className="w-[150px]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tipoVeiculo">Tipo de veículo</Label>
                  <Select value={tipoVeiculo} onValueChange={setTipoVeiculo}>
                    <SelectTrigger className="w-[300px]">
                      <SelectValue placeholder="::SELECIONE::" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carro">Carro</SelectItem>
                      <SelectItem value="moto">Moto</SelectItem>
                      <SelectItem value="caminhao">Caminhão</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 items-end">
                  <div>
                    <Label htmlFor="vaga">Vaga</Label>
                    <Input
                      id="vaga"
                      value={vaga}
                      onChange={(e) => setVaga(e.target.value)}
                      className="w-[200px]"
                    />
                  </div>
                  <Button 
                    type="button"
                    onClick={handleAddVaga}
                    className="bg-[#87CEEB] hover:bg-[#87CEEB]/90 text-white"
                  >
                    Add Vaga
                  </Button>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleVerReservas}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                Ver Reservas
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/operacional">
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