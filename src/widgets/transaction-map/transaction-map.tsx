import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';

import '@/shared/lib/leaflet';

interface TransactionMapProps {
  latitude?: number;

  longitude?: number;
}

interface MapUpdaterProps {
  latitude: number;
  longitude: number;
}

function MapUpdater({ latitude, longitude }: MapUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    map.setView([latitude, longitude], map.getZoom(), {
      animate: true,
    });
  }, [latitude, longitude, map]);

  return null;
}

export function TransactionMap({ latitude, longitude }: TransactionMapProps) {
  if (latitude == null || longitude == null) {
    return (
      <div className="flex h-72 items-center justify-center rounded-lg border">
        No location available.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        style={{
          width: '100%',
          height: '340px',
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors © CARTO"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <MapUpdater latitude={latitude} longitude={longitude} />

        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}
