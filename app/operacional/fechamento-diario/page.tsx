"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DollarSign, ArrowLeft, Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import Link from "next/link"

interface TotaisFinanceiros {
  totalTickets: number
  totalAI: number
  creditosAdicionais: number
  contaPagamento: number
  outros: number
  devolucoes: number
  totalDinheiro: number
}

export default function FechamentoDiarioDashboard() {
  const [date, setDate] = useState<Date>()
  const [showResults, setShowResults] = useState(false)
  const [totais, setTotais] = useState<TotaisFinanceiros>({
    totalTickets: 0,
    totalAI: 0,
    creditosAdicionais: 0,
    contaPagamento: 0,
    outros: 0,
    devolucoes: 0,
    totalDinheiro: 0
  })

  const handleBuscarDados = () => {
    if (!date) return

    // Aqui você faria a chamada para a API para buscar os dados
    // Por enquanto vamos simular alguns valores
    setTotais({
      totalTickets: 150.00,
      totalAI: 75.50,
      creditosAdicionais: 25.00,
      contaPagamento: 200.00,
      outros: 50.00,
      devolucoes: 15.00,
      totalDinheiro: 485.50
    })
    setShowResults(true)
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <DollarSign className="h-6 w-6 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Fechamento Financeiro</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <Card className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data Fechamento:
            </label>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "dd/MM/yyyy") : "Selecione uma data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button 
                onClick={handleBuscarDados}
                className="bg-blue-600 text-white hover:bg-blue-700"
                disabled={!date}
              >
                Buscar Dados
              </Button>
            </div>
          </div>
        </Card>

        {/* Totals Section */}
        {showResults && (
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Totais do dia em Dinheiro:
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Total Tickets</label>
                  <div className="mt-1 p-2 bg-gray-50 rounded border border-gray-200">
                    R$ {totais.totalTickets.toFixed(2)}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Total AI</label>
                  <div className="mt-1 p-2 bg-gray-50 rounded border border-gray-200">
                    R$ {totais.totalAI.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Créditos Adic.</label>
                  <div className="mt-1 p-2 bg-gray-50 rounded border border-gray-200">
                    R$ {totais.creditosAdicionais.toFixed(2)}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Conta Pagto.</label>
                  <div className="mt-1 p-2 bg-gray-50 rounded border border-gray-200">
                    R$ {totais.contaPagamento.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Outros</label>
                  <div className="mt-1 p-2 bg-gray-50 rounded border border-gray-200">
                    R$ {totais.outros.toFixed(2)}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Dev.</label>
                  <div className="mt-1 p-2 bg-gray-50 rounded border border-gray-200">
                    R$ {totais.devolucoes.toFixed(2)}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Total Dinheiro</label>
                <div className="mt-1 p-2 bg-blue-50 rounded border border-blue-200 font-semibold text-blue-700">
                  R$ {totais.totalDinheiro.toFixed(2)}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>

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