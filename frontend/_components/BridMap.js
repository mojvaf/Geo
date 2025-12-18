"use client";

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const seasonColors = {
  Summer: "#22c55e",
  Winter: "#3b82f6",
};

const defaultSeasonColor = "#df9028ff";

const getPolygonColor = (seasons) => {
  if (seasons.includes("Summer")) return seasonColors.Summer;
  if (seasons.includes("Winter")) return seasonColors.Winter;
  return defaultSeasonColor;
};

export default function BirdMap({ features, seasons }) {
  const polygons = features.map((feature) =>
    feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng])
  );

  const polygonColor = getPolygonColor(seasons);

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

      {polygons.map((poly, idx) => (
        <Polygon
          key={idx}
          positions={poly}
          pathOptions={{
            color: polygonColor,
            fillColor: polygonColor,
            fillOpacity: 0.45,
            weight: 2,
          }}
        >
          <Tooltip sticky className="bird-tooltip">
            <div>
              <strong>Seasons:</strong>
              {seasons.map((season, idx) => (
                <div
                  key={idx}
                  style={{
                    color: seasonColors[season] || defaultSeasonColor,
                    fontWeight: 700,
                  }}
                >
                  {season}
                </div>
              ))}
            </div>
          </Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  );
}
