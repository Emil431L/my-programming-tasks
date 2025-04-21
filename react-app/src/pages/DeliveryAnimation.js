// import React, { useState, useEffect } from 'react';
// import './DeliveryAnimation.css';
// import { useLocation } from 'react-router-dom';

// function DeliveryAnimation() {
//     const location = useLocation();
//     const shouldMove = location.state?.moveBurger || false;
//     const deliveryTime = location.state?.deliveryTime || 20

//     const [moveBurger, setMoveBurger] = useState(false);
//     const [delivered, setDelivered] = useState(false);

//     useEffect(() => {
//         if (shouldMove) {
//             setTimeout(() => {
//                 setMoveBurger(true);
//             }, 2000); 
//         }
//     }, [shouldMove]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setDelivered(true);
//         }, 20);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className="animation-container">
//             {!delivered ? (
//                 <div className={`burger-truck ${moveBurger ? 'move' : ''}`}>🍔</div>
//             ) : (
//                 <h2>Your order is delivered</h2>
//             )}
//         </div>
//     );
// }

// export default DeliveryAnimation;











import React, { useState, useEffect } from 'react';
import './DeliveryAnimation.css';
import { useLocation } from 'react-router-dom';
import Map from "../components/Map";

function DeliveryAnimation() {

    const restaurantCoordinates = {
        lat: 60.2955,
        Ing: 25.0328
    }

    const location = useLocation();
    const shouldMove = location.state?.moveBurger || false;
    const deliveryTime = location.state?.deliveryTime || 20;

    const [moveBurger, setMoveBurger] = useState(false);
    const [delivered, setDelivered] = useState(false);

    const [burgerPosition, setBurgerPosition] = useState(restaurantCoordinates)

    const moveBurgerToDestination = () => {

        const newPosition = {

            lat: burgerPosition.lat + 0.001,
            Ing: burgerPosition.Ing + 0.001
        }

        setBurgerPosition(newPosition)
    }

    useEffect(() => {

        const interval = setInterval(() => {

            moveBurgerToDestination()
        }, 1000)
    }, [])

    useEffect(() => {
        if (shouldMove) {
            setTimeout(() => {
                setMoveBurger(true);
            }, 100); 
        }
    }, [shouldMove]);

    useEffect(() => {
        const ms = deliveryTime * 60 * 1000;
        const timer = setTimeout(() => {
            setDelivered(true);
        }, ms);
        return () => clearTimeout(timer);
    }, [deliveryTime]);

    return (
        <div className="animation-container">
            {!delivered ? (
                <div
                    className={`burger-truck ${moveBurger ? 'move' : ''}`}
                    style={{ transitionDuration: `${deliveryTime * 60}s` }}
                >
                    🍔
                </div>
            ) : (
                <h2>Your order is delivered</h2>
            )}

            <Map />

        </div>
    );
}

export default DeliveryAnimation;













