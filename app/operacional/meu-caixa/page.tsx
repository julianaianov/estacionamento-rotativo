"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Download, Printer } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MeuCaixaPage() {
  const [showResults, setShowResults] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Meu Caixa</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>Fechamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-none w-32">
                  <label htmlFor="data" className="text-sm font-medium text-gray-700">
                    Data Fechamento:
                  </label>
                </div>
                <div className="flex-grow max-w-xs">
                  <Input
                    type="date"
                    id="data"
                    name="data"
                    className="w-full"
                  />
                </div>
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setShowResults(true)}
                >
                  Buscar Dados
                </Button>
              </div>

              {/* Results Section */}
              {showResults && (
                <div className="mt-8 space-y-6">
                  {/* Report Header */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Fechamento do Dia</h2>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        className="flex items-center space-x-2"
                        onClick={() => {/* Handle download */}}
                      >
                        <Download className="h-4 w-4" />
                        <span>Baixar</span>
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex items-center space-x-2"
                        onClick={() => {/* Handle print */}}
                      >
                        <Printer className="h-4 w-4" />
                        <span>Imprimir</span>
                      </Button>
                    </div>
                  </div>

                  {/* Report Content */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-4">TICKETS</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Quantidade:</p>
                            <p className="font-medium">0</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Valor Total:</p>
                            <p className="font-medium">R$ 0,00</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-4">CRÉDITOS</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Quantidade:</p>
                            <p className="font-medium">0</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Valor Total:</p>
                            <p className="font-medium">R$ 0,00</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-4">QUITAÇÃO DE AI</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Quantidade:</p>
                            <p className="font-medium">0</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Valor Total:</p>
                            <p className="font-medium">R$ 0,00</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-xl font-bold text-blue-600">TOTAL DINHEIRO: R$ 0,00</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Back button and gradient line */}
        <div className="mt-6">
          <Link href="/operacional">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white">
              ← Voltar
            </Button>
          </Link>
          <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mt-6"></div>
        </div>
      </div>
    </main>
  )
} 