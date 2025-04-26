import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Delivery.css';

function Delivery() {
    const navigate = useNavigate();
    const location = useLocation();
    const burger = location.state?.burger;

    const distance = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    const deliveryTime = distance * 5;
    const deliveryPrice = deliveryTime * 0.2;

    const [name, setName] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [card, setCard] = useState('');

    const handleSubmitOrder = () => {
        if (!showInput) {
            setShowInput(true);  
            return; 
        }

        if (name && card) {
            navigate('/delivery-animation', {state: {moveBurger: true, deliveryTime: deliveryTime}});  
        } else {
            alert('Enter name and card number');  
        }
    }

    return (
        <div className="delivery-container">
            <h1>Delivery</h1>

            <div className="delivery-box">
                <p>{burger}</p>
                <p>Description: Delicious and juicy burger with the best ingredients</p>
                <p>Price: 5.99$</p>
                <p>Distance: {distance} km</p>
                <p>Delivery time {deliveryTime} min.</p>
                <p>Cost: {deliveryPrice}$</p>

                {showInput && (
                    <div className="order">
                        <input 
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="number"
                            placeholder="5412 7512 3412 3456"
                            value={card}
                            onChange={(e) => setCard(e.target.value)}
                        />
                    </div>
                )}

                <div className="button-container">
                    <button className="submit-button" onClick={handleSubmitOrder}>Delivery Order</button>
                </div>
            </div>
        </div>
    )
}

export default Delivery;
