"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function InserirResgatarCreditosDashboard() {
  const [documento, setDocumento] = useState("")
  const [tipoDocumento, setTipoDocumento] = useState("cpf")
  const [showModal, setShowModal] = useState(false)
  const [saldoAtual, setSaldoAtual] = useState("0")
  const [valorCredito, setValorCredito] = useState("0,00")
  const [novoSaldo, setNovoSaldo] = useState("0")
  const [senha, setSenha] = useState("")

  const handleBuscar = () => {
    if (!documento) return
    setShowModal(true)
  }

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

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Inserir/Resgatar Créditos/Manut.Cadastro</h1>
        </div>
      </div>

      {/* Search Section */}
      <Card className="p-6">
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
              disabled={!documento}
            >
              Buscar
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>CPF/CNPJ: {documento}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Saldo Atual:</Label>
              <Input
                type="text"
                value={saldoAtual}
                readOnly
                className="col-span-2 bg-gray-50"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Valor Crédito:</Label>
              <Input
                type="text"
                value={valorCredito}
                onChange={(e) => setValorCredito(e.target.value)}
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Novo Saldo:</Label>
              <Input
                type="text"
                value={novoSaldo}
                readOnly
                className="col-span-2 bg-gray-50"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Informe sua senha:</Label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="col-span-2"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Finalizar
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
    </div>
  )
} 