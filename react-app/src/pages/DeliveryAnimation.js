import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './DeliveryAnimation.css';

// Иконка бургера
const burgerIcon = new L.DivIcon({
  className: 'custom-burger-icon',
  html: '🍔',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

function DeliveryAnimation() {
  const location = useLocation();
  const shouldMove = location.state?.moveBurger || false;

  const restaurant = [60.2940, 25.0375]; // McDonald's Tikkurila
  const destination = [60.2940, 25.0375]; // Lincolninaukio 3 B, Kivistö

  const [position, setPosition] = useState(restaurant);
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    if (!shouldMove) return;

    let index = 0;
    const steps = 200;
    const latStep = (destination[0] - restaurant[0]) / steps;
    const lngStep = (destination[1] - restaurant[1]) / steps;

    const interval = setInterval(() => {
      index++;
      setPosition([
        restaurant[0] + latStep * index,
        restaurant[1] + lngStep * index,
      ]);

      if (index >= steps) {
        clearInterval(interval);
        setDelivered(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [shouldMove]);

  return (
    <div className="animation-map">
      <MapContainer center={restaurant} zoom={12} scrollWheelZoom={false} style={{ height: '70vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={restaurant}>
          <div>🥤 McDonald's</div>
        </Marker>
        <Marker position={destination}>
          <div>🏠 Your home</div>
        </Marker>
        <Polyline positions={[restaurant, destination]} color="red" />
        {!delivered && (
          <Marker position={position} icon={burgerIcon} />
        )}
      </MapContainer>
      {delivered && <h2 className="delivered-text">Your order is delivered!</h2>}
    </div>
  );
}

export default DeliveryAnimation;
