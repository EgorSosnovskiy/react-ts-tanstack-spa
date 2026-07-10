import { MapContainer, Marker, TileLayer } from 'react-leaflet';

interface TransactionMapProps {
  latitude?: number;

  longitude?: number;
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
          height: '320px',
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors © CARTO"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}
