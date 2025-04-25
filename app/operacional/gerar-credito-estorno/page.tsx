"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DollarSign, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function GerarCreditoEstornoDashboard() {
  const [documento, setDocumento] = useState("")
  const [tipoDocumento, setTipoDocumento] = useState("cpf")
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const formatDocumento = (value: string) => {
    if (tipoDocumento === "cpf") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    } else {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }
  }

  const handleDocumentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDocumento(e.target.value)
    setDocumento(formatted)
  }

  const handleBuscar = () => {
    if (!documento) return
    setLoading(true)
    // Simulação de chamada à API
    setTimeout(() => {
      setLoading(false)
      setShowModal(true)
    }, 1000)
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <DollarSign className="h-6 w-6 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Gerar Crédito/Estorno</h1>
        </div>
      </div>

      {/* Search Section */}
      <Card className="p-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <RadioGroup
              defaultValue="cpf"
              onValueChange={setTipoDocumento}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cpf" id="cpf" />
                <Label htmlFor="cpf">CPF</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cnpj" id="cnpj" />
                <Label htmlFor="cnpj">CNPJ</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                type="text"
                placeholder={tipoDocumento === "cpf" ? "Digite o CPF" : "Digite o CNPJ"}
                value={documento}
                onChange={handleDocumentoChange}
                maxLength={tipoDocumento === "cpf" ? 14 : 18}
                className="w-full"
              />
            </div>
            <Button 
              onClick={handleBuscar}
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={!documento || loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Buscando...
                </span>
              ) : (
                <span className="flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </span>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Gerar Crédito/Estorno</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Saldo Atual:</Label>
              <Input
                type="text"
                value="0,00"
                readOnly
                className="col-span-2 bg-gray-50"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Valor:</Label>
              <Input
                type="text"
                placeholder="0,00"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Motivo:</Label>
              <Input
                type="text"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Senha:</Label>
              <Input
                type="password"
                className="col-span-2"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Confirmar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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