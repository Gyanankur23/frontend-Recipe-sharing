import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Credentials from './pages/Credentials';
import Profile from './pages/Profile';
import Comments from './pages/Comments';
import Ratings from './pages/Ratings';
import RecipeList from './pages/RecipeList';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import './app.css';

const RecipeDetails = () => {
  return (
    <div>
      <iframe
        src={`${process.env.PUBLIC_URL}/RecipeDetails.html`}
        title="Recipe Details"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/credentials" element={<Credentials />} />
        <Route exact path="/recipelist" element={<RecipeList />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/comments" element={<Comments />} />
        <Route exact path="/ratings" element={<Ratings />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
