"use client"

import { useState, ChangeEvent } from "react"
import { Star, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function NovoUsuario() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: "",
    login: "",
    senha: "",
    confirmaSenha: "",
    fone: "",
    status: "Ativo",
    registrarOps: "Nao",
    registrarEventos: "Nao",
    tipoUsuario: "",
    troco: "",
    fiscalizacao: "Não",
    alertaParquimetro: "Não",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCancel = () => {
    router.push("/cadastros/usuarios")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.login)) {
      alert('Por favor, digite um e-mail válido no campo Login.')
      setLoading(false)
      return
    }

    // Validação de senha
    if (formData.senha.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.')
      setLoading(false)
      return
    }

    // Validação de nome
    if (!formData.nome) {
      alert('O campo Nome é obrigatório.')
      setLoading(false)
      return
    }

    // Ajuste os campos conforme o backend espera
    const payload = {
      name: formData.nome,
      email: formData.login,
      password: formData.senha,
      password_confirmation: formData.confirmaSenha,
      role: (formData.tipoUsuario || '').toLowerCase(),
      status: formData.status === "Ativo" ? 1 : 0,
    }

    try {
      const response = await fetch("http://localhost:8000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(payload)
      })
      if (response.ok) {
        const data = await response.json()
        alert(`Usuário cadastrado com sucesso! ID: ${data.user.id}`)
        router.push("/usuarios")
      } else {
        const data = await response.json()
        alert(data.message || "Erro ao cadastrar usuário")
      }
    } catch (error) {
      alert("Erro de conexão com o servidor")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">👤</span>
            <h1 className="text-xl font-semibold">Cadastro de Usuários</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
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
                required
              >
                <option value="">:: SELECIONE ::</option>
                <option value="admin">Administrador</option>
                <option value="operador">Operador</option>
                <option value="supervisor">Supervisor</option>
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
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              type="button"
            >
              Excluir Usuário
            </button>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={handleCancel}
                className="bg-[#F5A623] hover:bg-[#F5A623]/80 text-white px-6 py-1.5 rounded text-sm font-medium"
                type="button"
              >
                Listar
              </button>
              <button 
                className="bg-[#27AE60] hover:bg-[#27AE60]/80 text-white px-6 py-1.5 rounded text-sm font-medium"
                type="button"
              >
                Novo
              </button>
              <button 
                className="bg-[#2F80ED] hover:bg-[#2F80ED]/80 text-white px-6 py-1.5 rounded text-sm font-medium"
                type="submit"
                disabled={loading}
              >
                {loading ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <Link
          href="/cadastros/usuarios"
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