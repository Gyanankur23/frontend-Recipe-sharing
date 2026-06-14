import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

const recipes = [
  { id: 1, title: 'Chicken Biryani' },
  { id: 2, title: 'Paneer Butter Masala' },
  { id: 3, title: 'Masoor Dal' },
  { id: 4, title: 'Aloo Gobi' },
  { id: 5, title: 'Gulab Jamun' },
];

const RecipeList = () => {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Recipe List</h2>
        <ol>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to="/recipe-details" style={{ textDecoration: 'none', color: 'inherit' }}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeList;
