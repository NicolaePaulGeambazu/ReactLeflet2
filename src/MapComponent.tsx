import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MapContainer,
  TileLayer,
  Circle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';

interface CoordinatesData {
  [region: string]: Coordinate[];
}

interface Coordinate {
  latitude: number;
  longitude: number;
  size: number;
}

const MapComponent: React.FC = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesData | undefined>();

  const fetchData = async () => {
    try {
      const response = await axios.post('https://staging-mortar-tech-test-2im2.encr.app/coordinates');

      if (response.status === 200 && response.data?.Coords) {
        setCoordinates(response.data.Coords);
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const center: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer center={center} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {coordinates &&
        Object.keys(coordinates).map((region, index) => (
          <React.Fragment key={index}>
            {coordinates[region].map((coord: Coordinate, coordIndex: number) => {
              return (
                <Circle
                  key={coordIndex}
                  center={[coord.latitude, coord.longitude]}
                />
              );
            })}
          </React.Fragment>
        ))}
    </MapContainer>
  );
};

export default MapComponent;
