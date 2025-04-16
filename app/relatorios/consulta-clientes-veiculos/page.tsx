"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Car, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ConsultaVeiculosPage() {
  const [dataInicio, setDataInicio] = useState("")
  const [dataTermino, setDataTermino] = useState("")
  const [tipo, setTipo] = useState("TODOS")
  const [buscarPorValidade, setBuscarPorValidade] = useState(false)
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  // Dados de exemplo
  const veiculos = [
    {
      placa: "639.573.887-91",
      dataCadastro: "16/04/2025",
      validade: "",
      cidade: "",
      tipo: "PRE",
      saldoRS: "0,00",
      loginCadastro: "",
      obs: "",
      placas: "",
      email: "2309tuninho@gmail.com"
    },
    {
      placa: "155.587.687-03",
      dataCadastro: "16/04/2025",
      validade: "",
      cidade: "",
      tipo: "PRE",
      saldoRS: "0,00",
      loginCadastro: "",
      obs: "",
      placas: "",
      email: "Fabianaritalves2@gmail.com"
    },
    {
      placa: "012.638.357-08",
      dataCadastro: "16/04/2025",
      validade: "",
      cidade: "",
      tipo: "PRE",
      saldoRS: "0,00",
      loginCadastro: "",
      obs: "",
      placas: "",
      email: "marcelomonteirodebarros@gmail.com"
    },
    {
      placa: "157.202.517-40",
      dataCadastro: "16/04/2025",
      validade: "",
      cidade: "",
      tipo: "PRE",
      saldoRS: "0,00",
      loginCadastro: "",
      obs: "",
      placas: "",
      email: "advcarolinenascim@gmail.com"
    },
    {
      placa: "106.109.597-51",
      dataCadastro: "16/04/2025",
      validade: "",
      cidade: "",
      tipo: "PRE",
      saldoRS: "0,00",
      loginCadastro: "",
      obs: "",
      placas: "",
      email: "juliana.vielman@yahoo.com.br"
    },
    {
      placa: "075.486.129-58",
      dataCadastro: "16/04/2025",
      validade: "",
      cidade: "",
      tipo: "PRE",
      saldoRS: "0,00",
      loginCadastro: "",
      obs: "",
      placas: "",
      email: "alisson.montagnoli@gmail.com"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Consulta Veículos Com Cadastro</h1>
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
              <Label>Data Início:</Label>
              <Input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
            </div>
            <div>
              <Label>Data Término:</Label>
              <Input
                type="date"
                value={dataTermino}
                onChange={(e) => setDataTermino(e.target.value)}
              />
            </div>
            <div>
              <Label>Tipo:</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="PRE">PRE</SelectItem>
                  <SelectItem value="POS">POS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="buscarValidade"
                checked={buscarPorValidade}
                onCheckedChange={(checked: boolean) => setBuscarPorValidade(checked)}
              />
              <label htmlFor="buscarValidade" className="ml-2">
                Buscar pela data de validade
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
                    <th className="px-4 py-2 text-left">Placa</th>
                    <th className="px-4 py-2 text-left">Data Cadastro</th>
                    <th className="px-4 py-2 text-left">Validade</th>
                    <th className="px-4 py-2 text-left">Cidade</th>
                    <th className="px-4 py-2 text-left">Tipo</th>
                    <th className="px-4 py-2 text-right">Saldo R$</th>
                    <th className="px-4 py-2 text-left">Login Cadastro</th>
                    <th className="px-4 py-2 text-left">Obs</th>
                    <th className="px-4 py-2 text-left">Placas</th>
                    <th className="px-4 py-2 text-left">E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {veiculos.map((veiculo, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{veiculo.placa}</td>
                      <td className="px-4 py-2">{veiculo.dataCadastro}</td>
                      <td className="px-4 py-2">{veiculo.validade}</td>
                      <td className="px-4 py-2">{veiculo.cidade}</td>
                      <td className="px-4 py-2">{veiculo.tipo}</td>
                      <td className="px-4 py-2 text-right">{veiculo.saldoRS}</td>
                      <td className="px-4 py-2">{veiculo.loginCadastro}</td>
                      <td className="px-4 py-2">{veiculo.obs}</td>
                      <td className="px-4 py-2">{veiculo.placas}</td>
                      <td className="px-4 py-2">{veiculo.email}</td>
                    </tr>
                  ))}
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