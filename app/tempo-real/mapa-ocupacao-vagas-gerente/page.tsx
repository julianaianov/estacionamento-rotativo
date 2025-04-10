"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, MessageSquare, AlertTriangle, Car, X, Battery, Filter } from 'lucide-react'

// Importing map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function MapaOcupacaoVagasGerente() {
  const [selectedTab, setSelectedTab] = useState<string>('veiculos')
  const [showSidebar, setShowSidebar] = useState(true)
  const [showChat, setShowChat] = useState(false)
  const [showFilters, setShowFilters] = useState(true)

  // Estado dos filtros
  const [filters, setFilters] = useState({
    area: ':: todas ::',
    quadraSetor: ':: todas ::',
    operadoresFiscais: ':: TODOS ::',
    box: '',
    ticketPago: true,
    pagoPendenteSaldo: true,
    pagoEmTerminal: true,
    tolerancia: true,
    altNotificacao: true,
    denunciado: true,
    contumaz: true,
    tempoEsgotado: true,
    tempoEsgotSaldo: true,
    tempoEsgotIsento: true,
    tempoEsgotBenef: true,
    vagaLivre: true,
    vagaReservada: true,
    ocupSensor: true,
    operadores: true,
    pontosDeVenda: false,
    veiculos: true,
    guardas: true,
    quadras: false,
    qtdeVagaZero: false
  })

  return (
    <div className="flex h-screen">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Mapa Ocupação Vagas - Gerente</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-1"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {showSidebar ? 'Ocultar Painel' : 'Mostrar Painel'}
            </button>
            <button
              onClick={() => setShowChat(!showChat)}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-1"
            >
              <MessageSquare className="w-4 h-4" />
              Chat
            </button>
          </div>
        </div>

        <div className="flex flex-1">
          {/* Filtros */}
          {showFilters && (
            <div className="w-64 bg-white border-r p-4 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Área</label>
                <select 
                  className="w-full border rounded p-1 text-sm"
                  value={filters.area}
                  onChange={(e) => setFilters({...filters, area: e.target.value})}
                >
                  <option value=":: todas ::">:: todas ::</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quadra/Setor</label>
                <select 
                  className="w-full border rounded p-1 text-sm"
                  value={filters.quadraSetor}
                  onChange={(e) => setFilters({...filters, quadraSetor: e.target.value})}
                >
                  <option value=":: todas ::">:: todas ::</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Operadores/Fiscais</label>
                <select 
                  className="w-full border rounded p-1 text-sm"
                  value={filters.operadoresFiscais}
                  onChange={(e) => setFilters({...filters, operadoresFiscais: e.target.value})}
                >
                  <option value=":: TODOS ::">:: TODOS ::</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Box</label>
                <input 
                  type="text"
                  className="w-full border rounded p-1 text-sm"
                  value={filters.box}
                  onChange={(e) => setFilters({...filters, box: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.ticketPago}
                    onChange={(e) => setFilters({...filters, ticketPago: e.target.checked})}
                  />
                  <span className="text-sm">Ticket Pago</span>
                  <span className="text-xs text-gray-500 ml-auto">2</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.pagoPendenteSaldo}
                    onChange={(e) => setFilters({...filters, pagoPendenteSaldo: e.target.checked})}
                  />
                  <span className="text-sm bg-yellow-200 px-1">Pago - Uso do saldo</span>
                  <span className="text-xs text-gray-500 ml-auto">0</span>
                </label>

                {/* Adicione os outros checkboxes seguindo o mesmo padrão */}
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.pagoEmTerminal}
                    onChange={(e) => setFilters({...filters, pagoEmTerminal: e.target.checked})}
                  />
                  <span className="text-sm">Pago em Terminal</span>
                  <span className="text-xs text-gray-500 ml-auto">0</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.tolerancia}
                    onChange={(e) => setFilters({...filters, tolerancia: e.target.checked})}
                  />
                  <span className="text-sm">Tolerância</span>
                  <span className="text-xs text-gray-500 ml-auto">0</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.altNotificacao}
                    onChange={(e) => setFilters({...filters, altNotificacao: e.target.checked})}
                  />
                  <span className="text-sm">Alt/Notificação</span>
                  <span className="text-xs text-gray-500 ml-auto">18</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.denunciado}
                    onChange={(e) => setFilters({...filters, denunciado: e.target.checked})}
                  />
                  <span className="text-sm bg-red-200 px-1">Denunciado</span>
                  <span className="text-xs text-gray-500 ml-auto">0</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.contumaz}
                    onChange={(e) => setFilters({...filters, contumaz: e.target.checked})}
                  />
                  <span className="text-sm bg-purple-200 px-1">Contumaz</span>
                  <span className="text-xs text-gray-500 ml-auto">87</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.tempoEsgotado}
                    onChange={(e) => setFilters({...filters, tempoEsgotado: e.target.checked})}
                  />
                  <span className="text-sm bg-black text-white px-1">Tempo Esgotado</span>
                  <span className="text-xs text-gray-500 ml-auto">336</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.vagaLivre}
                    onChange={(e) => setFilters({...filters, vagaLivre: e.target.checked})}
                  />
                  <span className="text-sm bg-green-200 px-1">Vaga Livre</span>
                  <span className="text-xs text-gray-500 ml-auto">3424</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.operadores}
                    onChange={(e) => setFilters({...filters, operadores: e.target.checked})}
                  />
                  <span className="text-sm">👤 Operadores</span>
                  <span className="text-xs text-gray-500 ml-auto">0</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.guardas}
                    onChange={(e) => setFilters({...filters, guardas: e.target.checked})}
                  />
                  <span className="text-sm">🛡️ Guardas</span>
                  <span className="text-xs text-gray-500 ml-auto">0</span>
                </label>

                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={filters.qtdeVagaZero}
                    onChange={(e) => setFilters({...filters, qtdeVagaZero: e.target.checked})}
                  />
                  <span className="text-sm">⛔ Qtde Vaga Zero</span>
                  <span className="text-xs text-gray-500 ml-auto">7</span>
                </label>
              </div>
            </div>
          )}

          {/* Map container */}
          <div className="flex-1 relative">
            <Map />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div className="w-80 bg-white border-l flex flex-col">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setSelectedTab('veiculos')}
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                selectedTab === 'veiculos'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Car className="w-4 h-4 inline-block mr-1" />
              Veículos
            </button>
            <button
              onClick={() => setSelectedTab('bateria')}
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                selectedTab === 'bateria'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Battery className="w-4 h-4 inline-block mr-1" />
              Bateria
            </button>
            <button
              onClick={() => setSelectedTab('mensagens')}
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                selectedTab === 'mensagens'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="w-4 h-4 inline-block mr-1" />
              Mensagens
            </button>
            <button
              onClick={() => setSelectedTab('alertas')}
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                selectedTab === 'alertas'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <AlertTriangle className="w-4 h-4 inline-block mr-1" />
              Alertas
            </button>
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto p-4">
            {selectedTab === 'veiculos' && (
              <div className="space-y-4">
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-red-800">Veículo: ABC-1234</p>
                      <p className="text-sm text-red-600">Status: VEÍCULO ESTACIONADO</p>
                      <p className="text-sm text-red-600">Motivo: ESTACIONAMENTO IRREGULAR</p>
                    </div>
                    <span className="text-xs text-gray-500">09:25</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Vaga: 379 {'->'} NZD0040</p>
                </div>
              </div>
            )}

            {selectedTab === 'bateria' && (
              <div className="space-y-4">
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-red-800">Terminal #123</p>
                      <p className="text-sm text-red-600">Bateria: 5%</p>
                      <p className="text-sm text-red-600">Localização: Setor B2</p>
                    </div>
                    <span className="text-xs text-gray-500 font-bold">CRÍTICO</span>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-orange-800">Terminal #456</p>
                      <p className="text-sm text-orange-600">Bateria: 15%</p>
                      <p className="text-sm text-orange-600">Localização: Setor A1</p>
                    </div>
                    <span className="text-xs text-gray-500 font-bold">ATENÇÃO</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-yellow-800">Terminal #789</p>
                      <p className="text-sm text-yellow-600">Bateria: 30%</p>
                      <p className="text-sm text-yellow-600">Localização: Setor C3</p>
                    </div>
                    <span className="text-xs text-gray-500">Verificar</span>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'mensagens' && (
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-blue-800">M-TAMIRES</p>
                      <p className="text-sm text-blue-600">INICIO ALMOÇO</p>
                    </div>
                    <span className="text-xs text-gray-500">12:09</span>
                  </div>
                  <button className="text-xs text-blue-600 mt-2">RESPONDER</button>
                </div>
              </div>
            )}

            {selectedTab === 'alertas' && (
              <div className="space-y-4">
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-yellow-800">VEÍCULOS COM ALERTA</p>
                      <p className="text-sm text-yellow-600">Placa: XYZ-5678</p>
                      <p className="text-sm text-yellow-600">Setor: A3</p>
                    </div>
                    <span className="text-xs text-gray-500">10:30</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat overlay */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg border">
          <div className="p-3 border-b flex justify-between items-center bg-blue-500 text-white rounded-t-lg">
            <h3 className="font-medium">Chat</h3>
            <button onClick={() => setShowChat(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="h-96 p-4 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4">
              {/* Chat messages will go here */}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 