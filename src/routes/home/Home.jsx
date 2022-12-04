import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGN1Ym91IiwiYSI6ImNsYjk4YjNkczA2NWszeG9mZHZrYjJxM2kifQ.mrgVxfpPjE8S1zjo1rvfzA";
export function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.16);
  const [lat, setLat] = useState(41.38);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <>
      <Link className="link nav__link" to={`/area/${0}`}>
        Zero
      </Link>
      <p></p>
      <Link className="link nav__link" to={`/area/${1}`}>
        One
      </Link>
      <p></p>
      <Link className="link nav__link" to={`/area/${2}`}>
        Two
      </Link>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}
