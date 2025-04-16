"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { KeyRound, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function LogAcessoPage() {
  const [dataInicio, setDataInicio] = useState("")
  const [dataTermino, setDataTermino] = useState("")
  const [tipoUsuario, setTipoUsuario] = useState("TODOS")
  const [usuario, setUsuario] = useState("TODOS")
  const [detalhado, setDetalhado] = useState(false)
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo
  const logs = [
    {
      data: "16/04/2025 16:07",
      login: "weslley",
      usuario: "M51 - WESLLEY",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 15:49",
      login: "Diogo",
      usuario: "Diogo Diniz",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 15:28",
      login: "diogo",
      usuario: "Diogo Diniz",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 14:03",
      login: "Diogo",
      usuario: "Diogo Diniz",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 13:51",
      login: "dante",
      usuario: "DANTE GALVAO",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 10:52",
      login: "diogo",
      usuario: "Diogo Diniz",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 09:29",
      login: "Diogo",
      usuario: "Diogo Diniz",
      situacao: "Login Efetuado com sucesso"
    },
    {
      data: "16/04/2025 00:59",
      login: "Wesley",
      usuario: "M51 - WESLLEY",
      situacao: "Senha incorreta"
    },
    {
      data: "16/04/2025 00:59",
      login: "Wesley",
      usuario: "M51 - WESLLEY",
      situacao: "Senha incorreta"
    }
  ]

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <KeyRound className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Log de acesso(Administrativo)</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Label>Tipo de Usuário:</Label>
              <Select value={tipoUsuario} onValueChange={setTipoUsuario}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="ADMIN">Administrador</SelectItem>
                  <SelectItem value="OPERADOR">Operador</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Usuário:</Label>
              <Select value={usuario} onValueChange={setUsuario}>
                <SelectTrigger>
                  <SelectValue placeholder=":: TODOS ::" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                  <SelectItem value="DIOGO">Diogo Diniz</SelectItem>
                  <SelectItem value="WESLEY">M51 - WESLLEY</SelectItem>
                  <SelectItem value="DANTE">DANTE GALVAO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <Checkbox
              id="detalhado"
              checked={detalhado}
              onCheckedChange={(checked: boolean) => setDetalhado(checked)}
            />
            <label
              htmlFor="detalhado"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Detalhado
            </label>
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
                    <th className="px-4 py-2 text-left">Data</th>
                    <th className="px-4 py-2 text-left">Login</th>
                    <th className="px-4 py-2 text-left">Usuário</th>
                    <th className="px-4 py-2 text-left">Situação</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2">{log.data}</td>
                      <td className="px-4 py-2">{log.login}</td>
                      <td className="px-4 py-2">{log.usuario}</td>
                      <td className="px-4 py-2">{log.situacao}</td>
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

      <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
} 