import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';

export default function MapDisplay({ from, to }) {
  return (
    <div>
    <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {from && <Marker position={from} />}
      {to && <Marker position={to} />}
      {from && to && <Polyline positions={[from, to]} />}
    </MapContainer>
    </div>
  );
}
