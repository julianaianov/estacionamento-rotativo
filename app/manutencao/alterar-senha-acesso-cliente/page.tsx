"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, UserCircle, Mail, Lock } from "lucide-react"
import Link from "next/link"

export default function AlterarSenhaClientePage() {
  const [documentType, setDocumentType] = useState("CPF")
  const [document, setDocument] = useState("")
  const [plate, setPlate] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleBuscarDados = () => {
    if (document) {
      setShowResults(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <UserCircle className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Alterar Senha Acesso Cliente</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label className="text-base">1. Tipo de Documento</Label>
                <RadioGroup
                  defaultValue="CPF"
                  className="flex items-center space-x-4 mt-2"
                  onValueChange={setDocumentType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="CPF" id="cpf" />
                    <Label htmlFor="cpf">CPF</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="CNPJ" id="cnpj" />
                    <Label htmlFor="cnpj">CNPJ</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="document">2. {documentType}</Label>
                <Input
                  id="document"
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
                  placeholder={`Digite o ${documentType}`}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="plate">3. PLACA</Label>
                <Input
                  id="plate"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="Digite a placa do veículo"
                  className="mt-1"
                />
              </div>

              <Button 
                onClick={handleBuscarDados}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Procurar cliente
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card>
            <CardHeader>
              <CardTitle>Clientes localizados:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nome
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        CPF
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tentativas Login Erro
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Autenticado
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Diogo Diniz
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        120.351.107-85
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <input type="checkbox" checked className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-4">
                        <Button variant="link" className="text-blue-600 hover:text-blue-800">
                          <Mail className="w-4 h-4 mr-1" />
                          alterar e-mail/senha
                        </Button>
                        <Button variant="link" className="text-blue-600 hover:text-blue-800">
                          <Lock className="w-4 h-4 mr-1" />
                          Desbloquear Usuário
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back button at the bottom */}
        <div className="mt-8 flex justify-center">
          <Link href="/manutencao">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 