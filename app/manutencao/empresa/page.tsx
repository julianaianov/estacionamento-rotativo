"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Building2 } from "lucide-react"
import Link from "next/link"

export default function EmpresaPage() {
  const [formData, setFormData] = useState({
    razaoSocial: "MARICÁ ROTATIVO",
    nomeFantasia: "MARICÁ ROTATIVO",
    cnpj: "20.009.382/0001-21",
    ie: "",
    estado: "RJ",
    cidade: "MARICA",
    logradouro: "RUA JOVINO D. OLIVEIRA",
    numero: "481",
    complemento: "",
    bairro: "CENTRO",
    cep: "00.000-000",
    fone: "(21)97060-0642",
    celular: "",
    email: "maricarotativo@codemar-sa.com.br",
    site: "codemar-sa.com.br",
    latitude: "-22.917854903223",
    longitude: "-42.81773088935",
    diasVctoBoleto: "11",
    linkPesquisaSatisfacao: "https://www.urldapesquisa.com.br",
    nomeDesignadoPrestacaoContas: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    // Implementar a lógica de salvamento
    console.log("Dados da empresa:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Dados da empresa</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="razaoSocial">Razão Social</Label>
                <Input
                  id="razaoSocial"
                  value={formData.razaoSocial}
                  onChange={(e) => handleInputChange("razaoSocial", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="nomeFantasia">Nome fantasia</Label>
                <Input
                  id="nomeFantasia"
                  value={formData.nomeFantasia}
                  onChange={(e) => handleInputChange("nomeFantasia", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input
                  id="cnpj"
                  value={formData.cnpj}
                  onChange={(e) => handleInputChange("cnpj", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="ie">IE</Label>
                <Input
                  id="ie"
                  value={formData.ie}
                  onChange={(e) => handleInputChange("ie", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="estado">Estado</Label>
                <Select value={formData.estado} onValueChange={(value) => handleInputChange("estado", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RJ">RJ</SelectItem>
                    {/* Adicionar outros estados conforme necessário */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange("cidade", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="logradouro">Logradouro</Label>
                <Input
                  id="logradouro"
                  value={formData.logradouro}
                  onChange={(e) => handleInputChange("logradouro", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="numero">Número</Label>
                <Input
                  id="numero"
                  value={formData.numero}
                  onChange={(e) => handleInputChange("numero", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="complemento">Complemento</Label>
                <Input
                  id="complemento"
                  value={formData.complemento}
                  onChange={(e) => handleInputChange("complemento", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bairro">Bairro</Label>
                <Input
                  id="bairro"
                  value={formData.bairro}
                  onChange={(e) => handleInputChange("bairro", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  value={formData.cep}
                  onChange={(e) => handleInputChange("cep", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="fone">Fone</Label>
                <Input
                  id="fone"
                  value={formData.fone}
                  onChange={(e) => handleInputChange("fone", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="celular">Celular</Label>
                <Input
                  id="celular"
                  value={formData.celular}
                  onChange={(e) => handleInputChange("celular", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="site">Site</Label>
                <Input
                  id="site"
                  value={formData.site}
                  onChange={(e) => handleInputChange("site", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  value={formData.latitude}
                  onChange={(e) => handleInputChange("latitude", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  value={formData.longitude}
                  onChange={(e) => handleInputChange("longitude", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="diasVctoBoleto">Dias Vcto. Boleto</Label>
                <Input
                  id="diasVctoBoleto"
                  value={formData.diasVctoBoleto}
                  onChange={(e) => handleInputChange("diasVctoBoleto", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="linkPesquisaSatisfacao">Link pesquisa satisfação</Label>
                <Input
                  id="linkPesquisaSatisfacao"
                  value={formData.linkPesquisaSatisfacao}
                  onChange={(e) => handleInputChange("linkPesquisaSatisfacao", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="nomeDesignadoPrestacaoContas">Nome Designado Prestação de Contas</Label>
                <Input
                  id="nomeDesignadoPrestacaoContas"
                  value={formData.nomeDesignadoPrestacaoContas}
                  onChange={(e) => handleInputChange("nomeDesignadoPrestacaoContas", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <Button 
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Salvar
              </Button>
              <Link href="/manutencao">
                <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 