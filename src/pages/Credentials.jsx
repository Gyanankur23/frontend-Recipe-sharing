import React, { useState } from 'react';
import axios from 'axios';
import './app.css';

const Credentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', { username, password })
      .then(response => {
        console.log('Login successful:', response.data);
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  const handleRegister = () => {
    axios.post('http://localhost:3001/register', { username, password })
      .then(response => {
        console.log('Registration successful:', response.data);
      })
      .catch(error => {
        console.error('Error registering:', error);
      });
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{ marginBottom: '1rem' }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ marginBottom: '1.5rem' }}
          />
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={isLogin ? handleLogin : handleRegister}>
              {isLogin ? 'Login' : 'Register'}
            </button>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
