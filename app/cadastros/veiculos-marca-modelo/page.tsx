"use client"

import Link from "next/link"
import { useState } from "react"
import { Car, Star, ArrowLeft, Edit } from "lucide-react"

interface VeiculoForm {
  codigo: string
  descricao: string
  marca: string
  tipo: string
}

export default function VeiculosMarcaModeloDashboard() {
  const [busca, setBusca] = useState("")
  const [formData, setFormData] = useState<VeiculoForm>({
    codigo: "",
    descricao: "",
    marca: "",
    tipo: ""
  })

  const handleBuscar = () => console.log("Buscando:", busca)
  const handleSalvar = () => console.log("Salvando:", formData)
  const handleNovo = () => setFormData({ codigo: "", descricao: "", marca: "", tipo: "" })

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="bg-card text-foreground border border-border rounded shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Cadastro de Veículos (Marca/Modelo)</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulário */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Cadastrar Veículos</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Código Veículo:</label>
              <input
                type="text"
                value={formData.codigo}
                onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
                className="w-full p-2 rounded border border-border bg-background text-foreground"
                placeholder="Ex: 6940"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Descrição:</label>
              <input
                type="text"
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                className="w-full p-2 rounded border border-border bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Marca:</label>
              <div className="flex gap-2">
                <select
                  value={formData.marca}
                  onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                  className="w-full p-2 rounded border border-border bg-background text-foreground"
                >
                  <option value="">:: MARCA ::</option>
                  <option value="FIAT">FIAT</option>
                  <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                  <option value="CHEVROLET">CHEVROLET</option>
                </select>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  <Edit size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tipo Veículo:</label>
              <select
                value={formData.tipo}
                onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                className="w-full p-2 rounded border border-border bg-background text-foreground"
              >
                <option value="">:: TIPO VEÍCULO ::</option>
                <option value="CARRO">CARRO</option>
                <option value="MOTO">MOTO</option>
                <option value="CAMINHAO">CAMINHÃO</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSalvar}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Salvar
              </button>
              <button
                onClick={handleNovo}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Novo
              </button>
            </div>
          </div>

          {/* Busca */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Busca:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="flex-1 p-2 rounded border border-border bg-background text-foreground"
                  placeholder="Digite para buscar..."
                />
                <button
                  onClick={handleBuscar}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Buscar
                </button>
              </div>
            </div>

            <div className="mt-4 bg-muted rounded-lg p-4 min-h-[300px] overflow-auto">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead>
                  <tr className="text-xs uppercase text-muted-foreground">
                    <th className="px-6 py-3 text-left">Código</th>
                    <th className="px-6 py-3 text-left">Descrição</th>
                    <th className="px-6 py-3 text-left">Marca</th>
                    <th className="px-6 py-3 text-left">Tipo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">6940</td>
                    <td className="px-6 py-4">Gol</td>
                    <td className="px-6 py-4">VOLKSWAGEN</td>
                    <td className="px-6 py-4">CARRO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Voltar */}
      <div className="flex justify-center mt-4 mb-4">
        <Link
          href="/cadastros"
          className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white px-6 py-1.5 rounded text-sm font-medium inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
      </div>

      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
}
