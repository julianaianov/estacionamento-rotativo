import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Users,
  UserCircle,
  RouteIcon as Road,
  CreditCard,
  Calendar,
  Info,
  Table,
  AlertTriangle,
  Watch,
  Car,
  DollarSign,
  Ban,
  Route,
  Cog,
  ClipboardCheck,
  Tablet,
} from "lucide-react"

export default function CadastrosPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Cadastros</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/cadastros/usuarios">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <CardTitle>Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de usuários do sistema</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/clientes">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <UserCircle className="h-6 w-6 text-blue-600" />
                <CardTitle>Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro e gerenciamento de clientes</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/ruas-setores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Road className="h-6 w-6 text-blue-600" />
                <CardTitle>Ruas/Setores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de ruas e setores</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/isentos-pos-pago">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <CardTitle>Isentos/Pós-Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de isentos e pós-pago</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/feriados">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                <CardTitle>Feriados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de feriados</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/sac-motivos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Info className="h-6 w-6 text-blue-600" />
                <CardTitle>SAC - Motivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de motivos para SAC</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/tabelas-valores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Table className="h-6 w-6 text-blue-600" />
                <CardTitle>Tabelas e Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de tabelas e valores</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/tipo-advertencias">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
                <CardTitle>Tipo Advertências</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de tipos de advertências</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/turnos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Watch className="h-6 w-6 text-blue-600" />
                <CardTitle>Turnos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de turnos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/manutencao-veiculos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Car className="h-6 w-6 text-blue-600" />
                <CardTitle>Manutenção Veículo/Placa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Manutenção de dados de veículos e placas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/veiculos-marca-modelo">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Car className="h-6 w-6 text-blue-600" />
                <CardTitle>Veículos (Marca/Modelo)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de marcas e modelos de veículos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/impostos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <CardTitle>Impostos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de impostos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/isentos-vaga-setor">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Ban className="h-6 w-6 text-blue-600" />
                <CardTitle>Isento por Vaga/Setor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de isentos por vaga ou setor</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/rotas">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Route className="h-6 w-6 text-blue-600" />
                <CardTitle>Rotas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de rotas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/motivos-baixa-ai">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <ClipboardCheck className="h-6 w-6 text-blue-600" />
                <CardTitle>Motivos de baixa de AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Cadastro de motivos de baixa de AI</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cadastros/dispositivos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Tablet className="h-6 w-6 text-blue-600" />
                <CardTitle>Dispositivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de dispositivos</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}

