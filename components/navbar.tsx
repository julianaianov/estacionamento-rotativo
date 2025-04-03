"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
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
  Home,
  Settings,
  ShoppingCart,
  PenToolIcon as Tool,
  ChevronDown,
  LogOut,
  Users,
  UserCircle,
  ParkingMeterIcon as Parking,
  RouteIcon as Road,
  Calendar,
  Info,
  Table,
  AlertTriangle,
  Watch,
  Ban,
  Route,
  Cog,
  ClipboardCheck,
  Tablet,
  AlertOctagon,
  BarChart,
  FileSpreadsheet,
  PieChart,
  TrendingUp,
  FileBarChart,
  UserCheck,
  Map,
  MapPin,
  Search,
  Activity,
  MessageSquare,
  CreditCardIcon as CardIcon,
  PercentSquare,
  Smartphone,
} from "lucide-react"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setActiveDropdown(null)
  }, [pathname])

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

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown("cadastros")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
                aria-expanded={activeDropdown === "cadastros"}
                aria-haspopup="true"
              >
                <FileText className="w-4 h-4 mr-1" />
                Cadastros
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "cadastros" && (
                <div 
                  className="absolute left-0 z-10 w-64 mt-2 bg-white border rounded shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="cadastros-menu"
                >
                  <Link href="/cadastros/usuarios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Users className="inline-block w-4 h-4 mr-2" />
                    Usuários
                  </Link>
                  <Link href="/cadastros/clientes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <UserCircle className="inline-block w-4 h-4 mr-2" />
                    Clientes
                  </Link>
                  <Link href="/cadastros/parquimetros" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Parking className="inline-block w-4 h-4 mr-2" />
                    Parquímetros
                  </Link>
                  <Link href="/cadastros/ruas-setores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Road className="inline-block w-4 h-4 mr-2" />
                    Ruas/Setores
                  </Link>
                  <Link href="/cadastros/isentos-pos-pago" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <CreditCard className="inline-block w-4 h-4 mr-2" />
                    Isentos/Pós-Pago
                  </Link>
                  <Link href="/cadastros/feriados" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    Feriados
                  </Link>
                  <Link href="/cadastros/sac-motivos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Info className="inline-block w-4 h-4 mr-2" />
                    SAC - Motivos
                  </Link>
                  <Link href="/cadastros/tabelas-valores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Table className="inline-block w-4 h-4 mr-2" />
                    Tabelas e Valores
                  </Link>
                  <Link href="/cadastros/tipo-advertencias" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <AlertTriangle className="inline-block w-4 h-4 mr-2" />
                    Tipo Advertências
                  </Link>
                  <Link href="/cadastros/turnos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Watch className="inline-block w-4 h-4 mr-2" />
                    Turnos
                  </Link>
                  <Link href="/cadastros/manutencao-veiculos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Car className="inline-block w-4 h-4 mr-2" />
                    Manutenção Veículo/Placa
                  </Link>
                  <Link href="/cadastros/veiculos-marca-modelo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Car className="inline-block w-4 h-4 mr-2" />
                    Veículos (Marca/Modelo)
                  </Link>
                  <Link href="/cadastros/impostos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <DollarSign className="inline-block w-4 h-4 mr-2" />
                    Impostos
                  </Link>
                  <Link href="/cadastros/isentos-vaga-setor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Ban className="inline-block w-4 h-4 mr-2" />
                    Isento por Vaga/Setor
                  </Link>
                  <Link href="/cadastros/rotas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Route className="inline-block w-4 h-4 mr-2" />
                    Rotas
                  </Link>
                  <Link href="/cadastros/operacoes-parquimetro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Cog className="inline-block w-4 h-4 mr-2" />
                    Operações de Parquímetro
                  </Link>
                  <Link href="/cadastros/motivos-baixa-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <ClipboardCheck className="inline-block w-4 h-4 mr-2" />
                    Motivos de baixa de AI
                  </Link>
                  <Link href="/cadastros/dispositivos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Tablet className="inline-block w-4 h-4 mr-2" />
                    Dispositivos
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown("operacional")}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded hover:bg-gray-100"
                aria-expanded={activeDropdown === "operacional"}
                aria-haspopup="true"
              >
                <Settings className="w-4 h-4 mr-1" />
                Operacional
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "operacional" && (
                <div 
                  className="absolute left-0 z-10 w-64 mt-2 bg-white border rounded shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="operacional-menu"
                >
                  <Link href="/operacional/quitacao-ai-notificacao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <CheckCircle className="inline-block w-4 h-4 mr-2" />
                    Quitação de AI/Notificação
                  </Link>
                  <Link href="/operacional/quitacao-ai-notificacao-pa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <CheckCircle className="inline-block w-4 h-4 mr-2" />
                    Quitação de AI/Notificação PA
                  </Link>
                  <Link href="/operacional/fechamento-diario" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <FileText className="inline-block w-4 h-4 mr-2" />
                    Fechamento Diário
                  </Link>
                  <Link href="/operacional/inserir-resgatar-creditos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50">
                    <CreditCard className="inline-block w-4 h-4 mr-2" />
                    Inserir/Resgatar Créditos/Manut.Cadastro
                  </Link>
                  <Link href="/operacional/sac-acompanhamento" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <BarChart2 className="inline-block w-4 h-4 mr-2" />
                    SAC - Acompanhamento
                  </Link>
                  <Link href="/operacional/gerar-link-quitacoes-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Link2 className="inline-block w-4 h-4 mr-2" />
                    Gerar Link Quitações AI
                  </Link>
                  <Link href="/operacional/fechamento-consulta-ponto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b bg-yellow-50">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    Fechamento/Consulta de Ponto
                  </Link>
                  <Link href="/operacional/meu-caixa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Briefcase className="inline-block w-4 h-4 mr-2" />
                    Meu Caixa
                  </Link>
                  <Link href="/operacional/reserva-vaga" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <ParkingCircle className="inline-block w-4 h-4 mr-2" />
                    Reserva de Vaga
                  </Link>
                  <Link href="/operacional/consulta-mensagens" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Mail className="inline-block w-4 h-4 mr-2" />
                    Consulta Mensagens
                  </Link>
                  <Link href="/operacional/importar-arquivos-veiculos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <Car className="inline-block w-4 h-4 mr-2" />
                    Importar Arquivos de Veículos DETRAN
                  </Link>
                  <Link href="/operacional/gerar-credito-estorno" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <DollarSign className="inline-block w-4 h-4 mr-2" />
                    Gerar Crédito/Estorno
                  </Link>
                  <Link href="/operacional/vincular-cpf-placa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                    <UserPlus className="inline-block w-4 h-4 mr-2" />
                    Vincular CPF/Placa
                  </Link>
                  <Link href="/operacional/lote-mumbuca-verde" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Leaf className="inline-block w-4 h-4 mr-2" />
                    Lote Mumbuca Verde
                  </Link>
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
                      <FileText className="inline-block w-4 h-4 mr-2" />
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

