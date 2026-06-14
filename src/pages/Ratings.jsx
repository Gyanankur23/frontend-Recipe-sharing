import React from 'react';
import './app.css';

const ratings = [
  { recipeId: 1, userId: 1, rating: 5 },
  { recipeId: 2, userId: 2, rating: 4 },
  { recipeId: 3, userId: 3, rating: 3 },
  { recipeId: 4, userId: 1, rating: 5 },
  { recipeId: 5, userId: 4, rating: 4 },
];

const users = [
  { username: 'John' },
  { username: 'Ram' },
  { username: 'Ankush' },
  { username: 'Mohit' },
  { username: 'Uday' },
];

const recipes = [
  { id: 1, title: 'Chicken Biryani' },
  { id: 2, title: 'Paneer Butter Masala' },
  { id: 3, title: 'Masoor Dal' },
  { id: 4, title: 'Aloo Gobi' },
  { id: 5, title: 'Gulab Jamun' },
];

const Ratings = () => {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Ratings</h2>
        <ol>
          {ratings.map((rating, index) => (
            <li key={index}>
              {recipes[rating.recipeId - 1].title} by {users[rating.userId - 1].username} - Rating: {rating.rating}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Ratings;
