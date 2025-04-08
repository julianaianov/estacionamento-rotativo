"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import L from "leaflet"

// Fix Leaflet marker icon
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
  type: string
  status: "active" | "inactive" | "free" | "occupied" | "regularizing" | "unavailable"
  spotNumber: string
}

type MapClickHandler = {
  onMapClick?: (event: { latlng: { lat: number; lng: number } }) => void
  spots?: ParkingSpot[]
  isCreationMode?: boolean
}

function MapEvents({ onMapClick }: { onMapClick?: (event: { latlng: { lat: number; lng: number } }) => void }) {
  useMapEvents({
    click: (e) => {
      if (onMapClick) {
        onMapClick({ latlng: e.latlng })
      }
    },
  })
  return null
}

export default function OccupationMap({ onMapClick, spots = [], isCreationMode = false }: MapClickHandler) {
  const [loading, setLoading] = useState(true)

  // Center on Maricá-RJ
  const center = { lat: -22.9199, lng: -42.8198 }

  useEffect(() => {
    setLoading(false)
  }, [])

  const getMarkerColor = (type: string, status: ParkingSpot["status"]) => {
    if (status === "inactive") return "gray"
    
    switch (type) {
      case "normal":
        return "green"
      case "idoso":
        return "yellow"
      case "pne":
        return "blue"
      case "farmacia":
        return "purple"
      case "cargaDescarga":
        return "orange"
      case "orgaoPublico":
        return "red"
      case "moto":
        return "gray"
      case "gestante":
        return "pink"
      case "vagaGaragem":
        return "indigo"
      case "vagaGratuita":
        return "lightgreen"
      default:
        return "blue"
    }
  }

  const getSpotStatusText = (status: ParkingSpot["status"]) => {
    switch (status) {
      case "free":
        return "Livre"
      case "occupied":
        return "Ocupada"
      case "regularizing":
        return "Em Regularização"
      case "unavailable":
        return "Indisponível"
      case "active":
        return "Ativa"
      case "inactive":
        return "Inativa"
      default:
        return status
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
      {onMapClick && <MapEvents onMapClick={onMapClick} />}
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.latitude, spot.longitude]}
          icon={L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${getMarkerColor(spot.type, spot.status)}; width: 15px; height: 15px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>`,
            iconSize: [15, 15],
            iconAnchor: [7, 7],
          })}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">Vaga {spot.spotNumber}</h3>
              <p className="text-sm">
                Tipo: <span className="font-semibold">{spot.type}</span>
              </p>
              <p className="text-sm">
                Status:{" "}
                <span className="font-semibold">
                  {getSpotStatusText(spot.status)}
                </span>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
} 