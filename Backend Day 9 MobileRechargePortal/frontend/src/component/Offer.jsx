import React from "react";
import { Link } from "react-router-dom";
import offer from '../Assets/CSS/offer.css';

function Offer(){
    return(
        <div>
            <div className="offer-cont1">
                <div className="pricen1">₹299</div>
                <div className="va-3">VALIDITY</div>
                <div className="d1">28 Days</div>
                <div className="irr">BENEFITS</div>
                <div className="data">2GB/day</div>
                <div className="inline"></div>
                <button className="btn-rc3"><div className="rr-txt1">Recharge</div></button>
                <div className="jio-ture5g-logo-rc"></div>
                <div className="jiocinema"></div>
                <div className="jiotv"></div>
                <div className="jiocloud"></div>
                <div className="sub">SUBSCRIPTIONS</div>

            </div>

            <div className="offer-cont2">
                <div className="pricen1">₹1129</div>
                <div className="va-3">VALIDITY</div>
                <div className="d1">365 Days </div>
                <div className="irr">BENEFITS</div>
                <div className="data">2GB/day</div>
                <div className="inline"></div>
                <Link to='/successful'><button className="btn-rc3"><div className="rr-txt1">Recharge</div></button></Link>
                <div className="jio-ture5g-logo-rc"></div>
                <div className="jiocinema"></div>
                <div className="jiotv"></div>
                <div className="jiocloud"></div>
                <div className="netflix"></div>
                <div className="amazon"></div>
                <div className="sub">SUBSCRIPTIONS</div>

            </div>
        
            <div className="offer-thin-line"></div>
            <div className="offer-cont5">
                <div className="price1">₹499</div>
                <div className="t-l1"></div>
                <div className="va-1">VALIDITY</div>
                <div className="days">1 Day</div>
                <div className="ir">IR USAGE</div>
                <div className="voice">Voice 100 mins 500 SMS</div>
                <button className="btn-rc1"><div className="rr-txt1">Recharge</div></button>
            </div>
            
            <div className="offer-cont6">
                <div className="price">₹2499</div>
                <div className="t-l1"></div>
                <div className="va-1">VALIDITY</div>
                <div className="days">10 Days</div>
                <div className="ir">IR USAGE</div>
                <div className="voice">Voice 100 mins/day 500 SMS/day 250 Data</div>
                <button className="btn-rc1"><div className="rr-txt2">Recharge</div></button>
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
              <Link to='/'><li><a href="#">Log Out</a></li></Link>
            </div>
          </ul>
        </nav>
    x
    <footer className='ofoot'>
      <div className='connect'>Connect with us</div>
      <Link to='https://twitter.com/reliancejio'><div className='twitter-link-image'></div></Link>
      <Link to='https://www.instagram.com/reliancejio/'><div className='insta-link-image'></div></Link>
      <Link to='https://www.facebook.com/Jio'><div className='fb-image'></div></Link>
      <div className='thin-line'></div>
      <div className='app-myjio'>Download My JIO</div>
      <Link to='https://play.google.com/store/apps/details?id=com.jio.myjio'><div className='playstore'></div></Link>
      <Link to='https://apps.apple.com/us/app/myjio/id1074964262'><div className='ios'></div></Link>
      <div className='footer-jio-logo'></div>
      <div className='footer-text'>Copyright © 2023 Reliance Jio Infocomm Ltd. All rights reserved.</div>
      <Link to={'/faq'}><div className='f-txt-2'>FAQ  |</div></Link>
      <Link to='/Privacy'><div className='f-txt-3'>Policies  |</div></Link>
      <Link to='/Terms'><div className='f-txt-4'>Terms & conditions</div></Link>
    </footer>
        </div>
    );
}
export default Offer;