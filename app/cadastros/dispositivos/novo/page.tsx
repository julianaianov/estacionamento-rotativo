"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smartphone, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoDispositivoPage() {
  const [codigo, setCodigo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [nroSerieIMEI, setNroSerieIMEI] = useState("")
  const [senha, setSenha] = useState("")
  const [nroTel, setNroTel] = useState("")
  const [deviceID, setDeviceID] = useState("")
  const [status, setStatus] = useState("Ativo")

  const handleSalvar = () => {
    // Implementar lógica de salvamento
    console.log("Salvando dispositivo...")
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Cadastro de Dispositivos</h1>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Input id="descricao" placeholder="Digite a descrição" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nroSerieIMEI">Nº Série/IMEI</Label>
              <Input id="nroSerieIMEI" placeholder="Digite o número de série/IMEI" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" placeholder="Digite a senha" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nroTel">Nº Telefone</Label>
              <Input id="nroTel" placeholder="Digite o número de telefone" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deviceID">Device ID</Label>
              <Input id="deviceID" placeholder="Digite o Device ID" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" className="bg-orange-500 hover:bg-orange-600 text-white">
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Salvar
            </Button>
          </div>
        </form>
      </Card>

      <div className="mt-6 flex justify-center">
        <Link href="/cadastros/dispositivos">
          <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <div className="h-1 mt-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
    </div>
  )
} 