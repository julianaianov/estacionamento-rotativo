"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Users, Star, ArrowLeft } from "lucide-react"

interface Cliente {
  id: string
  nome: string
  apelido?: string
  cpf?: string
  placas?: any[]
  email?: string
}

export default function ResultadosClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/clientes")
        if (!response.ok) throw new Error("Erro ao buscar clientes")
        const data = await response.json()
        setClientes(
          (data.data || data).map((cliente: any) => ({
            ...cliente,
            cpf: cliente.documento
          }))
        )
      } catch (err) {
        setError("Erro ao buscar clientes")
      } finally {
        setLoading(false)
      }
    }
    fetchClientes()
  }, [])

  return (
    <div>
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Resultados da Busca</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">Carregando clientes...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Id</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Nome</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Apelido</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">CPF</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Placas</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.id}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.nome}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.apelido}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.cpf}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{(cliente.placas || []).map((p: any) => p.placa).join(", ")}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <Link
          href="/cadastros/clientes"
          className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white px-6 py-1.5 rounded text-sm font-medium inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </Link>
      </div>
    </div>
  )
} 