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

  const handleBuscar = () => {
    // Implementar lógica de busca
    console.log("Buscando:", busca)
  }

  const handleSalvar = () => {
    // Implementar lógica de salvamento
    console.log("Salvando:", formData)
  }

  const handleNovo = () => {
    setFormData({
      codigo: "",
      descricao: "",
      marca: "",
      tipo: ""
    })
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Cadastro de Veículos(Marca/Modelo)</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulário de Cadastro */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Cadastrar Veículos</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Código Veículo:</label>
              <input
                type="text"
                value={formData.codigo}
                onChange={(e) => setFormData({...formData, codigo: e.target.value})}
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Ex: 6940"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição:</label>
              <input
                type="text"
                value={formData.descricao}
                onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marca:</label>
              <div className="flex gap-2">
                <select
                  value={formData.marca}
                  onChange={(e) => setFormData({...formData, marca: e.target.value})}
                  className="border border-gray-300 p-2 w-full rounded"
                >
                  <option value="">:: MARCA ::</option>
                  <option value="FIAT">FIAT</option>
                  <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                  <option value="CHEVROLET">CHEVROLET</option>
                  {/* Adicionar mais marcas conforme necessário */}
                </select>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  <Edit size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo Veículo:</label>
              <select
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                className="border border-gray-300 p-2 w-full rounded"
              >
                <option value="">:: TIPO VEÍCULO ::</option>
                <option value="CARRO">CARRO</option>
                <option value="MOTO">MOTO</option>
                <option value="CAMINHAO">CAMINHÃO</option>
                {/* Adicionar mais tipos conforme necessário */}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSalvar}
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded"
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

          {/* Área de Busca */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Busca:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="border border-gray-300 p-2 flex-1 rounded"
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

            {/* Área para resultados da busca */}
            <div className="mt-4 bg-gray-50 rounded-lg p-4 min-h-[300px]">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Código
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Descrição
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Marca
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Tipo
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Exemplo de dados - substituir por dados reais */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6940</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Gol</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">VOLKSWAGEN</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CARRO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <Link
          href="/"
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