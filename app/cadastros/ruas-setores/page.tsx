"use client"

import Link from "next/link"
import { useState } from "react"
import { MapPin, Star, ArrowLeft, Map, MoreVertical } from "lucide-react"

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
  const [ruas, setRuas] = useState<Rua[]>([
    { id: 1, rua: "RUA BARAO DO RIO BRANCO" },
    { id: 2, rua: "RUA BARAO DE INOA" },
    { id: 3, rua: "RUA ABREU RANGEL" },
    { id: 4, rua: "RUA CARLOS RANGEL" },
    { id: 5, rua: "RUA LUIS MANOEL" }
  ])

  const [areas, setAreas] = useState<Area[]>([
    { id: 8, descricao: "AEROPORTO", status: "Inativo" },
    { id: 1, descricao: "BANCARIO/COML", status: "Ativo" },
    { id: 6, descricao: "BARROCO/COML", status: "Ativo" },
    { id: 10, descricao: "Mercado Produtor", status: "Ativo" },
    { id: 11, descricao: "COMERCIAL", status: "Ativo" },
    { id: 12, descricao: "RESIDENCIAL", status: "Ativo" }
  ])

  const [quadrasSetores, setQuadrasSetores] = useState<QuadraSetor[]>([
    { id: 1, quadraSetor: "R.GABRIEL FARIA", area: "BANCARIO/COML" },
    { id: 2, quadraSetor: "R.JUDEMIR RANGEL", area: "BANCARIO/COML" },
    { id: 3, quadraSetor: "R.RIBEIRO DE ALMEIDA", area: "BANCARIO/COML" }
  ])

  const [showDropdownRua, setShowDropdownRua] = useState<number | null>(null);
  const [showDropdownArea, setShowDropdownArea] = useState<number | null>(null);
  const [showDropdownQuadraSetor, setShowDropdownQuadraSetor] = useState<number | null>(null);

  const toggleDropdownRua = (id: number) => {
    setShowDropdownRua(showDropdownRua === id ? null : id);
  };

  const toggleDropdownArea = (id: number) => {
    setShowDropdownArea(showDropdownArea === id ? null : id);
  };

  const toggleDropdownQuadraSetor = (id: number) => {
    setShowDropdownQuadraSetor(showDropdownQuadraSetor === id ? null : id);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/ruas-setores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nomeRua,
          codigo_detran: codigoDetran,
        }),
      });
      if (!response.ok) throw new Error("Erro ao cadastrar rua");
      const data = await response.json();
      setRuas([...ruas, { id: data.id, rua: data.nome }]);
      setNomeRua("");
      setCodigoDetran("");
      alert("Rua cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar rua");
    }
  };

  const handleDeleteRua = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/ruas-setores/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir rua");
      setRuas(ruas.filter(rua => rua.id !== id));
      alert("Rua excluída com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir rua");
    }
  };

  const handleEditRua = async (rua: Rua) => {
    const novoNome = prompt("Editar nome da rua:", rua.rua);
    if (novoNome === null) return;
    try {
      const response = await fetch(`http://localhost:8000/api/ruas-setores/${rua.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: novoNome }),
      });
      if (!response.ok) throw new Error("Erro ao editar rua");
      setRuas(ruas.map(r => r.id === rua.id ? { ...r, rua: novoNome } : r));
      alert("Rua editada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao editar rua");
    }
  };

  const handleDeleteArea = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/areas/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir área");
      setAreas(areas.filter(area => area.id !== id));
      alert("Área excluída com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir área");
    }
  };

  const handleEditArea = async (area: Area) => {
    const novaDescricao = prompt("Editar descrição da área:", area.descricao);
    if (novaDescricao === null) return;
    try {
      const response = await fetch(`http://localhost:8000/api/areas/${area.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descricao: novaDescricao }),
      });
      if (!response.ok) throw new Error("Erro ao editar área");
      setAreas(areas.map(a => a.id === area.id ? { ...a, descricao: novaDescricao } : a));
      alert("Área editada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao editar área");
    }
  };

  const handleDeleteQuadraSetor = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/api/quadras-setores/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir quadra/setor");
      setQuadrasSetores(quadrasSetores.filter(item => item.id !== id));
      alert("Quadra/setor excluído com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao excluir quadra/setor");
    }
  };

  const handleEditQuadraSetor = async (item: QuadraSetor) => {
    const novoNome = prompt("Editar nome da quadra/setor:", item.quadraSetor);
    if (novoNome === null) return;
    try {
      const response = await fetch(`http://localhost:8000/api/quadras-setores/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quadraSetor: novoNome }),
      });
      if (!response.ok) throw new Error("Erro ao editar quadra/setor");
      setQuadrasSetores(quadrasSetores.map(q => q.id === item.id ? { ...q, quadraSetor: novoNome } : q));
      alert("Quadra/setor editado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao editar quadra/setor");
    }
  };

  const handleSubmitQuadraSetor = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/quadras-setores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quadraSetor: nomeQuadraSetor,
          area: areaQuadraSetor,
          possuiSensor: possuiSensor,
        }),
      });
      if (!response.ok) throw new Error("Erro ao cadastrar quadra/setor");
      const data = await response.json();
      setQuadrasSetores([...quadrasSetores, { id: data.id, quadraSetor: data.quadraSetor, area: data.area }]);
      setNomeQuadraSetor("");
      setAreaQuadraSetor("");
      setPossuiSensor(false);
      alert("Quadra/Setor cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar quadra/setor");
    }
  };

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
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Salvar
            </button>

            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Id</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Rua</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ruas.map((rua) => (
                    <tr key={`rua-${rua.id}-${rua.rua}`}>
                      <td className="px-4 py-2 text-sm text-gray-900">{rua.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{rua.rua}</td>
                      <td className="px-4 py-2 text-sm text-gray-900 relative">
                        <button
                          onClick={() => toggleDropdownRua(rua.id)}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <MoreVertical size={20} />
                        </button>
                        {showDropdownRua === rua.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <button
                              onClick={() => handleEditRua(rua)}
                              className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDeleteRua(rua.id)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                              Excluir
                            </button>
                          </div>
                        )}
                      </td>
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
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {areas.map((area) => (
                    <tr key={area.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{area.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{area.descricao}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{area.status}</td>
                      <td className="px-4 py-2 text-sm text-gray-900 relative">
                        <button
                          onClick={() => toggleDropdownArea(area.id)}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <MoreVertical size={20} />
                        </button>
                        {showDropdownArea === area.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <button
                              onClick={() => handleEditArea(area)}
                              className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDeleteArea(area.id)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                              Excluir
                            </button>
                          </div>
                        )}
                      </td>
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
            <button
              onClick={handleSubmitQuadraSetor}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Salvar
            </button>

            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Quadra/Setor</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Área</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {quadrasSetores.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.id}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.quadraSetor}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.area}</td>
                      <td className="px-4 py-2 text-sm text-gray-900 relative">
                        <button
                          onClick={() => toggleDropdownQuadraSetor(item.id)}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <MoreVertical size={20} />
                        </button>
                        {showDropdownQuadraSetor === item.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <button
                              onClick={() => handleEditQuadraSetor(item)}
                              className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDeleteQuadraSetor(item.id)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                              Excluir
                            </button>
                          </div>
                        )}
                      </td>
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