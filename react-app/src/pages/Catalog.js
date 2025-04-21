import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalog.css';

const Catalog = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Pizza',
      image: 'https://images.unsplash.com/photo-1601924582975-4cc9e6d3ad9e',
      path: '/catalog/pizza'
    },
    {
      title: 'Sushi',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      path: '/catalog/sushi'
    },
    {
      title: 'Burgers',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
      path: '/catalog/burgers'
    }
  ];

  return (
    <div className="catalog-container">
      <h1>Valitse Mieleisesi</h1>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.title}
            className="category-card"
            onClick={() => navigate(category.path)}
          >
            <img src={category.image} alt={category.title} />
            <h2>{category.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

