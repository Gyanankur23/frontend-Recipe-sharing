import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import Loading from './Loading';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/credentials"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Credentials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipe-details"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              RecipeDetails
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comments"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Comments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ratings"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Ratings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipelist"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              RecipeList
            </NavLink>
          </li>
        </ul>
      </nav>
      {isLoading && <Loading />}
    </div>
  );
};

export default Navbar;
