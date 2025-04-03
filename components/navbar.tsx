"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Home,
  FileText,
  Settings,
  Clock,
  ShoppingCart,
  BarChart2,
  PenToolIcon as Tool,
  ChevronDown,
  LogOut,
  AlertTriangle,
  Car,
  DollarSign,
  Map,
  MapPin,
  Search,
  Activity,
  AlertOctagon,
  PieChart,
  UserCheck,
  FileBarChart,
  BarChart,
  FileSpreadsheet,
  CreditCardIcon as CardIcon,
  FileTextIcon as FileText2,
  TrendingUp,
  MessageSquare,
  PercentSquare,
  Smartphone,
  CheckCircle,
} from "lucide-react"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(menu)
    }
  }

  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="mr-4">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-600 rounded-full p-2 mr-2">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">MARICÁ</h1>
                <p className="text-sm text-gray-600">ROTATIVO</p>
              </div>
            </Link>
          </div>

          <nav className="flex space-x-1">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("cadastros")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <FileText className="w-4 h-4 mr-1" />
                Cadastros
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "cadastros" && (
                <div className="absolute left-0 z-10 w-64 mt-2 bg-white border rounded shadow-lg">
                  {/* Itens de cadastro... */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("operacional")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <Settings className="w-4 h-4 mr-1" />
                Operacional
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "operacional" && (
                <div className="absolute left-0 z-10 w-64 mt-2 bg-white border rounded shadow-lg">
                  {/* Itens operacionais... */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("fiscalizacao")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <BarChart2 className="w-4 h-4 mr-1" />
                Fiscalização
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "fiscalizacao" && (
                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                  {/* Itens de fiscalização... */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("tempo-real")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <Clock className="w-4 h-4 mr-1" />
                Tempo Real
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "tempo-real" && (
                <div className="absolute left-0 z-10 w-64 mt-2 bg-white border rounded shadow-lg">
                  {/* Itens de tempo real... */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("pdv")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                PDV
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "pdv" && (
                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                  {/* Itens de PDV... */}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("relatorios")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <BarChart2 className="w-4 h-4 mr-1" />
                Relatórios/Consultas
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "relatorios" && (
                <div className="absolute left-0 z-10 w-[800px] mt-2 bg-white border rounded shadow-lg grid grid-cols-3 gap-0">
                  {/* Coluna 1 */}
                  <div className="border-r">
                    <Link
                      href="/relatorios/arrecadacao-diaria-resumida"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Arrecadação Diária Resumida
                    </Link>
                    <Link
                      href="/relatorios/arrecadacao-por-operador"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Arrecadação por Operador
                    </Link>
                    <Link
                      href="/relatorios/consulta-maiores-devedores"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <AlertOctagon className="inline-block w-4 h-4 mr-2" />
                      Consulta Maiores Devedores
                    </Link>
                    <Link
                      href="/relatorios/estatisticas-irregularidades"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <BarChart className="inline-block w-4 h-4 mr-2" />
                      Estatísticas de Irregularidades
                    </Link>
                    <Link
                      href="/relatorios/faturamento-periodo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <FileSpreadsheet className="inline-block w-4 h-4 mr-2" />
                      Faturamento Período
                    </Link>
                    <Link
                      href="/relatorios/graficos-ai"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <PieChart className="inline-block w-4 h-4 mr-2" />
                      Gráficos AI
                    </Link>
                    <Link
                      href="/relatorios/indicativos-metas"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <TrendingUp className="inline-block w-4 h-4 mr-2" />
                      Indicativos das Metas
                    </Link>
                    <Link
                      href="/relatorios/movimentacao-veiculo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <Car className="inline-block w-4 h-4 mr-2" />
                      Movimentação Veículo
                    </Link>
                    <Link
                      href="/relatorios/notificacoes-pagas-ano"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <FileText2 className="inline-block w-4 h-4 mr-2" />
                      Relatório de Notificações Pagas por Ano
                    </Link>
                    <Link
                      href="/relatorios/eventos-operador"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <UserCheck className="inline-block w-4 h-4 mr-2" />
                      Relatório de Eventos Operador
                    </Link>
                    <Link
                      href="/relatorios/rendimento-geral"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <TrendingUp className="inline-block w-4 h-4 mr-2" />
                      Rendimento Geral
                    </Link>
                    <Link
                      href="/relatorios/tickets-detalhado"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <FileText className="inline-block w-4 h-4 mr-2" />
                      Tickets Detalhado
                    </Link>
                    <Link
                      href="/relatorios/uso-saldo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Uso de Saldo
                    </Link>
                    <Link
                      href="/relatorios/valores-tipo-pagamento"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Valores por Tipo de Pagamento
                    </Link>
                  </div>

                  {/* Coluna 2 */}
                  <div className="border-r">
                    <Link
                      href="/relatorios/arrecadacao-diaria-cx-operadores"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Arrecadação Diária(Cx Operadores)
                    </Link>
                    <Link
                      href="/relatorios/comparativo-rendimento-horario"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <BarChart className="inline-block w-4 h-4 mr-2" />
                      Comparativo Rendimento P/Horário
                    </Link>
                    <Link
                      href="/relatorios/consulta-notificacoes-ai"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <AlertTriangle className="inline-block w-4 h-4 mr-2" />
                      Consulta Notificações/AI
                    </Link>
                    <Link
                      href="/relatorios/extrato-veiculo-uso-saldo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <FileText className="inline-block w-4 h-4 mr-2" />
                      Extrato Veículo - Uso de Saldo
                    </Link>
                    <Link
                      href="/relatorios/faturamento-quadra-setor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <FileBarChart className="inline-block w-4 h-4 mr-2" />
                      Faturamento Por Quadra/Setor
                    </Link>
                    <Link
                      href="/relatorios/indicadores-produtividade"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Indicadores de Produtividade
                    </Link>
                    <Link
                      href="/relatorios/mensagens"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <MessageSquare className="inline-block w-4 h-4 mr-2" />
                      Mensagens
                    </Link>
                    <Link
                      href="/relatorios/movimentacoes-cartao"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <CardIcon className="inline-block w-4 h-4 mr-2" />
                      Movimentações de Cartão
                    </Link>
                    <Link
                      href="/relatorios/ocupacao-estacionamento"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <Map className="inline-block w-4 h-4 mr-2" />
                      Relatório de Ocupação Estacionamento
                    </Link>
                    <Link
                      href="/relatorios/relatorio-ponto"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <CheckCircle className="inline-block w-4 h-4 mr-2" />
                      Relatório Ponto
                    </Link>
                    <Link
                      href="/relatorios/reservas-vagas"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      Reservas de Vagas
                    </Link>
                    <Link
                      href="/relatorios/taxa-ocupacao-respeito"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <PercentSquare className="inline-block w-4 h-4 mr-2" />
                      Taxa de Ocupação/Respeito
                    </Link>
                    <Link
                      href="/relatorios/uso-app"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <Smartphone className="inline-block w-4 h-4 mr-2" />
                      Uso do APP
                    </Link>
                    <Link
                      href="/relatorios/verificacoes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Search className="inline-block w-4 h-4 mr-2" />
                      Verificações
                    </Link>
                  </div>

                  {/* Coluna 3 */}
                  <div>
                    <Link
                      href="/relatorios/arrecadacao-por-horario"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <Clock className="inline-block w-4 h-4 mr-2" />
                      Arrecadação por Horário
                    </Link>
                    <Link
                      href="/relatorios/consulta-clientes-veiculos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <Search className="inline-block w-4 h-4 mr-2" />
                      Consulta Clientes/Veículos
                    </Link>
                    <Link
                      href="/relatorios/creditos-estorno-gerados"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Créditos/Estorno Gerados
                    </Link>
                    <Link
                      href="/relatorios/faturamento-completo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <FileSpreadsheet className="inline-block w-4 h-4 mr-2" />
                      Faturamento - Completo
                    </Link>
                    <Link
                      href="/relatorios/faturamento-por-vaga"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      Faturamento por Vaga
                    </Link>
                    <Link
                      href="/relatorios/indicativo-placa-cidade-fora"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <FileBarChart className="inline-block w-4 h-4 mr-2" />
                      Indicativo Placa cidade x Placa de fora
                    </Link>
                    <Link
                      href="/relatorios/movimentacao-site-aplicativo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <Activity className="inline-block w-4 h-4 mr-2" />
                      Movimentação Site e Aplicativo
                    </Link>
                    <Link
                      href="/relatorios/contribuicoes-mumbuca-verde"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <FileText className="inline-block w-4 h-4 mr-2" />
                      Relatório de Contribuições - Mumbuca Verde
                    </Link>
                    <Link
                      href="/relatorios/acessos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <UserCheck className="inline-block w-4 h-4 mr-2" />
                      Relatório de acessos
                    </Link>
                    <Link
                      href="/relatorios/rendimentos-funcionarios"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50"
                    >
                      <FileBarChart className="inline-block w-4 h-4 mr-2" />
                      Relatório Rendimentos Funcionários
                    </Link>
                    <Link
                      href="/relatorios/sac-consulta"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <Search className="inline-block w-4 h-4 mr-2" />
                      SAC - Consulta
                    </Link>
                    <Link
                      href="/relatorios/transacoes-tef"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    >
                      <CardIcon className="inline-block w-4 h-4 mr-2" />
                      Transações TEF(C.cred/C.deb)
                    </Link>
                    <Link
                      href="/relatorios/valores-parquimetro"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FileSpreadsheet className="inline-block w-4 h-4 mr-2" />
                      Valores no Parquímetro
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("manutencao")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
              >
                <Tool className="w-4 h-4 mr-1" />
                Manutenção
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "manutencao" && (
                <div className="absolute left-0 z-10 w-48 mt-2 bg-white border rounded shadow-lg">
                  {/* Itens de manutenção... */}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100">
            <LogOut className="w-4 h-4 mr-1" />
            Sair
          </button>
        </div>
      </div>
    </header>
  )
}

