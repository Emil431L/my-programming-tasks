import React from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

const burgerList = [
  {
    name: 'Classic Burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },
  {
    name: 'Cheeseburger',
    image: 'https://images.unsplash.com/photo-1550547660-42c2844271e6',
  }
];

const Burgers = () => {

  const navigate = useNavigate()

  const handleBurgerClick = (burgerName) => {

    navigate('/delivery', {

      state: {
        burger: burgerName
      }
    })
  }
  return (
    <div className="menu-container">
      <h1>Burger Menu</h1>
      <div className="menu-list">
        {burgerList.map((item, index) => (
          <div key={index} className="menu-item" onClick={() => handleBurgerClick(item.name)}> 
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgers;
