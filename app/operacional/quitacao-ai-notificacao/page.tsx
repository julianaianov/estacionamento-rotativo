"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface VeiculoMulta {
  data: string
  valor: string
  ticket: string
  motivo: string
  boxVaga: string
  local: string
  veiculo: string
  bonus: string
}

export default function QuitacaoAINotificacaoDashboard() {
  const [placa, setPlaca] = useState("")
  const [veiculoInfo, setVeiculoInfo] = useState<{
    placa: string;
    veiculo: string;
    cor: string;
  } | null>(null)
  const [multas, setMultas] = useState<VeiculoMulta[]>([])
  const [buscaRealizada, setBuscaRealizada] = useState(false)

  const handleBuscar = () => {
    // Simulando dados do backend
    if (placa.toUpperCase() === "ABC1234") {
      setVeiculoInfo({
        placa: "ABC1234",
        veiculo: "VW/SANTANA CG",
        cor: "VERMELHA"
      })
      setMultas([
        {
          data: "09/09/22 07:33 - 09:33",
          valor: "R$ 5,00",
          ticket: "MAR01190934",
          motivo: "VEICULO SE",
          boxVaga: "15/43",
          local: "AV BEIRA MAR, SN",
          veiculo: "VW/SANTANA",
          bonus: "- - -"
        },
        {
          data: "12/09/22 07:20 - 09:20",
          valor: "R$ 2,50",
          ticket: "MAR01192920",
          motivo: "VEICULO SE",
          boxVaga: "541",
          local: "Rua Maria Cordeiro Cardoso, SN",
          veiculo: "VW/SANTANA",
          bonus: "- - -"
        },
        {
          data: "13/09/22 09:37 - 11:37",
          valor: "R$ 2,50",
          ticket: "MAR01194232",
          motivo: "VEICULO SE",
          boxVaga: "2",
          local: "RUA VEREADOR FRANCISCO SABINO DA COSTA, SN",
          veiculo: "SANTANA(VO",
          bonus: "- - -"
        }
      ])
      setBuscaRealizada(true)
    } else {
      setVeiculoInfo(null)
      setMultas([])
      setBuscaRealizada(true)
    }
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CheckSquare className="h-6 w-6 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Quitação AI/Notificação</h1>
        </div>
      </div>

      {/* Search Section */}
      <Card className="p-6">
        <div className="flex items-end gap-4">
          <div className="flex-1 max-w-xs">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Placa:
            </label>
            <Input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="uppercase"
              maxLength={7}
            />
          </div>
          <Button 
            onClick={handleBuscar}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Buscar Dados
          </Button>
        </div>
      </Card>

      {/* Results Section */}
      {buscaRealizada && veiculoInfo && (
        <Card className="mt-6">
          <div className="p-4 bg-gray-50 border-b">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="font-semibold">PLACA:</span> {veiculoInfo.placa}
              </div>
              <div>
                <span className="font-semibold">VEÍCULO:</span> {veiculoInfo.veiculo}
              </div>
              <div>
                <span className="font-semibold">COR:</span> {veiculoInfo.cor}
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-4 py-2 w-8">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-4 py-2">Emis/Saída</th>
                  <th className="px-4 py-2">Valor</th>
                  <th className="px-4 py-2">Ticket</th>
                  <th className="px-4 py-2">Motivo</th>
                  <th className="px-4 py-2">Box/Vaga</th>
                  <th className="px-4 py-2">Local</th>
                  <th className="px-4 py-2">Veículo</th>
                  <th className="px-4 py-2">Bonus</th>
                  <th className="px-4 py-2 w-8"></th>
                </tr>
              </thead>
              <tbody>
                {multas.map((multa, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-4 py-2">{multa.data}</td>
                    <td className="px-4 py-2">{multa.valor}</td>
                    <td className="px-4 py-2">{multa.ticket}</td>
                    <td className="px-4 py-2">{multa.motivo}</td>
                    <td className="px-4 py-2">{multa.boxVaga}</td>
                    <td className="px-4 py-2">{multa.local}</td>
                    <td className="px-4 py-2">{multa.veiculo}</td>
                    <td className="px-4 py-2">{multa.bonus}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <Link href="/">
          <Button 
            variant="outline" 
            className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white border-none flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {/* Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mt-6"></div>
    </div>
  )
} 