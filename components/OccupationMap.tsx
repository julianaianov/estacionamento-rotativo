'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LatLngTuple, LatLngBounds } from 'leaflet';

type ParkingSpot = {
  id: string;
  number: string;
  type: 'car' | 'motorcycle' | 'handicapped';
  status: 'available' | 'occupied' | 'reserved' | 'maintenance';
  location: {
    lat: number;
    lng: number;
  };
};

type OccupationMapProps = {
  spots: ParkingSpot[];
  onMapClick: (lat: number, lng: number) => void;
  selectedLocation: { lat: number; lng: number } | null;
};

// Custom marker icons
const getMarkerIcon = (type: ParkingSpot['type'], status: ParkingSpot['status']) => {
  const getColor = () => {
    switch (status) {
      case 'available':
        return 'green';
      case 'occupied':
        return 'red';
      case 'reserved':
        return 'orange';
      case 'maintenance':
        return 'gray';
      default:
        return 'blue';
    }
  };

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 25px;
        height: 25px;
        background-color: ${getColor()};
        border-radius: 50%;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        font-weight: bold;
      ">
        ${type === 'car' ? '🚗' : type === 'motorcycle' ? '🏍️' : '♿'}
      </div>
    `,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });
};

// Map click handler component
function MapClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function OccupationMap({ spots, onMapClick, selectedLocation }: OccupationMapProps) {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    // Center map on Brazil if no spots are present
    const defaultCenter: LatLngTuple = [-15.7801, -47.9292]; // Brasília coordinates
    const defaultZoom = 5;

    if (mapRef.current) {
      if (spots.length === 0) {
        mapRef.current.setView(defaultCenter, defaultZoom);
      } else {
        // Center map on the spots
        const spotLatLngs: LatLngTuple[] = spots.map(spot => [spot.location.lat, spot.location.lng]);
        const bounds = L.latLngBounds(spotLatLngs);
        mapRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [spots]);

  return (
    <MapContainer
      ref={mapRef}
      center={[-15.7801, -47.9292] as LatLngTuple}
      zoom={5}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onMapClick={onMapClick} />
      
      {/* Render existing spots */}
      {spots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.location.lat, spot.location.lng] as LatLngTuple}
          icon={getMarkerIcon(spot.type, spot.status)}
        />
      ))}

      {/* Render selected location */}
      {selectedLocation && (
        <Marker
          position={[selectedLocation.lat, selectedLocation.lng] as LatLngTuple}
          icon={L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                width: 25px;
                height: 25px;
                background-color: blue;
                border-radius: 50%;
                border: 2px solid white;
                opacity: 0.7;
              "></div>
            `,
            iconSize: [25, 25],
            iconAnchor: [12, 12],
          })}
        />
      )}
    </MapContainer>
  );
} 