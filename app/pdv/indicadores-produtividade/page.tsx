"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Scale } from "lucide-react"
import Link from "next/link"

type Setor = {
  nome: string
  pdvs: string[]
}

export default function IndicadoresProdutividadePage() {
  const [dataInicial, setDataInicial] = useState("01/04/2025")
  const [dataFinal, setDataFinal] = useState("30/04/2025")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo para os setores
  const setores: Setor[] = [
    {
      nome: "RUA DOMICIO DA GAMA",
      pdvs: []
    },
    {
      nome: "1 AV ANTONIO VIEIRA SOBRINHO",
      pdvs: []
    },
    {
      nome: "1 AVENIDA ANTONIO VIEIRA SOBRINHO",
      pdvs: []
    }
  ]

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Indicadores de Produtividade dos PDVs</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Filters Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <Label>Data Inicial:</Label>
                  <Input
                    type="text"
                    value={dataInicial}
                    onChange={(e) => setDataInicial(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Data Final:</Label>
                  <Input
                    type="text"
                    value={dataFinal}
                    onChange={(e) => setDataFinal(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Button 
                  onClick={handleBuscar}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Buscar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {mostrarResultados && (
          <div className="space-y-6">
            {setores.map((setor, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{setor.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  {setor.pdvs.length > 0 ? (
                    <div>
                      {/* Aqui entraria a lista de PDVs do setor */}
                    </div>
                  ) : (
                    <p className="text-gray-500">Nenhum PDV registrado neste setor</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Back button */}
        <div className="flex justify-center">
          <Link href="/pdv">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
              <Scale className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 