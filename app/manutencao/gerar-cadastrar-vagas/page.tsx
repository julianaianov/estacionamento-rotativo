"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, MapPin, Map } from "lucide-react"
import Link from "next/link"

export default function GerarCadastrarVagasPage() {
  const [selectedArea, setSelectedArea] = useState("")
  const [selectedQuadraSetor, setSelectedQuadraSetor] = useState("")
  const [filters, setFilters] = useState({
    normal: true,
    idoso: true,
    pne: true,
    farmacia: true,
    cargaDescarga: true,
    orgaoPublico: true,
    moto: true,
    gestante: true,
    vagaGaragem: true,
    vagaGratuita: true,
    inativo: true
  })

  const handleFilterChange = (filterName: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName as keyof typeof filters]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Gerar/Cadastrar Vagas</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Filters Card */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Área</Label>
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger>
                      <SelectValue placeholder=":: todas ::" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">:: todas ::</SelectItem>
                      {/* Add other areas as needed */}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Quadra/Setor</Label>
                  <Select value={selectedQuadraSetor} onValueChange={setSelectedQuadraSetor}>
                    <SelectTrigger>
                      <SelectValue placeholder=":: todas ::" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">:: todas ::</SelectItem>
                      {/* Add other sectors as needed */}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Box</Label>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="normal" 
                      checked={filters.normal}
                      onCheckedChange={() => handleFilterChange("normal")}
                    />
                    <Label htmlFor="normal" className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                      NORMAL <span className="ml-2 text-gray-500">(3667)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="idoso" 
                      checked={filters.idoso}
                      onCheckedChange={() => handleFilterChange("idoso")}
                    />
                    <Label htmlFor="idoso" className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                      IDOSO <span className="ml-2 text-gray-500">(9)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="pne" 
                      checked={filters.pne}
                      onCheckedChange={() => handleFilterChange("pne")}
                    />
                    <Label htmlFor="pne" className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                      PNE <span className="ml-2 text-gray-500">(1)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="farmacia" 
                      checked={filters.farmacia}
                      onCheckedChange={() => handleFilterChange("farmacia")}
                    />
                    <Label htmlFor="farmacia" className="flex items-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                      FARMÁCIA <span className="ml-2 text-gray-500">(0)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="cargaDescarga" 
                      checked={filters.cargaDescarga}
                      onCheckedChange={() => handleFilterChange("cargaDescarga")}
                    />
                    <Label htmlFor="cargaDescarga" className="flex items-center">
                      <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                      CARGA E DESCARGA <span className="ml-2 text-gray-500">(0)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="orgaoPublico" 
                      checked={filters.orgaoPublico}
                      onCheckedChange={() => handleFilterChange("orgaoPublico")}
                    />
                    <Label htmlFor="orgaoPublico" className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                      ÓRGÃO PÚBLICO <span className="ml-2 text-gray-500">(0)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="moto" 
                      checked={filters.moto}
                      onCheckedChange={() => handleFilterChange("moto")}
                    />
                    <Label htmlFor="moto" className="flex items-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                      MOTO <span className="ml-2 text-gray-500">(0)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="gestante" 
                      checked={filters.gestante}
                      onCheckedChange={() => handleFilterChange("gestante")}
                    />
                    <Label htmlFor="gestante" className="flex items-center">
                      <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                      GESTANTE <span className="ml-2 text-gray-500">(0)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="vagaGaragem" 
                      checked={filters.vagaGaragem}
                      onCheckedChange={() => handleFilterChange("vagaGaragem")}
                    />
                    <Label htmlFor="vagaGaragem" className="flex items-center">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></div>
                      VAGA GARAGEM <span className="ml-2 text-gray-500">(0)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="vagaGratuita" 
                      checked={filters.vagaGratuita}
                      onCheckedChange={() => handleFilterChange("vagaGratuita")}
                    />
                    <Label htmlFor="vagaGratuita" className="flex items-center">
                      <div className="w-4 h-4 bg-green-300 rounded-full mr-2"></div>
                      VAGA GRATUITA <span className="ml-2 text-gray-500">(229)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="inativo" 
                      checked={filters.inativo}
                      onCheckedChange={() => handleFilterChange("inativo")}
                    />
                    <Label htmlFor="inativo" className="flex items-center">
                      <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                      INATIVO <span className="ml-2 text-gray-500">(297)</span>
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Card */}
        <Card>
          <CardHeader>
            <CardTitle>Mapeamento Vagas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Map className="h-12 w-12 mx-auto mb-2" />
                <p>Mapa será carregado aqui</p>
                <p className="text-sm">Integração com Google Maps ou similar será necessária</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back button */}
        <div className="flex justify-center">
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