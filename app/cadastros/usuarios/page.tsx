"use client"

import { useState, ChangeEvent } from "react"
import { Star } from "lucide-react"

export default function CadastroUsuarios() {
  const [formData, setFormData] = useState({
    codigo: "471",
    nome: "",
    login: "Diogo",
    senha: "••••••••",
    confirmaSenha: "••••••••",
    fone: "",
    status: "Ativo",
    registrarOps: "Nao",
    registrarEventos: "Nao",
    tipoUsuario: "",
    troco: "",
    fiscalizacao: "Não",
    alertaParquimetro: "Não",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">👤</span>
          <h1 className="text-xl font-semibold">Cadastro de Usuários</h1>
        </div>
        <button className="text-yellow-300 hover:text-yellow-100">
          <Star size={24} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <label htmlFor="codigo" className="block mb-1 font-medium">
            Código Usuário
          </label>
          <input
            id="codigo"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-24 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nome" className="block mb-1 font-medium">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="login" className="block mb-1 font-medium">
              Login
            </label>
            <input
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded bg-blue-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="senha" className="block mb-1 font-medium">
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={formData.senha}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded bg-blue-50"
            />
          </div>

          <div>
            <label htmlFor="confirmaSenha" className="block mb-1 font-medium">
              Confirma Senha
            </label>
            <input
              id="confirmaSenha"
              name="confirmaSenha"
              type="password"
              value={formData.confirmaSenha}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="fone" className="block mb-1 font-medium">
              Fone
            </label>
            <input
              id="fone"
              name="fone"
              value={formData.fone}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label htmlFor="status" className="block mb-1 font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>

          <div>
            <label htmlFor="registrarOps" className="block mb-1 font-medium">
              RegistrarOps
            </label>
            <select
              id="registrarOps"
              name="registrarOps"
              value={formData.registrarOps}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Sim">Sim</option>
              <option value="Nao">Nao</option>
            </select>
          </div>

          <div>
            <label htmlFor="registrarEventos" className="block mb-1 font-medium">
              RegistrarEventos
            </label>
            <select
              id="registrarEventos"
              name="registrarEventos"
              value={formData.registrarEventos}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Sim">Sim</option>
              <option value="Nao">Nao</option>
            </select>
          </div>

          <div>
            <label htmlFor="tipoUsuario" className="block mb-1 font-medium">
              TipoUsuario
            </label>
            <select
              id="tipoUsuario"
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="">:: SELECIONE ::</option>
              <option value="Administrador">Administrador</option>
              <option value="Operador">Operador</option>
              <option value="Fiscal">Fiscal</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="troco" className="block mb-1 font-medium">
              Troco
            </label>
            <input
              id="troco"
              name="troco"
              value={formData.troco}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="fiscalizacao" className="block mb-1 font-medium">
              Fiscalização
            </label>
            <select
              id="fiscalizacao"
              name="fiscalizacao"
              value={formData.fiscalizacao}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>

          <div>
            <label htmlFor="alertaParquimetro" className="block mb-1 font-medium">
              Alerta Parquímetro
            </label>
            <select
              id="alertaParquimetro"
              name="alertaParquimetro"
              value={formData.alertaParquimetro}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Excluir Usuário</button>
          <div className="flex flex-wrap gap-2">
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded">Listar</button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Novo</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

