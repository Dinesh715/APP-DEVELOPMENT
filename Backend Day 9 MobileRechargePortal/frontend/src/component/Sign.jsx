import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import Axios or your preferred HTTP library.
import '../Assets/CSS/Sign.css';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../services/Api';

const Sign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log( "Hellloooooooooo");
    try {
      // Send the form data to the backend using Axios or your preferred method.
      const response = await userRegister(formData);

      console.log(formData);
      localStorage.setItem("Token",response.data.token);
      localStorage.setItem("name",formData.name);
      localStorage.setItem("email",formData.email);
      // Handle the response as needed.
      
          if(response.data.token != null) {

            navigate('/home')
          }
    } catch (error) {
      // Handle errors, e.g., show an error message to the user.
      console.error('Error:', error);
    }
  };

  return (
    <form className="f" onSubmit={handleSubmit}>
      <div className='sign-img'></div>
      <div className="inputForm">
        <input
          placeholder="Enter your username"
          className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoFocus
        />
      </div>

      <div className="inputForm">
        <input
          placeholder="Enter your Email"
          className="input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputForm">
        <input
          placeholder="Enter your Password"
          className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputForm">
        <input
          placeholder="Enter your phone number"
          className="input"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={10}
        />
      </div>

      <button type="submit" className="button-submit">
        Sign Up
      </button>

      <p className="p">
        Already have an account?{' '}
        <span className="span">
          <Link to="/">Sign In</Link>
        </span>
      </p>
    </form>
  );
};

export default Sign;
