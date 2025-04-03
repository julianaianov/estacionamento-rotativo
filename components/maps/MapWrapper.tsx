"use client"

import dynamic from "next/dynamic"

const MapComponent = dynamic(() => import("@/components/maps/OccupationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  ),
})

export default function MapWrapper() {
  return (
    <div className="h-[calc(100vh-16rem)] w-full rounded-lg overflow-hidden">
      <MapComponent />
    </div>
  )
} 