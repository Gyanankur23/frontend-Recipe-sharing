import React, { useState } from 'react';
import axios from 'axios';

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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3 style={{ fontSize: '3em', color: '#0000ff', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' }}>
        {isLogin ? 'Login' : 'Register'}
      </h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={{ fontSize: '1.5em', padding: '0.5em', margin: '0.5em', width: '100%' }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ fontSize: '1.5em', padding: '0.5em', margin: '0.5em', width: '100%' }}
      />
      <div>
        <button
          onClick={isLogin ? handleLogin : handleRegister}
          style={{
            fontSize: '1.5em',
            padding: '1em 2em',
            margin: '0.5em',
            cursor: 'pointer',
            backgroundColor: 'black',
            border: '2px solid #000',
            borderRadius: '5px',
            transition: 'box-shadow 0.3s, transform 0.3s'
          }}
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{
            fontSize: '1.5em',
            padding: '1em 2em',
            margin: '0.5em',
            cursor: 'pointer',
            backgroundColor: 'black',
            border: '2px solid #000',
            borderRadius: '5px',
            transition: 'box-shadow 0.3s, transform 0.3s'
          }}
        >
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default Credentials;
