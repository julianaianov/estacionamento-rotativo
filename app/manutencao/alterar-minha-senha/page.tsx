"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AlterarSenhaPage() {
  const [senhaAtual, setSenhaAtual] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de alteração de senha
    console.log("Alterando senha:", { senhaAtual, novaSenha, confirmarSenha })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8">
      {/* Header */}
      <div className="bg-white shadow dark:bg-gray-900">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <Lock className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Alterar minha Senha</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Dados da Senha</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="senhaAtual">
                    Senha atual <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="senhaAtual"
                    type="password"
                    value={senhaAtual}
                    onChange={(e) => setSenhaAtual(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="novaSenha">
                    Nova senha <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="novaSenha"
                    type="password"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha">
                    Repita a nova senha <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="confirmarSenha"
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Atualizar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Back button */}
        <div className="flex justify-center">
          <Link href="/manutencao">
            <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        {/* Gradient line */}
        <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      </div>
    </div>
  )
} 