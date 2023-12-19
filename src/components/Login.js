import React, {useEffect ,useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import "./signup.css";

function Login(){

    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/api/auth/login', formData);
        console.log('Login successful:', response.data);
        alert('Login successful!');
        navigate('/register');
      } catch (error) {
        console.error('Login failed:', error.message);
        alert('Login failed. Please check your credentials and try again.');
      }
    };
  


    return(
    <div className="wrapper">
    <div class="club-name">
      <h1>Yoga Club</h1>
    </div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
       <div class="input-box">
        <input type="email" placeholder="Enter your email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Enter your password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
      </div>
      <div className='input-box button'>
        <button type="submit">Login</button>
    </div>
    <div className="text">
          <p>Don't have an account? <Link to="/">Regsiter</Link></p>
    </div>
    </form>
  </div>


    )
}

export default Login;