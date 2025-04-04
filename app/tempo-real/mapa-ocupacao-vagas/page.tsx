import MapWrapper from "@/components/maps/MapWrapper"

export default function MapaOcupacaoVagas() {
  return (
    <main className="min-h-screen bg-gray-100">
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

          <MapWrapper />
        </div>
      </div>
    </main>
  )
} 