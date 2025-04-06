"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
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
    <header className="relative">
      <div className="bg-[#0093FF] shadow">
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

            {/* Botão do menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-2 p-2 text-white hover:bg-blue-700 rounded"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Menu de navegação */}
            <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-full left-0 right-0 lg:top-auto flex-col lg:flex-row w-full lg:w-auto bg-[#0093FF] lg:bg-transparent z-50 lg:space-x-1`}>
              <Link
                href="/"
                className="flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded"
                onClick={() => {
                  setActiveDropdown(null)
                  setIsMobileMenuOpen(false)
                }}
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("cadastros")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
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
                    <Link
                      href="/cadastros/usuarios"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Usuários
                    </Link>
                    <Link 
                      href="/cadastros/clientes" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <UserCircle className="inline-block w-4 h-4 mr-2" />
                      Clientes
                    </Link>
                    <Link 
                      href="/cadastros/parquimetros" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Parking className="inline-block w-4 h-4 mr-2" />
                      Parquímetros
                    </Link>
                    <Link 
                      href="/cadastros/ruas-setores" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Road className="inline-block w-4 h-4 mr-2" />
                      Ruas/Setores
                    </Link>
                    <Link 
                      href="/cadastros/isentos-pos-pago" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <CreditCard className="inline-block w-4 h-4 mr-2" />
                      Isentos/Pós-Pago
                    </Link>
                    <Link 
                      href="/cadastros/feriados" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Calendar className="inline-block w-4 h-4 mr-2" />
                      Feriados
                    </Link>
                    <Link 
                      href="/cadastros/sac-motivos" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Info className="inline-block w-4 h-4 mr-2" />
                      SAC - Motivos
                    </Link>
                    <Link 
                      href="/cadastros/tabelas-valores" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Table className="inline-block w-4 h-4 mr-2" />
                      Tabelas e Valores
                    </Link>
                    <Link 
                      href="/cadastros/tipo-advertencias" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <AlertTriangle className="inline-block w-4 h-4 mr-2" />
                      Tipo Advertências
                    </Link>
                    <Link 
                      href="/cadastros/turnos" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Watch className="inline-block w-4 h-4 mr-2" />
                      Turnos
                    </Link>
                    <Link 
                      href="/cadastros/manutencao-veiculos" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Car className="inline-block w-4 h-4 mr-2" />
                      Manutenção Veículo/Placa
                    </Link>
                    <Link 
                      href="/cadastros/veiculos-marca-modelo" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Car className="inline-block w-4 h-4 mr-2" />
                      Veículos (Marca/Modelo)
                    </Link>
                    <Link 
                      href="/cadastros/impostos" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Impostos
                    </Link>
                    <Link 
                      href="/cadastros/isentos-vaga-setor" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Ban className="inline-block w-4 h-4 mr-2" />
                      Isento por Vaga/Setor
                    </Link>
                    <Link 
                      href="/cadastros/rotas" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Route className="inline-block w-4 h-4 mr-2" />
                      Rotas
                    </Link>
                    <Link 
                      href="/cadastros/operacoes-parquimetro" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Cog className="inline-block w-4 h-4 mr-2" />
                      Operações de Parquímetro
                    </Link>
                    <Link 
                      href="/cadastros/motivos-baixa-ai" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <ClipboardCheck className="inline-block w-4 h-4 mr-2" />
                      Motivos de baixa de AI
                    </Link>
                    <Link 
                      href="/cadastros/dispositivos" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Tablet className="inline-block w-4 h-4 mr-2" />
                      Dispositivos
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("operacional")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
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
                    <Link href="/operacional/fechamento-diario" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                      <FileText className="inline-block w-4 h-4 mr-2" />
                      Fechamento Diário
                    </Link>
                    <Link href="/operacional/inserir-resgatar-creditos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                      <CreditCard className="inline-block w-4 h-4 mr-2" />
                      Inserir/Resgatar Créditos/Manut.Cadastro
                    </Link>
                    <Link href="/operacional/fechamento-consulta-ponto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                      <Clock className="inline-block w-4 h-4 mr-2" />
                      Fechamento/Consulta de Ponto
                    </Link>
                    <Link href="/operacional/gerar-credito-estorno" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                      <DollarSign className="inline-block w-4 h-4 mr-2" />
                      Gerar Crédito/Estorno
                    </Link>
                    <Link href="/operacional/lote-mumbuca-verde" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                      <Leaf className="inline-block w-4 h-4 mr-2" />
                      Lote Mumbuca Verde
                    </Link>
                    <Link href="/operacional/reserva-vaga" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                      <ParkingCircle className="inline-block w-4 h-4 mr-2" />
                      Reserva de Vaga
                    </Link>
                    <Link href="/operacional/meu-caixa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Briefcase className="inline-block w-4 h-4 mr-2" />
                      Meu Caixa
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("fiscalizacao")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
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

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("tempo-real")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
                >
                  <Clock className="w-4 h-4 mr-1" />
                  Tempo Real
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === "tempo-real" && (
                  <div className="absolute left-0 z-10 w-64 mt-2 bg-white border rounded shadow-lg">
                    <Link 
                      href="/tempo-real/mapa-ocupacao-vagas" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Map className="inline-block w-4 h-4 mr-2" />
                      Mapa de Ocupação de Vagas
                    </Link>
                    <Link 
                      href="/tempo-real/fiscalizacao" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <BarChart2 className="inline-block w-4 h-4 mr-2" />
                      Fiscalização
                    </Link>
                    <Link 
                      href="/tempo-real/parquimetro" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Parking className="inline-block w-4 h-4 mr-2" />
                      Parquímetro
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("pdv")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
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

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("relatorios")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700 w-full lg:w-auto"
                >
                  <BarChart2 className="w-4 h-4 mr-1" />
                  Relatórios/Consultas
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === "relatorios" && (
                  <div 
                    className="fixed lg:absolute left-0 right-0 lg:left-auto z-50 w-full lg:w-[90vw] max-w-[1200px] mt-2 bg-white border rounded shadow-lg max-h-[80vh] overflow-y-auto"
                    style={{
                      transform: 'translateX(-50%)',
                      left: '50%',
                    }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                      {/* Coluna 1 */}
                      <div className="border-b sm:border-r">
                        <div className="p-2 bg-gray-50 font-medium text-gray-700 border-b">
                          Relatórios Financeiros
                        </div>
                        <Link
                          href="/relatorios/arrecadacao-diaria-resumida"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
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
                          href="/relatorios/faturamento-periodo"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <FileSpreadsheet className="inline-block w-4 h-4 mr-2" />
                          Faturamento Período
                        </Link>
                        <Link
                          href="/relatorios/faturamento-completo"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <FileSpreadsheet className="inline-block w-4 h-4 mr-2" />
                          Faturamento - Completo
                        </Link>
                        <Link
                          href="/relatorios/faturamento-quadra-setor"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <FileBarChart className="inline-block w-4 h-4 mr-2" />
                          Faturamento Por Quadra/Setor
                        </Link>
                        <Link
                          href="/relatorios/rendimento-geral"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <TrendingUp className="inline-block w-4 h-4 mr-2" />
                          Rendimento Geral
                        </Link>
                        <Link
                          href="/relatorios/uso-saldo"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <DollarSign className="inline-block w-4 h-4 mr-2" />
                          Uso de Saldo
                        </Link>
                      </div>

                      {/* Coluna 2 */}
                      <div className="border-b lg:border-r">
                        <div className="p-2 bg-gray-50 font-medium text-gray-700 border-b">
                          Relatórios Operacionais
                        </div>
                        <Link
                          href="/relatorios/consulta-maiores-devedores"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <AlertOctagon className="inline-block w-4 h-4 mr-2" />
                          Consulta Maiores Devedores
                        </Link>
                        <Link
                          href="/relatorios/estatisticas-irregularidades"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <BarChart className="inline-block w-4 h-4 mr-2" />
                          Estatísticas de Irregularidades
                        </Link>
                        <Link
                          href="/relatorios/movimentacao-veiculo"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <Car className="inline-block w-4 h-4 mr-2" />
                          Movimentação Veículo
                        </Link>
                        <Link
                          href="/relatorios/ocupacao-estacionamento"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <Map className="inline-block w-4 h-4 mr-2" />
                          Ocupação Estacionamento
                        </Link>
                        <Link
                          href="/relatorios/taxa-ocupacao-respeito"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <PercentSquare className="inline-block w-4 h-4 mr-2" />
                          Taxa de Ocupação/Respeito
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
                        <div className="p-2 bg-gray-50 font-medium text-gray-700 border-b">
                          Outros Relatórios
                        </div>
                        <Link
                          href="/relatorios/relatorio-ponto"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <CheckCircle className="inline-block w-4 h-4 mr-2" />
                          Relatório Ponto
                        </Link>
                        <Link
                          href="/relatorios/rendimentos-funcionarios"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <FileBarChart className="inline-block w-4 h-4 mr-2" />
                          Rendimentos Funcionários
                        </Link>
                        <Link
                          href="/relatorios/sac-consulta"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <Search className="inline-block w-4 h-4 mr-2" />
                          SAC - Consulta
                        </Link>
                        <Link
                          href="/relatorios/uso-app"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        >
                          <Smartphone className="inline-block w-4 h-4 mr-2" />
                          Uso do APP
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
                  </div>
                )}
              </div>

              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown("manutencao")}
                  className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
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
            <button className="flex items-center px-3 py-2 text-sm font-medium text-white rounded hover:bg-blue-700">
              <LogOut className="w-4 h-4 mr-1" />
              Sair
            </button>
          </div>
        </div>
      </div>
      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </header>
  )
}

