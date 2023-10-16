// src/components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import about from '../Assets/CSS/about.css'

const About = () => {
  return (
    <div className="about">
        
      <h1>About Us</h1>
      <p>
        Welcome to our mobile recharge platform! We are dedicated to providing
        you with a seamless and convenient way to recharge your mobile devices.
        Whether you're topping up your prepaid plan or managing your postpaid
        account, we've got you covered.
      </p>
      <p>
        Our mission is to make mobile recharging quick, secure, and hassle-free.
        With our user-friendly interface and a wide range of payment options, you
        can recharge anytime, anywhere.
      </p>
      <p>
        Feel free to explore our website and get in touch with our support team
        if you have any questions or need assistance. Thank you for choosing us
        for your mobile recharge needs.
      </p>
      <footer className='about-foot'>
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
};

export default About;
