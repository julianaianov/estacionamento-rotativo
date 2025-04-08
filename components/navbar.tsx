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
        <div className="flex items-center justify-between w-full px-4">
          {/* Logo container */}
          <div className="relative" style={{ width: '150px', height: '70px' }}>
            <Link href="/" className="flex items-center">
              <div style={{ 
                width: '320px',
                marginTop: '-35px',
                marginLeft: '-35px'
              }}>
                <Image
                  src="/images/logo-marica-rota.png"
                  alt="Maricá Rotativo"
                  width={320}
                  height={130}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Menu de navegação */}
          <nav className={`${
            isMobileMenuOpen ? 'flex absolute top-full left-0 right-0 flex-col bg-[#0093FF] z-50 shadow-lg' : 'hidden'
          } lg:flex lg:relative lg:flex-row lg:items-center lg:space-x-1 lg:ml-4 lg:bg-transparent`}>
            <Link
              href="/"
              className="flex items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded"
              onClick={() => {
                setActiveDropdown(null)
                setIsMobileMenuOpen(false)
              }}
            >
              <Home className="w-4 h-4 mr-1" />
              <span className="whitespace-nowrap">Home</span>
            </Link>

            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown("cadastros")}
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
                aria-expanded={activeDropdown === "cadastros"}
                aria-haspopup="true"
              >
                <FileText className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">Cadastros</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "cadastros" && (
                <div 
                  className="absolute left-0 lg:left-auto z-10 w-64 mt-1 bg-white border rounded shadow-lg"
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
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
              >
                <BarChart2 className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">Fiscalização</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "fiscalizacao" && (
                <div className="absolute left-0 lg:left-auto z-10 w-48 mt-1 bg-white border rounded shadow-lg">
                  {/* Itens de fiscalização... */}
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
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
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">PDV</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "pdv" && (
                <div className="absolute left-0 lg:left-auto z-10 w-48 mt-1 bg-white border rounded shadow-lg">
                  {/* Itens de PDV... */}
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

            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown("manutencao")}
                className="flex items-center w-full lg:w-auto px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700"
              >
                <Tool className="w-4 h-4 mr-1" />
                <span className="whitespace-nowrap">Manutenção</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "manutencao" && (
                <div className="absolute left-0 lg:left-auto z-10 w-64 mt-1 bg-white border rounded shadow-lg">
                  <Link 
                    href="/manutencao/privilegios" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <UserCheck className="inline-block w-4 h-4 mr-2" />
                    Privilégios
                  </Link>
                  <Link 
                    href="/manutencao/alterar-senha-acesso-cliente" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <UserCircle className="inline-block w-4 h-4 mr-2" />
                    Alterar Senha Acesso Cliente
                  </Link>
                  <Link 
                    href="/manutencao/consulta-ai-gerar-estorno" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <AlertOctagon className="inline-block w-4 h-4 mr-2" />
                    Consulta AI/Gerar Estorno
                  </Link>
                  <Link 
                    href="/manutencao/consulta-estorno-ai-quit-ai" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Search className="inline-block w-4 h-4 mr-2" />
                    Consulta Estorno AI/Quit.AI
                  </Link>
                  <Link 
                    href="/manutencao/empresa" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Briefcase className="inline-block w-4 h-4 mr-2" />
                    Empresa
                  </Link>
                  <Link 
                    href="/manutencao/gerar-cadastrar-vagas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <MapPin className="inline-block w-4 h-4 mr-2" />
                    Gerar/Cadastrar Vagas
                  </Link>
                  <Link 
                    href="/manutencao/layout-impressoes" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <FileSpreadsheet className="inline-block w-4 h-4 mr-2" />
                    Layout impressões
                  </Link>
                  <Link 
                    href="/manutencao/quitar-ai-uso-saldo" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Activity className="inline-block w-4 h-4 mr-2" />
                    Quitar AI - Uso de Saldo
                  </Link>
                  <Link 
                    href="/manutencao/transacoes-credito-debito" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <CardIcon className="inline-block w-4 h-4 mr-2" />
                    Transações Crédito/Débito
                  </Link>
                  <Link 
                    href="/manutencao/alterar-minha-senha" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Tool className="inline-block w-4 h-4 mr-2" />
                    Alterar minha senha
                  </Link>
                  <Link 
                    href="/manutencao/consulta-estorno-creditos" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <MessageSquare className="inline-block w-4 h-4 mr-2" />
                    Consulta/Estorno de créditos
                  </Link>
                  <Link 
                    href="/manutencao/alteracao-forma-pagamento" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Smartphone className="inline-block w-4 h-4 mr-2" />
                    Alteração forma de pagamento
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Botão do menu mobile */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-blue-700 rounded"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Botão Sair */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center px-2 py-2 text-sm font-medium text-white rounded hover:bg-blue-700">
              <LogOut className="w-4 h-4 mr-1" />
              <span className="whitespace-nowrap">Sair</span>
            </button>
          </div>
        </div>
      </div>
      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      {/* Dados de Hoje section */}
      <div className="bg-gradient-to-r from-[#33ACFF] via-[#0093FF] to-[#0070CC] py-4">
        <h2 className="text-white text-xl font-semibold text-center">Dados de Hoje</h2>
      </div>
    </header>
  )
}

