"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Star, ArrowLeft, Pencil, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Dispositivo {
  id: number
  descricao: string
  nroSerieIMEI: string
  senha: string
  nroTel: string
  deviceID: string
  status: string
}

export default function DispositivosPage() {
  const [dispositivos] = useState<Dispositivo[]>([
    {
      id: 1,
      descricao: "Dispositivo 1",
      nroSerieIMEI: "123456789",
      senha: "******",
      nroTel: "(11) 99999-9999",
      deviceID: "DEV001",
      status: "Ativo"
    },
    {
      id: 2,
      descricao: "Dispositivo 2",
      nroSerieIMEI: "987654321",
      senha: "******",
      nroTel: "(11) 88888-8888",
      deviceID: "DEV002",
      status: "Inativo"
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de dispositivos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <Link href="/cadastros/dispositivos/novo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar novo
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nro serie/IMEI</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Senha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nro. Tel.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dispositivos.map((dispositivo) => (
                  <tr key={dispositivo.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispositivo.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispositivo.descricao}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispositivo.nroSerieIMEI}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispositivo.senha}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispositivo.nroTel}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispositivo.deviceID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        dispositivo.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {dispositivo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Pencil className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
        <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
}