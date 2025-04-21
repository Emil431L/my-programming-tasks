import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const center = { lat: 60.2934, lng: 25.0374 }; // Укажи нужные координаты

      new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: center,
        map: mapRef.current,
        title: "Твой дом 🏠",
      });
    };

    // Проверяем, загрузился ли уже скрипт Google Maps API
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0hzmFIZnGWBiEsV0H_t7xb56Cy2F4YaM&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = loadMap;
    } else {
      loadMap();
    }
  }, []);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};

export default Map;
