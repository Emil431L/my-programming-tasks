import React from 'react';
import './Catalog.css';

const sushiList = [
  {
    name: 'Salmon Nigiri',
    image: 'https://images.unsplash.com/photo-1617196038439-9a36f44d45ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sushi Roll',
    image: 'https://images.unsplash.com/photo-1579881795335-5961d2961a9f?auto=format&fit=crop&w=800&q=80',
  }
];

const Sushi = () => {
  return (
    <div className="menu-container">
      <h1>Sushi Menu</h1>
      <div className="menu-list">
        {sushiList.map((item, index) => (
          <div key={index} className="menu-item">
            <img className="menu-image" src={item.image} alt={item.name} />
            <p className="menu-label">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sushi;
