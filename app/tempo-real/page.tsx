import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, CheckSquare, Search, Activity, Thermometer, Grid, MonitorSmartphone, AlertOctagon } from "lucide-react"

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
                <MapPin className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Ocupação Vagas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização em tempo real da ocupação de vagas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-ocupacao-vagas-gerente">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Ocupação Vagas - Gerente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização gerencial da ocupação de vagas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/fechamento-sessao-setores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <CheckSquare className="h-6 w-6 text-blue-600" />
                <CardTitle>Fechamento Sessão Setores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de fechamento de sessão por setores</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/consulta-quadra-setor">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Search className="h-6 w-6 text-blue-600" />
                <CardTitle>Consulta Por Quadra/Setor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Consulta de informações por quadra ou setor</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-movimentacao-operadores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Activity className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Movimentação Operadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização da movimentação dos operadores em tempo real</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-incidencia-estacionamento">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Thermometer className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Incidência Estacionamento(Calor)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Mapa de calor mostrando incidência de estacionamento</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-exibicao-vagas-cadastradas">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Grid className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa de Exibição de Vagas Cadastradas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Visualização das vagas cadastradas no sistema</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/mapa-monitoramento-parquimetro">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <MonitorSmartphone className="h-6 w-6 text-blue-600" />
                <CardTitle>Mapa Monitoramento Parquímetro/Fiscaliz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Monitoramento de parquímetros e fiscalização</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tempo-real/devedores-estacionados">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <AlertOctagon className="h-6 w-6 text-blue-600" />
                <CardTitle>Devedores estacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Lista de devedores que estão atualmente estacionados</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}

