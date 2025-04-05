"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Chart from "chart.js/auto"

export default function Dashboard() {
  const tempoChart = useRef<HTMLCanvasElement | null>(null)
  const pagamentoChart = useRef<HTMLCanvasElement | null>(null)
  const horaChart = useRef<HTMLCanvasElement | null>(null)
  const diasChart = useRef<HTMLCanvasElement | null>(null)
  
  // Refs para armazenar as instâncias dos gráficos
  const tempoChartInstance = useRef<Chart | null>(null)
  const pagamentoChartInstance = useRef<Chart | null>(null)
  const horaChartInstance = useRef<Chart | null>(null)
  const diasChartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    // Função para destruir os gráficos existentes
    const destroyCharts = () => {
      if (tempoChartInstance.current) {
        tempoChartInstance.current.destroy()
      }
      if (pagamentoChartInstance.current) {
        pagamentoChartInstance.current.destroy()
      }
      if (horaChartInstance.current) {
        horaChartInstance.current.destroy()
      }
      if (diasChartInstance.current) {
        diasChartInstance.current.destroy()
      }
    }

    // Dados para o gráfico de Estacionamentos P/Tempo Adquirido
    if (tempoChart.current) {
      const ctx = tempoChart.current.getContext("2d")
      if (ctx) {
        tempoChartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["2H MARICÁ", "4H MARICÁ", "DIÁRIA", "PERÍODO 2H", "PERÍODO 4H"],
            datasets: [
              {
                data: [37.9, 20.1, 7.5, 34.5, 10],
                backgroundColor: [
                  "#3b82f6", // Azul
                  "#ef4444", // Vermelho
                  "#f59e0b", // Laranja
                  "#10b981", // Verde
                  "#8b5cf6", // Roxo
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "right",
              },
            },
          },
        })
      }
    }

    // Dados para o gráfico de Estacionamentos Por Forma de Pagto
    if (pagamentoChart.current) {
      const ctx = pagamentoChart.current.getContext("2d")
      if (ctx) {
        pagamentoChartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["C.DÉBITO", "USO DE SALDO", "C.LAPAZA", "PIX"],
            datasets: [
              {
                data: [19, 74.5, 3.5, 3],
                backgroundColor: [
                  "#3b82f6", // Azul
                  "#ef4444", // Vermelho
                  "#f59e0b", // Laranja
                  "#10b981", // Verde
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "right",
              },
            },
          },
        })
      }
    }

    // Dados para o gráfico de Registros Agrupados p/Hora
    if (horaChart.current) {
      const ctx = horaChart.current.getContext("2d")
      if (ctx) {
        horaChartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"],
            datasets: [
              {
                label: "Registros",
                data: [20, 150, 200, 150, 120, 100, 110, 90, 100, 80, 50],
                borderColor: "#ef4444",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                tension: 0.4,
              },
              {
                label: "Cancelamentos",
                data: [5, 10, 50, 30, 20, 15, 25, 20, 15, 10, 5],
                borderColor: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 250,
              },
            },
          },
        })
      }
    }

    // Dados para o gráfico de Estacionamentos Últimos Dias(Quantidade)
    if (diasChart.current) {
      const ctx = diasChart.current.getContext("2d")
      if (ctx) {
        diasChartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["01/04", "02/04", "03/04", "04/04", "05/04", "06/04", "07/04", "08/04", "09/04", "10/04"],
            datasets: [
              {
                label: "Total",
                data: [1200, 1100, 900, 1000, 1100, 1050, 950, 800, 1000, 1200],
                borderColor: "#ef4444",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                tension: 0.4,
              },
              {
                label: "Cancelados",
                data: [200, 250, 300, 280, 320, 300, 250, 200, 350, 400],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 1500,
              },
            },
          },
        })
      }
    }

    // Cleanup function
    return () => {
      destroyCharts()
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-blue-800 bg-blue-100 p-3 rounded">Dados de Hoje</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Estacionamentos P/Tempo Adquirido</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="w-3/5">
              <canvas ref={tempoChart}></canvas>
            </div>
            <div className="w-2/5 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span>2H MARICÁ</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span>4H MARICÁ</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span>DIÁRIA</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>PERÍODO 2H</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span>PERÍODO 4H</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estacionamentos Por Forma de Pagto</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="w-3/5">
              <canvas ref={pagamentoChart}></canvas>
            </div>
            <div className="w-2/5 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span>C.DÉBITO</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span>USO DE SALDO</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span>C.LAPAZA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>PIX</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Registros Agrupados p/Hora</CardTitle>
          </CardHeader>
          <CardContent>
            <canvas ref={horaChart} height="200"></canvas>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estacionamentos Últimos Dias(Quantidade)</CardTitle>
          </CardHeader>
          <CardContent>
            <canvas ref={diasChart} height="200"></canvas>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

