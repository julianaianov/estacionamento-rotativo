"use client"

import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { CreditCard, Star, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchResult {
  placa: string
  status: string
  hasResult: boolean
}

export default function IsentosPosPageDashboard() {
  const [placa, setPlaca] = useState("")
  const [totalIsentos, setTotalIsentos] = useState(832)
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null)

  const handleBuscarDados = () => {
    // Simulando busca no banco de dados
    if (placa) {
      setSearchResult({
        placa: placa,
        status: "CLIENTE NORMAL PRE-PAGO",
        hasResult: false
      })
    }
  }

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 rounded shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Cadastro de Isentos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Formulário de Busca */}
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Placa:</label>
              <Input
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                placeholder="Digite a placa do veículo"
                className="uppercase"
              />
            </div>
            <button
              onClick={handleBuscarDados}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded"
            >
              Buscar Dados
            </button>
          </div>

          {/* Resultados da Busca */}
          {searchResult && (
            <div className="mt-8 max-w-3xl">
              <div className="mb-4">
                {!searchResult.hasResult ? (
                  <p className="text-gray-700">Nenhum registro isento ou pós-pago para a placa:</p>
                ) : null}
              </div>

              <div className="mb-6">
                <p className="text-red-500 font-medium">
                  Atual: {searchResult.status}
                </p>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Placa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {searchResult.placa}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex gap-4">
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => console.log("Cadastrar como Isento")}
                          >
                            Cadastrar como Isento
                          </button>
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => console.log("Cadastrar como pós pago")}
                          >
                            Cadastrar como pós pago
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Card com Total de Isentos */}
          <div className="mt-8 bg-card text-card-foreground p-4 rounded-lg max-w-md">
            <h2 className="text-center text-lg font-semibold">TOTAL DE ISENTOS</h2>
            <p className="text-center text-3xl font-bold mt-2">{totalIsentos}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <Link
          href="/cadastros"
          className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white px-6 py-1.5 rounded text-sm font-medium inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
} 