import React, { useState } from 'react';
import axios from 'axios';
import "./signup.css";
import {useNavigate, Link} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // Import useNavigate from react-router-dom
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to the backend for user registration
      const response = await axios.post('https://yoga-club.onrender.com/api/auth/', formData);
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      
      // Redirect to the login page after successful registration
      navigate('/register');
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='wrapper'>
      <div className="club-name">
      <h1>Yoga Club</h1>
    </div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-box">
           <input type="text" placeholder="Enter your username" id="username" name="username" value={formData.username} onChange={handleChange}/>
        </div>
        <div className='input-box'>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        </div>
        <div className='input-box'>
          <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
        </div>
        <div className='input-box'>
          <input type="password" name="confirmPassword" placeholder="Re-Enter your password" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div className='input-box button'>
        <button type="submit">Signup</button>
        </div>
        <div className="text">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
