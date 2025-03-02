import axios from 'axios';

export const getRecipes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
