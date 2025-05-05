"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, UserCheck } from "lucide-react"
import Link from "next/link"

const tiposUsuario = [
  ":: SELECIONE ::",
  "ADM",
  "AGENTE DE TRANSITO",
  "CCo",
  "COMERCIAL",
  "FINANCEIRO",
  "FISCAL",
  "GERENTE",
  "LOJISTA/CONVENIADO",
  "OPERADOR/MONITOR",
  "PODER PUBLICO"
]

const menuItems = {
  cadastros: [
    { id: "usuarios", label: "Usuários" },
    { id: "clientes", label: "Clientes" },
    { id: "parquimetros", label: "Parquímetros" },
    { id: "ruas_setores", label: "Cadastro Ruas/Setores" },
    { id: "isentos_pos_pago", label: "Cadastro de Isentos/Pós-Pago" },
    { id: "feriados", label: "Cadastro de Feriados" },
    { id: "sac_motivos", label: "SAC - Cadastro de Motivos" },
    { id: "tabelas_valores", label: "Cadastro de Tabelas e Valores" },
    { id: "tipo_advertencias", label: "Cadastro de Tipo Advertências" },
    { id: "turnos", label: "Cadastro de Turnos" },
    { id: "manutencao_veiculos", label: "Manutenção Dados Veículo/Placa" },
    { id: "veiculos_marca_modelo", label: "Cadastro de Veículos(Marca/Modelo)" },
    { id: "impostos", label: "Impostos" },
    { id: "isento_vaga_setor", label: "Isento por Vaga/Setor" },
    { id: "rotas", label: "Rotas" },
    { id: "operacoes_parquimetro", label: "Operações de Parquímetro" },
    { id: "motivos_baixa_ai", label: "Motivos de baixa de AI" },
    { id: "dispositivos", label: "Dispositivos" }
  ],
  operacional: [
    { id: "quitacao_ai", label: "Quitação de AI/Notificação" },
    { id: "fechamento_diario", label: "Fechamento Diário" },
    { id: "inserir_resgatar_creditos", label: "Inserir/Resgatar Créditos/Manut.Cadastro" },
    { id: "fechamento_ponto", label: "Fechamento/Consulta de Ponto" },
    { id: "gerar_credito_estorno", label: "Gerar Crédito/Estorno" },
    { id: "lote_mumbuca", label: "Lote Mumbuca Verde" },
    { id: "reserva_vaga", label: "Reserva de Vaga" },
    { id: "meu_caixa", label: "Meu Caixa" }
  ],
  fiscalizacao: [
    { id: "fiscalizacao_rua", label: "Fiscalização de Rua" },
    { id: "gestao_ai", label: "Gestão de AI" },
    { id: "monitoramento", label: "Monitoramento" }
  ],
  tempoReal: [
    { id: "mapa_ocupacao", label: "Mapa de Ocupação de Vagas" },
    { id: "fiscalizacao_tempo_real", label: "Fiscalização" },
    { id: "parquimetro_tempo_real", label: "Parquímetro" }
  ],
  pdv: [
    { id: "vendas", label: "Vendas" },
    { id: "relatorio_vendas", label: "Relatório de Vendas" },
    { id: "estoque", label: "Estoque" }
  ],
  manutencao: [
    { id: "privilegios", label: "Privilégios" },
    { id: "alterar_senha_cliente", label: "Alterar Senha Acesso Cliente" },
    { id: "consulta_ai_estorno", label: "Consulta AI/Gerar Estorno" },
    { id: "consulta_estorno_ai", label: "Consulta Estorno AI/Quit.AI" },
    { id: "empresa", label: "Empresa" },
    { id: "gerar_vagas", label: "Gerar/Cadastrar Vagas" },
    { id: "layout_impressoes", label: "Layout impressões" },
    { id: "quitar_ai_saldo", label: "Quitar AI - Uso de Saldo" },
    { id: "transacoes_credito", label: "Transações Crédito/Débito" },
    { id: "alterar_senha", label: "Alterar minha senha" },
    { id: "consulta_estorno_creditos", label: "Consulta/Estorno de créditos" },
    { id: "alteracao_pagamento", label: "Alteração forma de pagamento" }
  ]
}

export default function PrivilegiosPage() {
  const [tipoUsuario, setTipoUsuario] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleBuscarDados = () => {
    if (tipoUsuario && tipoUsuario !== ":: SELECIONE ::") {
      setShowResults(true)
    }
  }

  const renderMenuSection = (title: string, items: { id: string; label: string }[]) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox id={item.id} />
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <UserCheck className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Privilégios de Acesso</h1>
          </div>
        </div>
      </div>

      {/* Gradient line
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div> */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo Usuário:
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                  value={tipoUsuario}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                >
                  {tiposUsuario.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleBuscarDados}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Buscar Dados
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione os menus que os usuários vinculados ao tipo de usuário podem acessar:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {renderMenuSection("Cadastros", menuItems.cadastros)}
                {renderMenuSection("Operacional", menuItems.operacional)}
                {renderMenuSection("Fiscalização", menuItems.fiscalizacao)}
                {renderMenuSection("Tempo Real", menuItems.tempoReal)}
                {renderMenuSection("PDV", menuItems.pdv)}
                {renderMenuSection("Manutenção", menuItems.manutencao)}
              </div>

              <div className="mt-6 flex justify-end space-x-2">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Salvar
                </Button>
                <Button variant="outline">
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back button at the bottom */}
        <div className="mt-8 flex justify-center">
          <Link href="/manutencao">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 