import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ShoppingCart, CreditCard, Banknote, QrCode, Clock, Plus } from "lucide-react"

export default function PDVPage() {
  // Dados de exemplo para a tabela de produtos
  const produtos = [
    { id: 1, nome: "Estacionamento 2h", preco: "R$ 10,00" },
    { id: 2, nome: "Estacionamento 4h", preco: "R$ 18,00" },
    { id: 3, nome: "Diária", preco: "R$ 30,00" },
    { id: 4, nome: "Recarga de Créditos", preco: "R$ 50,00" },
    { id: 5, nome: "Cartão de Acesso", preco: "R$ 15,00" },
  ]

  // Dados de exemplo para a tabela de vendas recentes
  const vendasRecentes = [
    { id: 1, produto: "Estacionamento 2h", placa: "ABC1234", valor: "R$ 10,00", hora: "14:30", pagamento: "Cartão" },
    { id: 2, produto: "Recarga de Créditos", placa: "DEF5678", valor: "R$ 50,00", hora: "14:15", pagamento: "PIX" },
    { id: 3, produto: "Diária", placa: "GHI9012", valor: "R$ 30,00", hora: "13:45", pagamento: "Dinheiro" },
    { id: 4, produto: "Estacionamento 4h", placa: "JKL3456", valor: "R$ 18,00", hora: "13:20", pagamento: "Cartão" },
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Ponto de Venda (PDV)</h1>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-md shadow flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              <span className="font-mono text-lg">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nova Venda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Placa do Veículo</label>
                    <input
                      type="text"
                      placeholder="Digite a placa"
                      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Tipo de Serviço</label>
                    <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Selecione um serviço</option>
                      <option value="2h">Estacionamento 2h</option>
                      <option value="4h">Estacionamento 4h</option>
                      <option value="diaria">Diária</option>
                      <option value="recarga">Recarga de Créditos</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Subtotal:</span>
                    <span>R$ 10,00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Taxa:</span>
                    <span>R$ 0,00</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>R$ 10,00</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="flex items-center justify-center" variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Cartão
                  </Button>
                  <Button className="flex items-center justify-center" variant="outline">
                    <Banknote className="mr-2 h-4 w-4" />
                    Dinheiro
                  </Button>
                  <Button className="flex items-center justify-center" variant="outline">
                    <QrCode className="mr-2 h-4 w-4" />
                    PIX
                  </Button>
                  <Button className="flex items-center justify-center">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Finalizar Venda
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vendas Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Produto</TableHead>
                      <TableHead>Placa</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Hora</TableHead>
                      <TableHead>Pagamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vendasRecentes.map((venda) => (
                      <TableRow key={venda.id}>
                        <TableCell>{venda.id}</TableCell>
                        <TableCell>{venda.produto}</TableCell>
                        <TableCell>{venda.placa}</TableCell>
                        <TableCell>{venda.valor}</TableCell>
                        <TableCell>{venda.hora}</TableCell>
                        <TableCell>{venda.pagamento}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Produtos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {produtos.map((produto) => (
                    <div
                      key={produto.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <div>
                        <p className="font-medium">{produto.nome}</p>
                        <p className="text-sm text-gray-500">{produto.preco}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resumo do Dia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total de Vendas</p>
                    <p className="text-2xl font-bold text-blue-700">R$ 1.240,00</p>
                    <p className="text-sm text-gray-500">42 transações</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Cartão</p>
                      <p className="text-xl font-bold">R$ 780,00</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Dinheiro</p>
                      <p className="text-xl font-bold">R$ 260,00</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600">PIX</p>
                      <p className="text-xl font-bold">R$ 200,00</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Créditos</p>
                      <p className="text-xl font-bold">R$ 0,00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

