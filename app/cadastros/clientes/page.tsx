"use client"

import Link from "next/link"
import { useState } from "react"
import { Users, Star, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ClientesDashboard() {
  const router = useRouter()
  const [buscarPlaca, setBuscarPlaca] = useState("")
  const [buscarDoc, setBuscarDoc] = useState("")
  const [tipoDoc, setTipoDoc] = useState("CPF")
  const [addMascaraPlaca, setAddMascaraPlaca] = useState(false)

  const handleBuscar = () => {
    router.push("/cadastros/clientes/resultados")
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Cadastro de Cliente</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buscar placa */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar placa
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={buscarPlaca}
                  onChange={(e) => setBuscarPlaca(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                  placeholder="Digite a placa"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mascaraPlaca"
                    checked={addMascaraPlaca}
                    onChange={(e) => setAddMascaraPlaca(e.target.checked)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <label htmlFor="mascaraPlaca" className="ml-2 text-sm text-gray-700">
                    Add máscara placa
                  </label>
                </div>
              </div>
            </div>

            {/* Buscar CPF/CNPJ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar CPF/CNPJ
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={buscarDoc}
                  onChange={(e) => setBuscarDoc(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded"
                  placeholder="Digite o documento"
                />
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cpf"
                      name="tipoDoc"
                      value="CPF"
                      checked={tipoDoc === "CPF"}
                      onChange={(e) => setTipoDoc(e.target.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="cpf" className="ml-2 text-sm text-gray-700">
                      CPF
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cnpj"
                      name="tipoDoc"
                      value="CNPJ"
                      checked={tipoDoc === "CNPJ"}
                      onChange={(e) => setTipoDoc(e.target.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="cnpj" className="ml-2 text-sm text-gray-700">
                      CNPJ
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Link
              href="/cadastros/clientes/novo"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              Adicionar novo Cliente
            </Link>
            <button
              onClick={handleBuscar}
              className="bg-[#2F80ED] hover:bg-[#2F80ED]/80 text-white px-6 py-1.5 rounded text-sm font-medium"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* Tabela de resultados aqui quando houver busca */}
      
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