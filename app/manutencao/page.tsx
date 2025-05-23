"use client"

import Link from "next/link"
import {
  UserCheck,
  UserCircle,
  AlertOctagon,
  Search,
  Briefcase,
  MapPin,
  FileSpreadsheet,
  Activity,
  CreditCard as CardIcon,
  Wrench,
  MessageSquare,
  Smartphone,
} from "lucide-react"

export default function ManutencaoPage() {
  const cards = [
    {
      title: "Privilégios",
      description: "Gerenciamento de privilégios de acesso",
      icon: UserCheck,
      href: "/manutencao/privilegios",
    },
    {
      title: "Alterar Senha Acesso Cliente",
      description: "Alteração de senha para acesso do cliente",
      icon: UserCircle,
      href: "/manutencao/alterar-senha-acesso-cliente",
    },
    {
      title: "Consulta AI/Gerar Estorno",
      description: "Consulta de AIs e geração de estornos",
      icon: AlertOctagon,
      href: "/manutencao/consultar-ai-gerar-estorno",
    },
    {
      title: "Consulta Estorno AI/Quit.AI",
      description: "Consulta de estornos e quitações de AI",
      icon: Search,
      href: "/manutencao/consulta-estorno-ai-quit-ai",
    },
    {
      title: "Empresa",
      description: "Gerenciamento de informações da empresa",
      icon: Briefcase,
      href: "/manutencao/empresa",
    },
    {
      title: "Gerar/Cadastrar Vagas",
      description: "Geração e cadastro de vagas de estacionamento",
      icon: MapPin,
      href: "/manutencao/gerar-cadastrar-vagas",
    },
    {
      title: "Layout impressões",
      description: "Configuração de layouts de impressão",
      icon: FileSpreadsheet,
      href: "/manutencao/layout-impressoes",
    },
    {
      title: "Quitar AI - Uso de Saldo",
      description: "Quitação de AI utilizando saldo",
      icon: Activity,
      href: "/manutencao/quitar-ai-uso-saldo",
    },
    {
      title: "Transações Crédito/Débito",
      description: "Gerenciamento de transações financeiras",
      icon: CardIcon,
      href: "/manutencao/transacoes-credito-debito",
    },
    {
      title: "Alterar minha senha",
      description: "Alteração de senha do usuário",
      icon: Wrench,
      href: "/manutencao/alterar-minha-senha",
    },
    {
      title: "Consulta/Estorno de créditos",
      description: "Consulta e estorno de créditos",
      icon: MessageSquare,
      href: "/manutencao/consulta-estorno-creditos",
    },
    {
      title: "Alteração forma de pagamento",
      description: "Modificação da forma de pagamento",
      icon: Smartphone,
      href: "/manutencao/alteracao-forma-pagamento",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manutenção</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <Link
              key={index}
              href={card.href}
              className="bg-white dark:bg-gray-950 rounded shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{card.title}</h3>
              </div>
              <p className="text-gray-600 text-sm flex-grow">{card.description}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Acessar →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 