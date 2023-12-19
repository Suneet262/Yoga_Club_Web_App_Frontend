import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    batchTime: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.age || !formData.gender || !formData.batchTime) {
      alert('All fields are required!');
      return;
    }

    // Make API call to the backend
    try {
      const response = await axios.post('https://yoga-club.onrender.com/api/registration/register', formData);
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error.message);
      alert('Registration failed. Please try again.');
    }

  
  };
  const handleLogout = () => {
    // Clear the token from local storage
    // localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div>
    <nav className="navbar">
      <h2>Yoga Club</h2>
      <ul>
      <li><a href="/register">Register</a></li>
      <li><a href="/payment">Payment</a></li>
        
        <li><button onClick={handleLogout}>Logout</button></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
    <div className="container">
      <header>
        <h1 id="title">Yoga Class Registration Form</h1>
        <p id="description">Fill your Details Here</p>
      </header>
      <div className="form-wrapper">
        <form id="survey-form" onSubmit={handleSubmit}>
          <div className="name">
            <label id="name-label">Name: </label><br />
            <input type="text" className="input-styling" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="email">
            <label id="email-label">Email address</label><br />
            <input type="email" className="input-styling" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="code">
            <label id="number-label">Age: </label><br />
            <input type="number" className="input-styling" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="nationality">
          <label>Gender: </label><br />
          <select name="gender" value={formData.gender} onChange={handleChange} className="select-styling">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="gender">
          <label>Batch Time:</label>
          <select name="batchTime" value={formData.batchTime} onChange={handleChange} className="select-styling">
            <option value="">Select Batch Time</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
      </div>
          <div className="submit">
            <button type="submit" id="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
