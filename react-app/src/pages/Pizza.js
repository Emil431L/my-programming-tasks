import React from 'react';
import './Catalog.css';

const pizzaList = [
  {
    name: 'Pepperoni Pizza',
    image: 'https://images.unsplash.com/photo-1601925262782-cbfe5eeea019?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Margherita',
    image: 'https://images.unsplash.com/photo-1600628420312-09f3f315ed57?auto=format&fit=crop&w=800&q=80',
  }
];

const Pizza = () => {
  return (
    <div className="menu-container">
      <h1>Pizza Menu</h1>
      <div className="menu-list">
        {pizzaList.map((item, index) => (
          <div key={index} className="menu-item">
            <img className="menu-image" src={item.image} alt={item.name} />
            <p className="menu-label">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
