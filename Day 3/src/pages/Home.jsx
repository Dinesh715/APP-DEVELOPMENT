import React from 'react'
import Bar from '../assets/css/Bar.css'
import { Link } from 'react-router-dom'
import store from '../Redux/Store'
function Home() {
  return (
      <div className='imageairtel'>
    <div className='airtelsumma'>
        
    <nav className='leftnav'>
      <label className="navleft"></label>
      <ul>
        <div className='navbar'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Recharge</a></li>
        <li><a href="#">Offers</a></li>
        </div>
      </ul>
    </nav>
    <div className='centerdiv'>
    <nav className='topnav'>
        <input placeholder="Search Here" class="i" name="text" type="text"/>
      
      <ul>
        <div className='active'>
        <li><a href="#">About</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#"><Link to ={"/"}>Log Out</Link></a></li>
        </div>
      </ul>
    </nav>
    <h1>hi,{ store.getState().email}</h1>
    </div>

    </div>

        

    </div>
  )
}

export default Home