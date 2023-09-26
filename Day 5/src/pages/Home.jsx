import React from 'react'
import Bar from '../css/Bar.css';
import { Link } from 'react-router-dom';
import store from '../Redux/Store';
function Home() {
  return (
      <div className='imagevodafone'>
        <nav className='leftnav'>
      <label className="navleft"></label>
      <ul>
        <div className='navbar'>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Recharge</a></li>
        <li><a href="#">Offers</a></li>
        </div>
      </ul>
    </nav>
    <div>
        <nav className='topnav'>
      <label className="logo">Mobile Recharge</label>
      <ul>
        <div className='active'>
        <li><a href="#">About</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#"><Link to={"/"}>Log Out</Link></a></li>
        </div>
      </ul>
    </nav>
<div className='username '><h1>Welcome {store.getState().email}</h1></div>
    </div>
    </div>
  )
}

export default Home