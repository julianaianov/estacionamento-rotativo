"use client"

import Link from "next/link"
import { useState } from "react"
import { Users, Star, ArrowLeft } from "lucide-react"

interface Cliente {
  id: string
  nome: string
  apelido: string
  cpf: string
  placas: string
  email: string
}

export default function ResultadosClientes() {
  const [clientes] = useState<Cliente[]>([
    {
      id: "13",
      nome: "AGATHA MARINHO",
      apelido: "ABC1234",
      cpf: "116.911.027-41",
      placas: "ABC1234 AGT1705 DDD5555 FFF0000 KJK5G55",
      email: "estacionamentomarica"
    },
    {
      id: "2471",
      nome: "daniele almeida pessoa",
      apelido: "ABC1234",
      cpf: "133.417.177-73",
      placas: "ABC1234 KQB8653",
      email: "estacionamentomarica"
    },
    {
      id: "9291",
      nome: "Diogo Diniz",
      apelido: "ABC1234",
      cpf: "120.351.107-85",
      placas: "ABC1234 BFR1234 LLJ8G54 LPK1965 LPK1965",
      email: "estacionamentomarica"
    },
    {
      id: "14683",
      nome: "ronen de Souza",
      apelido: "ABC1234",
      cpf: "090.731.907-62",
      placas: "ABC1234",
      email: "estacionamentomarica"
    },
    {
      id: "15759",
      nome: "LUIZ EDUARDO MOTTA",
      apelido: "ABC1234",
      cpf: "016.877.168-38",
      placas: "ABC1234",
      email: "estacionamentomarica"
    },
    {
      id: "52087",
      nome: "Luiz Victor da Silva e Silva",
      apelido: "",
      cpf: "172.298.997-10",
      placas: "ABC1234 ABC1234 KYT4D96 RFJ4G21",
      email: "estacionamentomarica"
    },
    {
      id: "57223",
      nome: "Kaua",
      apelido: "",
      cpf: "156.979.987-32",
      placas: "ABC1234",
      email: "estacionamentomarica"
    }
  ])

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
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.placas}</td>
                    <td className="px-4 py-2 text-sm text-gray-900">{cliente.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
      
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
} 