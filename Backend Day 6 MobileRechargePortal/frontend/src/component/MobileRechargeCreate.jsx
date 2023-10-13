import React, { useState } from 'react';
import axios from 'axios';
import { rechargepost } from '../services/Api';
import { Link } from 'react-router-dom';

function MobileRechargeCreate() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const res=await rechargepost(formData);
    localStorage.setItem("name",res.data.name);
    localStorage.setItem("number",res.data.number);
    //const name=localStorage.getItem("name");
    //{name}
    //const phone=localStorage.getItem("number");
    //{number}
    console.log(res);
  };

  return (
    <div>
      <div>
    <div className='homepic'></div>
        

    <div onSubmit={handleSubmit} class="recharge-card shadow">
        <div className='recharge-jio-tag'>Recharge</div>
            <div className='recharge-jio-tag-login'>Enter your details to find the best prepaid plans.</div>
                
                <div class="recharge-group">
                  
                

                <div class="form__group-no field">
                <input class="form__field-no" 
                placeholder="Number"
                 required=""
                type="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                
                />
                <label for="name" class="form__label-no">Number</label>
                </div>

                <span class="recharge-highlight"></span>
                <span class="recharge-pbar"></span>
                <Link to='/Offer'><button  class='rch-btn-jio' type="submit"> CONTINUE</button></Link>
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
    </div>
  );
}

export default MobileRechargeCreate;
