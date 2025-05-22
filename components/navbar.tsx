"use client"

import Link from "next/link"
import Image from "next/image"
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
  Package,
  Grid,
  Trash2,
  Navigation,
  Menu,
  X,
  Image as ImageIcon
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
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const active = saved === 'dark' || (!saved && prefersDark)
    setIsDark(active)
    document.documentElement.classList.toggle('dark', active)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    setIsDark(!isDark)
  }

  return (
    <header className="relative">
      <div className="bg-[#0093FF] dark:bg-[#0f172a] shadow">

        <div className="flex items-center w-full px-2">
          {/* Logo container */}
          <div className="flex items-center justify-center h-[70px] w-[150px]">
            <Link href="/" className="block w-full">
              <Image
                src="/images/logo-marica-rota.png"
                alt="Maricá Rotativo"
                width={130}
                height={70}
                className="mx-auto h-auto max-h-[70px]"
                priority
              />
            </Link>
          </div>

          {/* Menu de navegação */}
          <nav className={`${
            isMobileMenuOpen 
              ? 'flex fixed top-[70px] left-0 right-0 flex-col bg-[#0093FF] z-50 shadow-lg py-2 overflow-y-auto max-h-[calc(100vh-70px)]' 
              : 'hidden'
          } lg:flex lg:relative lg:flex-row lg:items-center lg:space-x-0.5 lg:py-0 lg:bg-transparent lg:overflow-visible`}>
            <Link
              href="/"
              className="flex items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded whitespace-nowrap"
              onClick={() => {
                setActiveDropdown(null)
                setIsMobileMenuOpen(false)
              }}
            >
              <Home className="w-4 h-4 mr-1" />
              <span>Home</span>
            </Link>

            <Link
              href="/cadastros"
              className="flex items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded whitespace-nowrap"
              onClick={() => {
                setActiveDropdown(null)
                setIsMobileMenuOpen(false)
              }}
              >
                <FileText className="w-4 h-4 mr-1" />
              <span>Cadastros</span>
                  </Link>

            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown("operacional")}
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
                aria-expanded={activeDropdown === "operacional"}
                aria-haspopup="true"
              >
                <Settings className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">Operacional</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "operacional" && (
                <div 
                  className="absolute left-0 lg:left-auto z-10 w-64 mt-1 bg-white border rounded shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="operacional-menu"
                >
                  <Link href="/operacional/quitacao-ai-notificacao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <CheckCircle className="inline-block w-4 h-4 mr-2" />
                    Quitação de AI/Notificação
                  </Link>
                  <Link href="/operacional/fechamento-diario" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <FileText className="inline-block w-4 h-4 mr-2" />
                    Fechamento Diário
                  </Link>
                  <Link href="/operacional/inserir-resgatar-creditos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <CreditCard className="inline-block w-4 h-4 mr-2" />
                    Inserir/Resgatar Créditos/Manut.Cadastro
                  </Link>
                  <Link href="/operacional/fechamento-consulta-ponto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    Fechamento/Consulta de Ponto
                  </Link>
                  <Link href="/operacional/gerar-credito-estorno" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <DollarSign className="inline-block w-4 h-4 mr-2" />
                    Gerar Crédito/Estorno
                  </Link>
                  <Link href="/operacional/lote-mumbuca-verde" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <Leaf className="inline-block w-4 h-4 mr-2" />
                    Lote Mumbuca Verde
                  </Link>
                  <Link href="/operacional/reserva-vagas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b">
                    <ParkingCircle className="inline-block w-4 h-4 mr-2" />
                    Reserva de Vagas
                  </Link>
                  <Link href="/operacional/meu-caixa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950">
                    <Briefcase className="inline-block w-4 h-4 mr-2" />
                    Meu Caixa
                  </Link>
                </div>
              )}
            </div>

            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown("fiscalizacao")}
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
              >
                <BarChart2 className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">Fiscalização</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "fiscalizacao" && (
                <div className="absolute left-0 lg:left-auto z-10 w-64 mt-1 bg-white border rounded shadow-lg">
                  <Link 
                    href="/fiscalizacao/cadastro-veiculos" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Car className="inline-block w-4 h-4 mr-2" />
                    Cadastro de Veículos
                  </Link>
                  <Link 
                    href="/fiscalizacao/cadastro-quadras-exclusoes" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Grid className="inline-block w-4 h-4 mr-2" />
                    Cadastro de Quadras/Exclusões
                  </Link>
                  <Link 
                    href="/fiscalizacao/motivos-remocao" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Trash2 className="inline-block w-4 h-4 mr-2" />
                    Motivos de Remoção
                  </Link>
                  <Link 
                    href="/fiscalizacao/consulta-placa" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Search className="inline-block w-4 h-4 mr-2" />
                    Consulta por Placa
                  </Link>
                  <Link 
                    href="/fiscalizacao/mapa-monitoramento" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Map className="inline-block w-4 h-4 mr-2" />
                    Mapa monitoramento
                  </Link>
                  <Link 
                    href="/fiscalizacao/analisar-imagens" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <ImageIcon className="inline-block w-4 h-4 mr-2" />
                    Analisar imagens
                  </Link>
                  <Link 
                    href="/fiscalizacao/mapa-deslocamento-veiculo" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Navigation className="inline-block w-4 h-4 mr-2" />
                    Mapa Deslocamento Veículo
                  </Link>
                  <Link 
                    href="/fiscalizacao/relatorio-estatisticas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <BarChart2 className="inline-block w-4 h-4 mr-2" />
                    Relatório de Estatísticas
                  </Link>
                </div>
              )}
            </div>

            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown("tempo-real")}
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
              >
                <Clock className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">Tempo Real</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "tempo-real" && (
                <div className="absolute left-0 lg:left-auto z-10 w-64 mt-1 bg-white border rounded shadow-lg">
                  <Link 
                    href="/tempo-real/mapa-ocupacao-vagas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Map className="inline-block w-4 h-4 mr-2" />
                    Mapa Ocupação Vagas
                  </Link>
                  <Link 
                    href="/tempo-real/mapa-ocupacao-vagas-gerente" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <MapPin className="inline-block w-4 h-4 mr-2" />
                    Mapa Ocupação Vagas - Gerente
                  </Link>
                  <Link 
                    href="/tempo-real/consulta-quadra-setor" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Search className="inline-block w-4 h-4 mr-2" />
                    Consulta Por Quadra/Setor
                  </Link>
                  <Link 
                    href="/tempo-real/mapa-movimentacao-operadores" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Route className="inline-block w-4 h-4 mr-2" />
                    Mapa Movimentação Operadores
                  </Link>
                  <Link 
                    href="/tempo-real/mapa-incidencia-estacionamento" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <AlertTriangle className="inline-block w-4 h-4 mr-2" />
                    Mapa Incidência Estacionamento(Calor)
                  </Link>
                  <Link 
                    href="/tempo-real/mapa-exibicao-vagas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <ParkingCircle className="inline-block w-4 h-4 mr-2" />
                    Mapa de Exibição de Vagas Cadastradas
                  </Link>
                </div>
              )}
            </div>

            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown("pdv")}
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">PDV</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "pdv" && (
                <div className="absolute left-0 lg:left-auto z-10 w-64 mt-1 bg-white border rounded shadow-lg">
                  <Link 
                    href="/pdv/dashboard" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <ShoppingCart className="inline-block w-4 h-4 mr-2" />
                    PDV Dashboard
                  </Link>
                  <Link 
                    href="/pdv/cadastro" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <UserPlus className="inline-block w-4 h-4 mr-2" />
                    Cadastro de PDV
                  </Link>
                  <Link 
                    href="/pdv/relatorio-movimentacoes" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Activity className="inline-block w-4 h-4 mr-2" />
                    Relatório de Movimentações
                  </Link>
                  <Link 
                    href="/pdv/relatorio-vendas-resumido" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <FileBarChart className="inline-block w-4 h-4 mr-2" />
                    Relatório de Vendas Resumido
                  </Link>
                  <Link 
                    href="/pdv/relatorio-pagamentos" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <CreditCard className="inline-block w-4 h-4 mr-2" />
                    Relatório de Pagamentos
                  </Link>
                  <Link 
                    href="/pdv/relatorio-fechamentos" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <FileText className="inline-block w-4 h-4 mr-2" />
                    Relatório de Fechamentos
                  </Link>
                  <Link 
                    href="/pdv/relatorio-faturamento-periodo" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <DollarSign className="inline-block w-4 h-4 mr-2" />
                    Relatório Faturamento Período
                  </Link>
                  <Link 
                    href="/pdv/indicador-produtividade" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-950"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <TrendingUp className="inline-block w-4 h-4 mr-2" />
                    Indicador de Produtividade
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/relatorios"
              className="flex items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded"
              onClick={() => {
                setActiveDropdown(null)
                setIsMobileMenuOpen(false)
              }}
            >
              <BarChart2 className="w-4 h-4 mr-1" />
              <span className="whitespace-nowrap">Relatórios/Consultas</span>
            </Link>

            <Link
              href="/manutencao"
              className="flex items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded whitespace-nowrap"
              onClick={() => {
                setActiveDropdown(null)
                setIsMobileMenuOpen(false)
              }}
            >
              <Tool className="w-4 h-4 mr-1" />
              <span>Manutenção</span>
            </Link>
          </nav>

          {/* Container para botões (Sair e Menu Mobile) */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={toggleTheme}
              className="hidden lg:flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded whitespace-nowrap"
            >
              {isDark ? '☀️ Modo Claro' : '🌙 Modo Noturno'}
            </button>

            <button 
              onClick={() => router.push('/logout')}
              className="flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded whitespace-nowrap"
            >
              <LogOut className="w-4 h-4 mr-1" />
              <span>Sair</span>
            </button>

            {/* Botão do menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-blue-700 rounded"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

    {/* Barra fixa em todas as páginas */}
    <div className="h-[52px] flex items-center justify-center bg-gradient-to-r from-[#33ACFF] via-[#0093FF] to-[#0070CC] dark:bg-[#0f172a]">
      {pathname === "/" && (
        <h2 className="text-white text-xl font-semibold text-center">Dados de Hoje</h2>
      )}
    </div>




    </header>
  )
}

