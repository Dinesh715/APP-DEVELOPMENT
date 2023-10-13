import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import '../Assets/CSS/main.css';
import { selectUser } from '../Redux/userSlice'
import { Link } from 'react-router-dom';
function Home() {
  // Use useSelector to access the 'user' state from the Redux store
  const user=useSelector(selectUser); 

  return (
    <div>

      <div className='ture-image'></div>
      <div className='plans-image'></div>
      <div className='pan-image'></div>
      <div className='apps-image'></div>
      <div className='jio-background'>
      </div>
      <div className='jio-bills-image'></div>
      <div className='jio-now'></div>
      <div  className='home-image'>
      <div className='home-text'>India's fastest true 5g</div>
      <div className='jio-ture-image'></div>
      <div className='jio-now-text'>Now in 7,543 neighbourhoods</div>
      <div className='jio-bills-text'>Easily recharge or pay bills online</div>
      
      <button class="jio-recharge-btn">
      <div class="text">
      Recharge
      </div>
      </button>
      </div>
      <div className='homepic'></div>
    <nav className='topnav'>
          <input
            className="sbar"
            name="text"
            type="text"
            placeholder="   Search..."
            ></input>
          <ul>
            <div className='active'>
              <Link to='/Home'><li><a href="#">Home</a></li></Link>
              <Link to='/Profile'><li><a href="#">Profile</a></li></Link>
              <Link to='/Recharge'><li><a href="#">Recharge</a></li></Link>
              <Link to='/Offer'><li><a href="#">Offers</a></li></Link>
              <Link to='/About'><li><a href="#">About</a></li></Link>
              <Link to='/' onClick={() => localStorage.clear()}><li><a href="#">Log Out</a></li></Link>
            </div>
          </ul>
        </nav>
    <div className='nav-bar-name'><h1>Hi, {user ? user.email : ''}</h1></div>
    <footer className='foot'>
      <div className='connect'>Connect with us</div>
      <Link to='https://twitter.com/reliancejio'><div className='twitter-link-image'></div></Link>
      <Link to='https://www.instagram.com/reliancejio/'><div className='insta-link-image'></div></Link>
      <Link to='https://www.facebook.com/Jio'><div className='fb-image'></div></Link>
      <div className='thin-line'></div>
      <div className='app-myjio'>Download My AIRTEL</div>
      <Link to='https://play.google.com/store/apps/details?id=com.jio.myjio'><div className='playstore'></div></Link>
      <Link to='https://apps.apple.com/us/app/myjio/id1074964262'><div className='ios'></div></Link>
      <div className='footer-jio-logo'></div>
      <div className='footer-text'>Copyright © 2023 Airtel Infocomm Ltd. All rights reserved.</div>
      <Link to={'/faq'}><div className='f-txt-2'>FAQ  |</div></Link>
      <Link to='/Privacy'><div className='f-txt-3'>Policies  |</div></Link>
      <Link to='/Terms'><div className='f-txt-4'>Terms & conditions</div></Link>      
    </footer>

    </div>
  );
}

export default Home;
