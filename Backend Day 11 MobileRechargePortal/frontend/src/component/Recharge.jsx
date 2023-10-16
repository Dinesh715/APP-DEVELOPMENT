import React from "react";
import { Link } from 'react-router-dom';
import recharge from '../Assets/CSS/recharge.css';
import { setMobileNumber } from "../Redux/rechargeSlice";
import { useDispatch } from "react-redux";
function Recharge (){
  const dispatch = useDispatch();
  const handleMobileNumberChange = (e) => {
    const mobileNumber = e.target.value;
    dispatch(setMobileNumber(mobileNumber));
  };
    return(
<div>
    <div className='homepic'></div>
        

    <div class="recharge-card shadow">
        <div className='recharge-jio-tag'>Recharge</div>
            <div className='recharge-jio-tag-login'>Enter your details to find the best prepaid plans.</div>
                <div class="recharge-group">
                <div class="form__group field">
                   <input required=""class="form__field" type="input" onChange={handleMobileNumberChange} />
                <label class="form__label" for="name">Mobile  Number</label></div>
                <span class="recharge-highlight"></span>
                <span class="recharge-pbar"></span>
                <Link to='/Offer'><button class="recharge-btn-jio"> Continue</button></Link>
                </div>
      <div className="rs-logo"></div>
      <div className="conv-logo"></div>
    </div>
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
    <footer className='rfoot'>
      <div className='connect'>Connect with us</div>
      <Link to='https://twitter.com/reliancejio'><div className='twitter-link-image'></div></Link>
      <Link to='https://www.instagram.com/reliancejio/'><div className='insta-link-image'></div></Link>
      <Link to='https://www.facebook.com/Jio'><div className='fb-image'></div></Link>
      <div className='thin-line'></div>
      <div className='app-myjio'>Download AIRTEL APP</div>
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
export default Recharge;