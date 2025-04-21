import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import App from './App';
import Pizza from './pages/Pizza';
import Burgers from './pages/Burgers';
import Sushi from './pages/Sushi'
import Delivery from './pages/Delivery';
import DeliveryAnimation from './pages/DeliveryAnimation';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/pizza" element={<Pizza />} />
            <Route path="/catalog/burgers" element={<Burgers />} />
            <Route path="/catalog/sushi" element={<Sushi />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/delivery-animation" element={<DeliveryAnimation />} />
        </Routes>
    );
};

export default AppRoutes;
