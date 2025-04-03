"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import L from "leaflet"

// Corrigindo o ícone do marcador do Leaflet
const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

type ParkingSpot = {
  id: string
  latitude: number
  longitude: number
  status: "free" | "occupied" | "regularizing" | "unavailable"
  spotNumber: string
}

export default function OccupationMap() {
  const [spots, setSpots] = useState<ParkingSpot[]>([])
  const [loading, setLoading] = useState(true)

  // Centro do mapa em Maricá-RJ
  const center = { lat: -22.9199, lng: -42.8198 }

  useEffect(() => {
    // Aqui você fará a chamada à API para buscar as vagas
    // Por enquanto, vamos usar dados mockados
    const mockSpots: ParkingSpot[] = [
      {
        id: "1",
        latitude: -22.9199,
        longitude: -42.8198,
        status: "free",
        spotNumber: "A001",
      },
      {
        id: "2",
        latitude: -22.9195,
        longitude: -42.8195,
        status: "occupied",
        spotNumber: "A002",
      },
      {
        id: "3",
        latitude: -22.9192,
        longitude: -42.8192,
        status: "regularizing",
        spotNumber: "A003",
      },
    ]

    setSpots(mockSpots)
    setLoading(false)
  }, [])

  const getMarkerColor = (status: ParkingSpot["status"]) => {
    switch (status) {
      case "free":
        return "green"
      case "occupied":
        return "red"
      case "regularizing":
        return "yellow"
      case "unavailable":
        return "gray"
      default:
        return "blue"
    }
  }

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">Vaga {spot.spotNumber}</h3>
              <p className="text-sm">
                Status:{" "}
                <span
                  className={`font-semibold text-${getMarkerColor(
                    spot.status
                  )}-600`}
                >
                  {spot.status === "free"
                    ? "Livre"
                    : spot.status === "occupied"
                    ? "Ocupada"
                    : spot.status === "regularizing"
                    ? "Em Regularização"
                    : "Indisponível"}
                </span>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
} 