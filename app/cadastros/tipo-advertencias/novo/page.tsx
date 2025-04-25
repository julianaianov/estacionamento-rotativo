"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoTipoAdvertenciaPage() {
  const [codigo, setCodigo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [tipo, setTipo] = useState("AI")
  const [status, setStatus] = useState("Ativo")
  const [tempo, setTempo] = useState("")
  const [diasPagamento, setDiasPagamento] = useState("")
  const [valorBonus, setValorBonus] = useState("")
  const [diasRecBonus, setDiasRecBonus] = useState("")
  const [artigoAIT, setArtigoAIT] = useState("")
  const [mensagemImpressao, setMensagemImpressao] = useState("")
  
  // Valores para CARRO
  const [valores, setValores] = useState({
    aeroporto: "",
    bancarioComl: "",
    barrocoComl: "",
    mercadoProdutor: "",
    orlaBarra: "",
    orlaItaipuacu: "",
    residencial: "",
    residencialA: ""
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow mx-4 mt-4">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Cadastro de Tipo de Advertências</h1>
          </div>
          <button className="text-yellow-300 hover:text-yellow-100">
            <Star className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            {/* Primeira linha */}
            <div className="grid grid-cols-4 gap-6">
              <div>
                <Label htmlFor="codigo">Código</Label>
                <Input
                  id="codigo"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              <div className="col-span-3">
                <Label htmlFor="descricao">Descrição</Label>
                <Input
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </div>

            {/* Segunda linha */}
            <div className="grid grid-cols-4 gap-6">
              <div>
                <Label htmlFor="tipo">Tipo</Label>
                <Select value={tipo} onValueChange={setTipo}>
                  <SelectTrigger>
                    <SelectValue placeholder="AI" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AI">AI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ativo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tempo">Tempo</Label>
                <Input
                  id="tempo"
                  value={tempo}
                  onChange={(e) => setTempo(e.target.value)}
                />
              </div>
            </div>

            {/* Terceira linha */}
            <div className="grid grid-cols-4 gap-6">
              <div>
                <Label htmlFor="diasPagamento">Dias p/Pagamento</Label>
                <Input
                  id="diasPagamento"
                  value={diasPagamento}
                  onChange={(e) => setDiasPagamento(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="valorBonus">Valor R$ Bonus</Label>
                <Input
                  id="valorBonus"
                  value={valorBonus}
                  onChange={(e) => setValorBonus(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="diasRecBonus">Dias p/Rec.Bonus</Label>
                <Input
                  id="diasRecBonus"
                  value={diasRecBonus}
                  onChange={(e) => setDiasRecBonus(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="artigoAIT">Artigo AIT</Label>
                <Input
                  id="artigoAIT"
                  value={artigoAIT}
                  onChange={(e) => setArtigoAIT(e.target.value)}
                />
              </div>
            </div>

            {/* Mensagem Impressão */}
            <div>
              <Label htmlFor="mensagemImpressao">Mensagem Impressão</Label>
              <Textarea
                id="mensagemImpressao"
                value={mensagemImpressao}
                onChange={(e) => setMensagemImpressao(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            {/* Valores */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Valores</h2>
              <div className="space-y-4">
                <h3 className="font-medium">CARRO</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>R$ AEROPORTO</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.aeroporto}
                      onChange={(e) => setValores({...valores, aeroporto: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ BANCARIO/COML</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.bancarioComl}
                      onChange={(e) => setValores({...valores, bancarioComl: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ BARROCO/COML</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.barrocoComl}
                      onChange={(e) => setValores({...valores, barrocoComl: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ Mercado Produtor</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.mercadoProdutor}
                      onChange={(e) => setValores({...valores, mercadoProdutor: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ ORLA BARRA M</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.orlaBarra}
                      onChange={(e) => setValores({...valores, orlaBarra: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ ORLA ITAIPUACU</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.orlaItaipuacu}
                      onChange={(e) => setValores({...valores, orlaItaipuacu: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ RESIDENCIAL</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.residencial}
                      onChange={(e) => setValores({...valores, residencial: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>R$ RESIDENCIAL A</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={valores.residencialA}
                      onChange={(e) => setValores({...valores, residencialA: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="secondary">
                Novo
              </Button>
              <Link href="/cadastros/tipo-advertencias">
                <Button type="button" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Cancelar
                </Button>
              </Link>
              <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white">
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Back button and gradient line */}
      <div className="mt-6">
        <div className="flex justify-center mb-4">
          <Link href="/cadastros/tipo-advertencias">
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