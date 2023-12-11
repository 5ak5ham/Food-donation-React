import { MapContainer, TileLayer } from "react-leaflet";
import Base from "../Components/Base";
import "leaflet/dist/leaflet.css";
import "./maps.css";

function Maps() {
  return (
    <Base>
      <MapContainer center={[28.5647, 77.1949]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Base>
  );
}

export default Maps;
