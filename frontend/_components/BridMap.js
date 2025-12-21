"use client";

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const seasonColors = {
  Summer: "#22c55e",
  Winter: "#3b82f6",
};

const defaultSeasonColor = "#df9028ff";

const getSeasonForPolygon = (seasons, index) => {
  if (seasons.length === 1) return seasons[0];
  return seasons[index % seasons.length];
};

export default function BirdMap({ features, seasons }) {
  const polygons = features.map((feature) =>
    feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng])
  );

  return (
    <MapContainer
      center={polygons[0][0]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png"
        attribution="© Stadia Maps"
      />

      {polygons.map((poly, idx) => {
        const season = getSeasonForPolygon(seasons, idx);
        const color = seasonColors[season] || defaultSeasonColor;

        return (
          <Polygon
            key={idx}
            positions={poly}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.45,
              weight: 2,
            }}
          >
            <Tooltip sticky>
              <div>
                <strong>Season:</strong>
                <div style={{ color, fontWeight: 700 }}>{season}</div>
              </div>
            </Tooltip>
          </Polygon>
        );
      })}
    </MapContainer>
  );
}
