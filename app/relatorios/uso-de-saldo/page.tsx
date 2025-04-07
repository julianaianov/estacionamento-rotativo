import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Wallet } from "lucide-react"
import Link from "next/link"

export default function UsoSaldoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Relatório de Uso de Saldo</h1>
            </div>
            <Link href="/relatorios">
              <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Filtros de Busca</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataInicio">Data Início:</Label>
                <Input type="date" id="dataInicio" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dataFinal">Data Final:</Label>
                <Input type="date" id="dataFinal" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tipo de Documento:</Label>
              <RadioGroup defaultValue="cpf" className="flex space-x-4">
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

            <div className="space-y-2">
              <Label htmlFor="documento">Documento:</Label>
              <Input type="text" id="documento" placeholder="Digite o documento..." />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="detalhado" />
              <Label htmlFor="detalhado">Detalhado</Label>
            </div>

            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Buscar Dados
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 