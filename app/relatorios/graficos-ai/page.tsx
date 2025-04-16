"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Star, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Importing charts dynamically to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export default function GraficosAIPage() {
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [area, setArea] = useState("TODAS")
  const [setor, setSetor] = useState("TODOS")
  const [mostrarResultados, setMostrarResultados] = useState(false)

  // Dados de exemplo para os gráficos
  const barChartData = {
    options: {
      chart: {
        type: "bar" as const,
        height: 350,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["01/04", "02/04", "03/04", "04/04", "07/04", "08/04", "09/04", "10/04", "11/04"],
      },
      yaxis: {
        title: {
          text: "Quantidade"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + " ocorrências"
          }
        }
      }
    },
    series: [
      {
        name: "VEÍCULO SEM TICKET DE ESTACIONAMENTO",
        data: [1400, 1000, 1100, 1400, 1200, 1100, 1200, 1000, 800]
      },
      {
        name: "TEMPO DE ESTACIONAMENTO VENCIDO",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "TEMPO MÁXIMO NA MESMA VAGA EXCEDIDO",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "PLACA ISENTA - OCUPAÇÃO DE VAGA ALÉM DO PERMITIDO",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  }

  const pieChartData = {
    options: {
      chart: {
        type: "pie" as const,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          }
        }
      },
      labels: ["VEÍCULO SEM TICKET DE ESTACIONAMENTO"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    },
    series: [100]
  }

  const totalizadores = {
    total: 9357,
    abertas: { quantidade: 11, valor: 36.50 },
    pendentes: { quantidade: 8329, valor: 20817.50 },
    baixadas: { quantidade: 12, valor: 0.00 },
    quitadas: { quantidade: 1005, valor: 2512.50 }
  }

  const notificacoesPagas = {
    dentroDaTolerancia: 6.4,
    foraDaTolerancia: 93.6
  }

  const estacionamentosBaixados = {
    sistemaNaoDeuBaixa: { quantidade: 10 },
    digitoErrado: { quantidade: 1 },
    maioresDevedores: { quantidade: 1 }
  }

  const handleBuscar = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <BarChart className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Gráficos AI</h1>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Filters Card */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <Label>Data inicial</Label>
                <Input
                  type="date"
                  value={dataInicial}
                  onChange={(e) => setDataInicial(e.target.value)}
                />
              </div>
              <div>
                <Label>Data final</Label>
                <Input
                  type="date"
                  value={dataFinal}
                  onChange={(e) => setDataFinal(e.target.value)}
                />
              </div>
              <div>
                <Label>Área</Label>
                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: TODAS ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODAS">:: TODAS ::</SelectItem>
                    <SelectItem value="CENTRO">CENTRO</SelectItem>
                    <SelectItem value="ORLA">ORLA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Setor</Label>
                <Select value={setor} onValueChange={setSetor}>
                  <SelectTrigger>
                    <SelectValue placeholder=":: TODOS ::" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">:: TODOS ::</SelectItem>
                    <SelectItem value="SETOR_1">SETOR 1</SelectItem>
                    <SelectItem value="SETOR_2">SETOR 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                onClick={handleBuscar}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Buscar Dados
              </Button>
            </div>
          </CardContent>
        </Card>

        {mostrarResultados && (
          <>
            {/* Tipos de Irregularidade - Gráfico de Barras */}
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Irregularidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <Chart
                    options={barChartData.options}
                    series={barChartData.series}
                    type="bar"
                    height="100%"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tipos de Irregularidade - Gráfico de Pizza */}
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Irregularidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <Chart
                    options={pieChartData.options}
                    series={pieChartData.series}
                    type="pie"
                    height="100%"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Totalizadores por Status */}
            <Card>
              <CardHeader>
                <CardTitle>Totalizadores por Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-lg font-semibold">Quantidade Total: {totalizadores.total} registros</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-emerald-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Abertas</h3>
                    <p>Quantidade: {totalizadores.abertas.quantidade}</p>
                    <p>Valor: R$ {totalizadores.abertas.valor.toFixed(2)}</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Pendentes</h3>
                    <p>Quantidade: {totalizadores.pendentes.quantidade}</p>
                    <p>Valor: R$ {totalizadores.pendentes.valor.toFixed(2)}</p>
                  </div>
                  <div className="bg-lime-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Baixadas</h3>
                    <p>Quantidade: {totalizadores.baixadas.quantidade}</p>
                    <p>Valor: R$ {totalizadores.baixadas.valor.toFixed(2)}</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Quitadas</h3>
                    <p>Quantidade: {totalizadores.quitadas.quantidade}</p>
                    <p>Valor: R$ {totalizadores.quitadas.valor.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notificações Pagas */}
            <Card>
              <CardHeader>
                <CardTitle>Notificações Pagas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <Chart
                    options={{
                      chart: {
                        type: "pie",
                        toolbar: {
                          show: true
                        }
                      },
                      labels: ["Pagas dentro da tolerância", "Pagas fora da tolerância"],
                      colors: ["#60A5FA", "#4B5563"]
                    }}
                    series={[notificacoesPagas.dentroDaTolerancia, notificacoesPagas.foraDaTolerancia]}
                    type="pie"
                    height="100%"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Estacionamentos Baixados */}
            <Card>
              <CardHeader>
                <CardTitle>Estacionamentos Baixados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-lg font-semibold">Quantidade Total: {totalizadores.baixadas.quantidade} registros</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">SISTEMA NÃO DEU BAIXA</h3>
                    <p>Quantidade: {estacionamentosBaixados.sistemaNaoDeuBaixa.quantidade}</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">DIGITO ERRADO</h3>
                    <p>Quantidade: {estacionamentosBaixados.digitoErrado.quantidade}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">MAIORES DEVEDORES</h3>
                    <p>Quantidade: {estacionamentosBaixados.maioresDevedores.quantidade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rendimento Geral */}
            <Card>
              <CardHeader>
                <CardTitle>Rendimento Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Nome</th>
                        <th className="px-4 py-2 text-center" colSpan={3}>Tickets</th>
                        <th className="px-4 py-2 text-center" colSpan={2}>Regularizações</th>
                        <th className="px-4 py-2 text-center" colSpan={4}>Recargas</th>
                        <th className="px-4 py-2 text-center" colSpan={2}>Cartões</th>
                        <th className="px-4 py-2 text-center">TOTAL</th>
                      </tr>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Qtde</th>
                        <th className="px-4 py-2">Reap.</th>
                        <th className="px-4 py-2">Valor</th>
                        <th className="px-4 py-2">Qtde</th>
                        <th className="px-4 py-2">Valor</th>
                        <th className="px-4 py-2">Qtde cartão</th>
                        <th className="px-4 py-2">Valor cartão</th>
                        <th className="px-4 py-2">Qtde saldo</th>
                        <th className="px-4 py-2">Valor saldo</th>
                        <th className="px-4 py-2">Qtde vendas</th>
                        <th className="px-4 py-2">Valor vendas</th>
                        <th className="px-4 py-2">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">AGENTE DE CAMPO</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-center">39</td>
                        <td className="px-4 py-2 text-right">102,50</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-right font-bold">102,50</td>
                      </tr>
                      <tr className="bg-gray-50 font-bold">
                        <td className="px-4 py-2">TOTAL GERAL</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-center">39</td>
                        <td className="px-4 py-2 text-right">102,50</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-center">0</td>
                        <td className="px-4 py-2 text-right">0,00</td>
                        <td className="px-4 py-2 text-right">102,50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Back button */}
        <div className="flex justify-center">
          <Link href="/relatorios">
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