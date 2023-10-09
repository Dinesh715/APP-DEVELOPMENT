import React from 'react'
import Chatcss from '../css/Chatcss.css';
import store from '../Redux/Store';
import { Link } from 'react-router-dom';
import Sidenav from './Sidenav';
import facebook from '../Assets/facebook.png';
import insta from '../Assets/insta.png';
import linkedin from '../Assets/linkedin.webp';
function Chatjsx() {
  return (
    <>
    <div className="app-container">
        
      <header className="navbar navbar-top">
        <div className="logo">Mobile Recharge Portal</div>
        <nav className="nav-links">
          <a href="/recharge">Home</a>
          <a href="/plans">Ideas for you</a>
          <a href="/iservice">International Services</a>

        </nav>
      </header>
      
    </div>
      <footer className="navbar navbar-bottom">
        <nav className="nav-links">
          <a href="/faq">FAQ</a>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/">Log Out</a>
        </nav>
        <div class="social-media">
            <a href="https://www.facebook.com/"><img className='facebook' src={facebook}></img></a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><img className='facebook' src={insta}></img></a>
            <a href="https://www.linkedin.com/login"><img className='facebook' src={linkedin}></img></a>
            
        </div>
      </footer>
      </>
  )
}

export default Chatjsx