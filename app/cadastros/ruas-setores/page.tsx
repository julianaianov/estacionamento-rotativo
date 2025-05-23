"use client"

import Link from "next/link"
import { useState } from "react"
import { MapPin, Star, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"

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
  const [nomeRua, setNomeRua] = useState("")
  const [codigoDetran, setCodigoDetran] = useState("")
  const [descricaoArea, setDescricaoArea] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [zoom, setZoom] = useState("19")
  const [status, setStatus] = useState("Ativo")
  const [nomeQuadraSetor, setNomeQuadraSetor] = useState("")
  const [areaQuadraSetor, setAreaQuadraSetor] = useState("")
  const [possuiSensor, setPossuiSensor] = useState(false)

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

  const handleSalvarTodos = () => {
    console.log("Salvando todos os dados...")
    console.log("Rua:", { nomeRua, codigoDetran })
    console.log("Área:", { descricaoArea, latitude, longitude, zoom, status })
    console.log("Quadra/Setor:", { nomeQuadraSetor, area: areaQuadraSetor, possuiSensor })
    alert("Dados enviados com sucesso! (simulação)")
  }

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 rounded shadow mx-4 mt-4">
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
            <h2 className="text-lg font-semibold">Cadastrar Rua</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Nome:</label>
              <Input
                type="text"
                value={nomeRua}
                onChange={(e) => setNomeRua(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Código Detran:</label>
              <Input
                type="text"
                value={codigoDetran}
                onChange={(e) => setCodigoDetran(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium">Id</th>
                    <th className="px-4 py-2 text-left text-xs font-medium">Rua</th>
                  </tr>
                </thead>
                <tbody>
                  {ruas.map((rua) => (
                    <tr key={rua.id}>
                      <td className="px-4 py-2 text-sm">{rua.id}</td>
                      <td className="px-4 py-2 text-sm">{rua.rua}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cadastro Área */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Cadastro Área</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Descrição:</label>
              <Input
                type="text"
                value={descricaoArea}
                onChange={(e) => setDescricaoArea(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Latitude:</label>
                <Input
                  type="text"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Longitude:</label>
                <Input
                  type="text"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Ver Mapa</button>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Zoom:</label>
                <Input
                  type="text"
                  value={zoom}
                  onChange={(e) => setZoom(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-border rounded bg-white dark:bg-slate-800 dark:text-white"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium">Id</th>
                    <th className="px-4 py-2 text-left text-xs font-medium">Descrição</th>
                    <th className="px-4 py-2 text-left text-xs font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {areas.map((area) => (
                    <tr key={area.id}>
                      <td className="px-4 py-2 text-sm">{area.id}</td>
                      <td className="px-4 py-2 text-sm">{area.descricao}</td>
                      <td className="px-4 py-2 text-sm">{area.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cadastrar Quadra/Setor */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Cadastrar Quadra/Setor</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Nome:</label>
              <Input
                type="text"
                value={nomeQuadraSetor}
                onChange={(e) => setNomeQuadraSetor(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Área:</label>
              <select
                value={areaQuadraSetor}
                onChange={(e) => setAreaQuadraSetor(e.target.value)}
                className="w-full border border-border rounded bg-white dark:bg-slate-800 dark:text-white"
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
                className="h-4 w-4"
              />
              <label htmlFor="possuiSensor" className="ml-2 text-sm">
                Possui sensor
              </label>
            </div>

            <div className="mt-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium">ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium">Quadra/Setor</th>
                    <th className="px-4 py-2 text-left text-xs font-medium">Área</th>
                  </tr>
                </thead>
                <tbody>
                  {quadrasSetores.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-sm">{item.id}</td>
                      <td className="px-4 py-2 text-sm">{item.quadraSetor}</td>
                      <td className="px-4 py-2 text-sm">{item.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-6 mb-6">
        <button
          onClick={handleSalvarTodos}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded text-sm w-40"
        >
          Salvar
        </button>

        <button
          onClick={() => alert("Função de edição ainda não implementada")}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded text-sm w-40"
        >
          Editar
        </button>

        <Link
          href="/cadastros"
          className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white px-8 py-2 rounded text-sm font-medium inline-flex items-center justify-center w-40">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
      </div>

      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
}
