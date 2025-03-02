import React from 'react';

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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '3em', color: '#ff5733', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' }}>
        Ratings
      </h2>
      <ol style={{ listStyleType: 'decimal', padding: 0, textAlign: 'left' }}>
        {ratings.map((rating, index) => (
          <li key={index} style={{ fontSize: '1.5em', color: '#000000', margin: '1rem 0', fontWeight: 'bold' }}>
            {recipes[rating.recipeId - 1].title} by {users[rating.userId - 1].username} - Rating: {rating.rating}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Ratings;
