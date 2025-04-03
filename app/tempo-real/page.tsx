import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Map,
  CheckCircle,
  ClipboardList,
  Users,
  Activity,
  MonitorIcon,
} from "lucide-react"

export default function TempoRealPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tempo Real</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/tempo-real/mapa-ocupacao-vagas">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Map className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Ocupação Vagas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização em tempo real da ocupação das vagas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-ocupacao-vagas-gerente">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Map className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Ocupação Vagas - Gerente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização gerencial da ocupação das vagas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/fechamento-sessao-setores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <CardTitle>Fechamento Sessão Setores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de fechamento de sessões por setor</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/consulta-quadra-setor">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <ClipboardList className="h-6 w-6 text-blue-600" />
                <CardTitle>Consulta Por Quadra/Setor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Consulta detalhada por quadra e setor</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-movimentacao-operadores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Movimentação Operadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Acompanhamento da movimentação dos operadores</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-incidencia-estacionamento">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Activity className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Incidência Estacionamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Mapa de calor mostrando incidência de estacionamento</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-exibicao-vagas">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Map className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa de Exibição de Vagas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização das vagas cadastradas no sistema</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-monitoramento-parquimetro">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <MonitorIcon className="h-6 w-6 text-blue-600" />
                <CardTitle>Monitoramento Parquímetro/Fiscaliz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Monitoramento de parquímetros e fiscalização</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/devedores-estacionados">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <ClipboardList className="h-6 w-6 text-blue-600" />
                <CardTitle>Devedores estacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Lista de devedores atualmente estacionados</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}

