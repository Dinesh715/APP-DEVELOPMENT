import React from "react";
import { Link } from "react-router-dom";
import main from '../Assets/CSS/main.css'
import profile from '../Assets/CSS/profile.css'
function Profile(){
    return(

        <div>
             <div className='homepic'></div>
            <div class="card shadow">
            <div className='jio-tag'>Welcome to AIRTEL</div>
            <div className='jio-tag-login'>Log in to unlock a world of digital experiences.</div>
                <div class="group">
                <input required=""  type="number" class="input-ph"/>
                <span class="highlight"></span>
                <span class="pbar"></span>
                <label className='label-name'>Mobile Number</label>
                    <Link to='/Offer'><button class="btn-jio"> Continue
                    </button></Link>
                </div>
            </div>
            <div className="p-txt">Manage your Digital Life with the Airtel app</div>
            <div className="p1-txt">Recharge, pay bills, check balance
Shop, UPI, health
Movies, music, games
Instant help with AirtelCare</div>
<div className="qr-txt">Download Airtel App now</div>
<div className="scan-txt">Scan the QR code with your mobile to download the app.</div>
<div className="qr"></div>
<div className="tick-logo"></div>
<div className="tick-logo1"></div>
<div className="tick-logo2"></div>
<div className="tick-logo3"></div>
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
              <Link to='/'><li><a href="#">Log Out</a></li></Link>
            </div>
          </ul>
    </nav>
      <footer className='pfoot'>
      <div className='connect'>Connect with us</div>
      <Link to='https://twitter.com/reliancejio'><div className='twitter-link-image'></div></Link>
      <Link to='https://www.instagram.com/reliancejio/'><div className='insta-link-image'></div></Link>
      <Link to='https://www.facebook.com/Jio'><div className='fb-image'></div></Link>
      <div className='thin-line'></div>
      <div className='app-myjio'>Download Airtel App</div>
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
export default Profile;