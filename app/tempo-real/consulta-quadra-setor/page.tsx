"use client"

import { useState } from 'react'
import { Search, ArrowUpDown, Eye } from 'lucide-react'

interface ConsultaData {
  area: string
  rua: string
  quadraSetor: string
  nroVagas: number
  vagasLivres: number
  pagantes: number
  naoPagantes: number
  ocupacao: string
  respeito: string
}

export default function ConsultaQuadraSetor() {
  const [sortColumn, setSortColumn] = useState<keyof ConsultaData | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [filters, setFilters] = useState({
    area: '',
    rua: '',
    quadraSetor: ''
  })

  // Dados de exemplo - substituir por dados reais da API
  const data: ConsultaData[] = [
    {
      area: 'BANCARIO/COML',
      rua: 'Rua Cap. Guilherme Cunha',
      quadraSetor: 'Rua Cap. Guilherme Cunha',
      nroVagas: 35,
      vagasLivres: 5,
      pagantes: 1,
      naoPagantes: 29,
      ocupacao: '85,71%',
      respeito: '3,33%'
    },
    {
      area: 'RESIDENCIAL',
      rua: 'AVENIDA ANTONIO VIEIRA SOBRINHO',
      quadraSetor: '2 AV. ANTONIO VIEIRA SOBRINHO',
      nroVagas: 47,
      vagasLivres: 20,
      pagantes: 4,
      naoPagantes: 23,
      ocupacao: '57,45%',
      respeito: '14,81%'
    },
    // Adicione mais dados conforme necessário
  ]

  const handleSort = (column: keyof ConsultaData) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const filteredData = data.filter(item => {
    return (
      item.area.toLowerCase().includes(filters.area.toLowerCase()) &&
      item.rua.toLowerCase().includes(filters.rua.toLowerCase()) &&
      item.quadraSetor.toLowerCase().includes(filters.quadraSetor.toLowerCase())
    )
  })

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0
    
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' 
        ? aValue - bValue
        : bValue - aValue
    }

    return 0
  })

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Search className="w-5 h-5" />
            Consulta Por Quadra/Setor
          </h1>

          {/* Campos de busca */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Área"
                className="w-full px-3 py-2 border rounded text-sm"
                value={filters.area}
                onChange={(e) => handleFilterChange('area', e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                className="w-full px-3 py-2 border rounded text-sm"
                value={filters.rua}
                onChange={(e) => handleFilterChange('rua', e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Quadra/Setor"
                className="w-full px-3 py-2 border rounded text-sm"
                value={filters.quadraSetor}
                onChange={(e) => handleFilterChange('quadraSetor', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left border-b">
                  <button
                    onClick={() => handleSort('area')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Área
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-left border-b">
                  <button
                    onClick={() => handleSort('rua')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Rua
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-left border-b">
                  <button
                    onClick={() => handleSort('quadraSetor')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Quadra/Setor
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => handleSort('nroVagas')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Nro Vagas
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => handleSort('vagasLivres')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Nro Vagas Livres
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => handleSort('pagantes')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Pagantes
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => handleSort('naoPagantes')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Não Pagantes
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => handleSort('ocupacao')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Ocupação
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">
                  <button
                    onClick={() => handleSort('respeito')}
                    className="flex items-center gap-1 font-medium"
                  >
                    Respeito
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </th>
                <th className="px-4 py-2 text-center border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr 
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-2 border-b">{row.area}</td>
                  <td className="px-4 py-2 border-b">{row.rua}</td>
                  <td className="px-4 py-2 border-b">{row.quadraSetor}</td>
                  <td className="px-4 py-2 text-center border-b">{row.nroVagas}</td>
                  <td className="px-4 py-2 text-center border-b">{row.vagasLivres}</td>
                  <td className="px-4 py-2 text-center border-b">{row.pagantes}</td>
                  <td className="px-4 py-2 text-center border-b">{row.naoPagantes}</td>
                  <td className="px-4 py-2 text-center border-b">{row.ocupacao}</td>
                  <td className="px-4 py-2 text-center border-b">{row.respeito}</td>
                  <td className="px-4 py-2 text-center border-b">
                    <div className="flex justify-center gap-2">
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Visualizar detalhes"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Visualizar no mapa"
                      >
                        🎯
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 