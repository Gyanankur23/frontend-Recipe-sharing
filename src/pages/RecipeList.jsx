import React from 'react';

const recipes = [
  { id: 1, title: 'Chicken Biryani' },
  { id: 2, title: 'Paneer Butter Masala' },
  { id: 3, title: 'Masoor Dal' },
  { id: 4, title: 'Aloo Gobi' },
  { id: 5, title: 'Gulab Jamun' },
];

const RecipeList = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '3em', color: '#ff5733', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' }}>
        Recipe List
      </h2>
      <ol style={{ listStyleType: 'decimal', padding: 0, textAlign: 'left' }}>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ fontSize: '1.5em', color: '#000000', margin: '1rem 0', fontWeight: 'bold' }}>
            {recipe.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeList;
