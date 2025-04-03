import Navbar from "@/components/navbar"
import dynamic from "next/dynamic"

// Importando o mapa de forma dinâmica para evitar problemas de SSR
const MapComponent = dynamic(() => import("@/components/maps/OccupationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  ),
})

export default function MapaOcupacaoVagas() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Mapa de Ocupação de Vagas</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex gap-4 mb-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Vaga Livre</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm">Vaga Ocupada</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm">Vaga em Regularização</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm">Vaga Indisponível</span>
            </div>
          </div>

          <div className="h-[calc(100vh-16rem)] w-full rounded-lg overflow-hidden">
            <MapComponent />
          </div>
        </div>
      </div>
    </main>
  )
} 