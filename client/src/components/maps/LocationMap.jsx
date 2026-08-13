import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocationMap({
  latitude,
  longitude,
  title,
}) {
  if (!latitude || !longitude) {
    return (
      <div className="bg-gray-200 rounded-xl p-8 text-center">
        Location not available
      </div>
    );
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[450px] w-full rounded-2xl shadow-lg"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>
          {title}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LocationMap;