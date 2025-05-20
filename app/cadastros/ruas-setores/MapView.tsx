"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

type Props = {
  latitude: string;
  longitude: string;
  zoom: string;
  setLatitude: (lat: string) => void;
  setLongitude: (lng: string) => void;
};

function LocationMarker({ setLatitude, setLongitude }: { setLatitude: (lat: string) => void; setLongitude: (lng: string) => void; }) {
  useMapEvents({
    click(e) {
      setLatitude(e.latlng.lat.toString());
      setLongitude(e.latlng.lng.toString());
    },
  });
  return null;
}

export default function MapView({ latitude, longitude, zoom, setLatitude, setLongitude }: Props) {
  return (
    <MapContainer
      key={`${latitude}-${longitude}`}
      center={[
        latitude ? parseFloat(latitude) : -22.7578,
        longitude ? parseFloat(longitude) : -43.4518,
      ]}
      zoom={zoom ? parseInt(zoom) : 19}
      style={{ height: 300, width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[
          latitude ? parseFloat(latitude) : -22.7578,
          longitude ? parseFloat(longitude) : -43.4518,
        ]}
      />
      <LocationMarker setLatitude={setLatitude} setLongitude={setLongitude} />
    </MapContainer>
  );
} 