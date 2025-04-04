"use client"

import Link from "next/link"
import { useState } from "react"
import { MapPin, Star, ArrowLeft, Map } from "lucide-react"

interface Rua {
  id: number
  rua: string
}

interface Area {
  id: number
  descricao: string
  status: string
}

interface QuadraSetor {
  id: number
  quadraSetor: string
  area: string
}

export default function RuasSetoresDashboard() {
  // Estados para Cadastrar Rua
  const [nomeRua, setNomeRua] = useState("")
  const [codigoDetran, setCodigoDetran] = useState("")

  // Estados para Cadastro Área
  const [descricaoArea, setDescricaoArea] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [zoom, setZoom] = useState("19")
  const [status, setStatus] = useState("Ativo")

  // Estados para Cadastrar Quadra/Setor
  const [nomeQuadraSetor, setNomeQuadraSetor] = useState("")
  const [areaQuadraSetor, setAreaQuadraSetor] = useState("")
  const [possuiSensor, setPossuiSensor] = useState(false)

  // Dados de exemplo para as tabelas
  const [ruas] = useState<Rua[]>([
    { id: 1, rua: "RUA BARAO DO RIO BRANCO" },
    { id: 2, rua: "RUA BARAO DE INOA" },
    { id: 3, rua: "RUA ABREU RANGEL" },
    { id: 4, rua: "RUA CARLOS RANGEL" },
    { id: 5, rua: "RUA LUIS MANOEL" }
  ])

  const [areas] = useState<Area[]>([
    { id: 8, descricao: "AEROPORTO", status: "Inativo" },
    { id: 1, descricao: "BANCARIO/COML", status: "Ativo" },
    { id: 6, descricao: "BARROCO/COML", status: "Ativo" },
    { id: 10, descricao: "Mercado Produtor", status: "Ativo" }
  ])

  const [quadrasSetores] = useState<QuadraSetor[]>([
    { id: 1, quadraSetor: "R.GABRIEL FARIA", area: "BANCARIO/COML" },
    { id: 2, quadraSetor: "R.JUDEMIR RANGEL", area: "BANCARIO/COML" },
    { id: 3, quadraSetor: "R.RIBEIRO DE ALMEIDA", area: "BANCARIO/COML" }
  ])

  return (
    <div>
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Cadastro de Quadras e Ruas</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cadastrar Rua */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Cadastrar Rua</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome:</label>
              <input
                type="text"
                value={nomeRua}
                onChange={(e) => setNomeRua(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Código Detran:</label>
              <input
                type="text"
                value={codigoDetran}
                onChange={(e) => setCodigoDetran(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Salvar
            </button>

            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Id</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Rua</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ruas.map((rua) => (
                    <tr key={rua.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{rua.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{rua.rua}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cadastro Área */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Cadastro Área</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição:</label>
              <input
                type="text"
                value={descricaoArea}
                onChange={(e) => setDescricaoArea(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Latitude:</label>
                <input
                  type="text"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Longitude:</label>
                <input
                  type="text"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Ver Mapa</button>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zoom:</label>
                <input
                  type="text"
                  value={zoom}
                  onChange={(e) => setZoom(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Salvar
            </button>

            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Id</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Descrição</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {areas.map((area) => (
                    <tr key={area.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{area.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{area.descricao}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{area.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cadastrar Quadra/Setor */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Cadastrar Quadra/Setor</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome:</label>
              <input
                type="text"
                value={nomeQuadraSetor}
                onChange={(e) => setNomeQuadraSetor(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Área:</label>
              <select
                value={areaQuadraSetor}
                onChange={(e) => setAreaQuadraSetor(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded"
              >
                <option value="">:: ÁREA ::</option>
                {areas.map((area) => (
                  <option key={area.id} value={area.descricao}>
                    {area.descricao}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="possuiSensor"
                checked={possuiSensor}
                onChange={(e) => setPossuiSensor(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label htmlFor="possuiSensor" className="ml-2 text-sm text-gray-700">
                Possui sensor
              </label>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Salvar
            </button>

            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Quadra/Setor</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Área</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {quadrasSetores.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.quadraSetor}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.area}</td>
                    </tr>
                  ))}
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