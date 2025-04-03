import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  CheckCircle,
  FileText,
  DollarSign,
  CreditCard,
  BarChart2,
  Link2,
  Clock,
  Briefcase,
  ParkingCircle,
  Mail,
  Car,
  UserPlus,
  Leaf,
} from "lucide-react"

export default function OperacionalPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Operacional</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/operacional/quitacao-ai-notificacao">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <CardTitle>Quitação de AI/Notificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de quitações de AI/Notificação</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/quitacao-ai-notificacao-pa">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <CardTitle>Quitação de AI/Notificação PA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de quitações de AI/Notificação PA</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/fechamento-diario">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <CardTitle>Fechamento Diário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de fechamento diário</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/inserir-resgatar-creditos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <CardTitle>Inserir/Resgatar Créditos/Manut.Cadastro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de créditos e manutenção de cadastro</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/sac-acompanhamento">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <BarChart2 className="h-6 w-6 text-blue-600" />
                <CardTitle>SAC - Acompanhamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Acompanhamento de SAC</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/gerar-link-quitacoes-ai">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Link2 className="h-6 w-6 text-blue-600" />
                <CardTitle>Gerar Link Quitações AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Geração de links para quitações de AI</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/fechamento-consulta-ponto">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <CardTitle>Fechamento/Consulta de Ponto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de fechamento e consulta de ponto</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/meu-caixa">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Briefcase className="h-6 w-6 text-blue-600" />
                <CardTitle>Meu Caixa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento do seu caixa</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/reserva-vaga">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <ParkingCircle className="h-6 w-6 text-blue-600" />
                <CardTitle>Reserva de Vaga</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de reservas de vagas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/consulta-mensagens">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Mail className="h-6 w-6 text-blue-600" />
                <CardTitle>Consulta Mensagens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Consulta de mensagens do sistema</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/importar-arquivos-veiculos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Car className="h-6 w-6 text-blue-600" />
                <CardTitle>Importar Arquivos de Veículos DETRAN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Importação de arquivos de veículos do DETRAN</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/gerar-credito-estorno">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <CardTitle>Gerar Crédito/Estorno</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Geração de créditos e estornos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/vincular-cpf-placa">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <UserPlus className="h-6 w-6 text-blue-600" />
                <CardTitle>Vincular CPF/Placa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Vinculação de CPF com placa de veículo</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/operacional/lote-mumbuca-verde">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Leaf className="h-6 w-6 text-blue-600" />
                <CardTitle>Lote Mumbuca Verde</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Gerenciamento de lotes Mumbuca Verde</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}

