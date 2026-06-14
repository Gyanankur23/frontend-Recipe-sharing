import React from 'react';
import './app.css';

const Profile = () => {
  const handleEditProfile = () => {
    alert('Edit Profile functionality would be implemented here');
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>Profile Page</h1>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
