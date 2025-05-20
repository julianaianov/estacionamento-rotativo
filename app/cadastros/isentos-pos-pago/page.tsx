"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { CreditCard, Star, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchResult {
  placa: string
  status: string
  hasResult: boolean
}

export default function IsentosPosPageDashboard() {
  const [placa, setPlaca] = useState("")
  const [totalIsentos, setTotalIsentos] = useState(832)
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null)
  const [showIsentos, setShowIsentos] = useState(false)
  const [isentos, setIsentos] = useState<any[]>([])

  useEffect(() => {
    fetchTotalIsentos();
  }, []);

  async function fetchTotalIsentos() {
    const response = await fetch("http://localhost:8000/api/isentos/total");
    if (response.ok) {
      const data = await response.json();
      setTotalIsentos(data.total);
    }
  }

  const handleBuscarDados = () => {
    // Simulando busca no banco de dados
    if (placa) {
      setSearchResult({
        placa: placa,
        status: "CLIENTE NORMAL PRE-PAGO",
        hasResult: false
      })
    }
  }

  // Função para buscar cliente pela placa
  async function buscarClientePorPlaca(placa: string) {
    const response = await fetch(`http://localhost:8000/api/clientes?placa=${placa}`);
    if (!response.ok) throw new Error("Cliente não encontrado");
    return await response.json();
  }

  // Função para cadastrar como isento
  async function cadastrarComoIsento(placa: string) {
    const motivo = prompt("Digite o motivo da isenção:");
    if (!motivo) {
      alert("O motivo da isenção é obrigatório!");
      return;
    }
    try {
      const cliente = await buscarClientePorPlaca(placa);
      const response = await fetch("http://localhost:8000/api/isentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cliente_id: cliente.id, motivo }),
      });
      if (!response.ok) throw new Error("Erro ao cadastrar como isento");
      alert("Cliente cadastrado como isento!");
      setSearchResult({ ...searchResult!, status: "ISENTO", hasResult: true });
      fetchTotalIsentos();
    } catch (error: any) {
      alert(error.message);
    }
  }

  // Função para cadastrar como pós-pago
  async function cadastrarComoPosPago(placa: string) {
    try {
      const cliente = await buscarClientePorPlaca(placa);
      const response = await fetch("http://localhost:8000/api/pos-pagos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cliente_id: cliente.id }),
      });
      if (!response.ok) throw new Error("Erro ao cadastrar como pós-pago");
      alert("Cliente cadastrado como pós-pago!");
      setSearchResult({ ...searchResult!, status: "PÓS-PAGO", hasResult: true });
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function fetchIsentos() {
    const response = await fetch("http://localhost:8000/api/isentos");
    if (response.ok) {
      const data = await response.json();
      setIsentos(data);
    }
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Cadastro de Isentos</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Formulário de Busca */}
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Placa:</label>
              <input
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                className="border border-gray-300 p-2 w-full rounded"
                placeholder="Digite a placa do veículo"
              />
            </div>
            <button
              onClick={handleBuscarDados}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded"
            >
              Buscar Dados
            </button>
          </div>

          {/* Resultados da Busca */}
          {searchResult && (
            <div className="mt-8 max-w-3xl">
              <div className="mb-4">
                {!searchResult.hasResult ? (
                  <p className="text-gray-700">Nenhum registro isento ou pós-pago para a placa:</p>
                ) : null}
              </div>

              <div className="mb-6">
                <p className="text-red-500 font-medium">
                  Atual: {searchResult.status}
                </p>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Placa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {searchResult.placa}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex gap-4">
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => cadastrarComoIsento(searchResult.placa)}
                          >
                            Cadastrar como Isento
                          </button>
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => cadastrarComoPosPago(searchResult.placa)}
                          >
                            Cadastrar como pós pago
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Card com Total de Isentos */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg max-w-md">
            <h2 className="text-center text-lg font-semibold text-gray-800">TOTAL DE ISENTOS</h2>
            <p className="text-center text-3xl font-bold text-gray-900 mt-2">{totalIsentos}</p>
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
            onClick={() => {
              setShowIsentos(!showIsentos);
              if (!showIsentos) fetchIsentos();
            }}
          >
            Isentos
          </button>
          {showIsentos && (
            <div className="mt-4 bg-white border rounded-lg p-4">
              <h3 className="font-bold mb-2">Lista de Clientes Isentos</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nome</th>
                    <th className="px-4 py-2">Documento</th>
                    <th className="px-4 py-2">Placas</th>
                    <th className="px-4 py-2">Motivo</th>
                  </tr>
                </thead>
                <tbody>
                  {isentos.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2">{item.cliente?.nome}</td>
                      <td className="px-4 py-2">{item.cliente?.documento}</td>
                      <td className="px-4 py-2">{(item.cliente?.placas || []).map((p: any) => p.placa).join(", ")}</td>
                      <td className="px-4 py-2">{item.motivo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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