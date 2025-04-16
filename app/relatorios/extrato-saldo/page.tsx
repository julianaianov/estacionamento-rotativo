"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Wallet, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ExtratoSaldoPage() {
  const [tipoDocumento, setTipoDocumento] = useState("CPF")
  const [documento, setDocumento] = useState("")
  const [dataInicio, setDataInicio] = useState("")
  const [dataTermino, setDataTermino] = useState("")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Extrato CPF/CNPJ - Uso de Saldo/Bônus</h1>
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
          <div className="space-y-6">
            <div>
              <RadioGroup
                defaultValue="CPF"
                value={tipoDocumento}
                onValueChange={setTipoDocumento}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="CPF" id="cpf" />
                  <Label htmlFor="cpf">CPF</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="CNPJ" id="cnpj" />
                  <Label htmlFor="cnpj">CNPJ</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="OUTRO" id="outro" />
                  <Label htmlFor="outro">Outro</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>{tipoDocumento}</Label>
              <Input
                type="text"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                placeholder="Digite o número do documento"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

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
            <div className="mb-4">
              <p><strong>NOME:</strong> Diogo Diniz</p>
              <p><strong>FONE:</strong> </p>
              <p><strong>CELULAR:</strong> </p>
              <p><strong>E-MAIL:</strong> diogocontabilidade@yahoo.com.br</p>
              <p className="text-gray-500 mt-2">Nenhuma movimentação encontrada!</p>
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