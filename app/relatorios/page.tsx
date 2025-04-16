import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  DollarSign,
  AlertOctagon,
  BarChart,
  FileSpreadsheet,
  Car,
  Clock,
  Search,
  FileBarChart,
  PercentSquare,
  Ticket,
  AlertTriangle,
  Wallet,
  Users,
} from "lucide-react"

export default function RelatoriosPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Relatórios e Consultas</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Relatórios destacados */}
          <Link href="/relatorios/lista-funcionarios">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <CardTitle>Lista de Funcionários</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de ponto dos funcionários</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/uso-de-saldo">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Wallet className="h-6 w-6 text-blue-600" />
                <CardTitle>Uso de Saldo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de utilização de saldo</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/arrecadacao-diaria-resumida">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <CardTitle>Arrecadação Diária Resumida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Resumo da arrecadação diária</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/consulta-maiores-devedores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <AlertOctagon className="h-6 w-6 text-blue-600" />
                <CardTitle>Consulta Maiores Devedores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Lista dos maiores devedores do sistema</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/indices-irregularidades">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
                <CardTitle>Índices de Irregularidades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Análise dos índices de irregularidades</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/movimentacao-veiculo">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Car className="h-6 w-6 text-blue-600" />
                <CardTitle>Movimentação Veículo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de movimentação de veículos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/faturamento-quadra-setor">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <FileBarChart className="h-6 w-6 text-blue-600" />
                <CardTitle>Faturamento Por Quadra/Setor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de faturamento por quadra e setor</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/taxa-ocupacao-respeito">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <PercentSquare className="h-6 w-6 text-blue-600" />
                <CardTitle>Taxa de Ocupação/Respeito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Análise de taxas de ocupação e respeito às regras</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/faturamento-completo">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <FileSpreadsheet className="h-6 w-6 text-blue-600" />
                <CardTitle>Faturamento - Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório completo de faturamento</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/rendimentos-funcionarios">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <FileBarChart className="h-6 w-6 text-blue-600" />
                <CardTitle>Relatório Rendimentos Funcionários</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de rendimentos dos funcionários</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/faturamento-periodo">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-yellow-50">
              <CardHeader className="flex flex-row items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <CardTitle>Faturamento Período</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de faturamento por período</p>
              </CardContent>
            </Card>
          </Link>

          {/* Outros relatórios */}
          <Link href="/relatorios/arrecadacao-por-operador">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <CardTitle>Arrecadação por Operador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de arrecadação por operador</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/graficos-ai">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <BarChart className="h-6 w-6 text-blue-600" />
                <CardTitle>Gráficos AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Análise gráfica de Autos de Infração</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/arrecadacao-diaria-cx-operadores">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <CardTitle>Arrecadação Diária(Cx Operadores)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Arrecadação diária por caixa de operadores</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/arrecadacao-por-horario">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <CardTitle>Arrecadação por Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Relatório de arrecadação por horário</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/consulta-clientes-veiculos">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Search className="h-6 w-6 text-blue-600" />
                <CardTitle>Consulta Clientes/Veículos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Consulta de clientes e seus veículos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/relatorios/consulta-tickets">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Ticket className="h-6 w-6 text-blue-600" />
                <CardTitle>Ticket Detalhado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Consulta detalhada de tickets</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}

