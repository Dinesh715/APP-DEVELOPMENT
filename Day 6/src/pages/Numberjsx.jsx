import React, { useState } from 'react';
import Chatjsx from './Chatjsx';
import family from '../Assets/family.png';
import Number from '../css/Number.css';
import rupee from '../Assets/rupee.png';
import mobile from '../Assets/mobile.png';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Numberjsx = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const nav = useNavigate();

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation: Check if the mobile number is 10 digits long
    if (mobileNumber.length !== 10) {
      toast.error('Mobile number must be 10 digits long.');
      return;
    }

    // You can add more advanced validation here if needed

    // Proceed with navigation or any other logic
    nav(`/history`);
  };

  return (
    <>
      <div>
        <Chatjsx />
        <div className='totalcontent'>
          <div className="totalrecharge">
            <div className='enterinputbox'>
              <img className='rupee' src={rupee} alt="Rupee Icon" />
              <div className='rechargename'>Recharge</div>
              <div className='addressing'>
                Enter your details to find the best prepaid plans.
              </div>
              <img className='mobile' src={mobile} alt="Mobile Icon" />
              <form onSubmit={handleSubmit}>
                <div className="entering number">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    className='mobilenumber'
                    placeholder='Mobile'
                    onChange={handleChange}
                    value={mobileNumber}
                  />
                  <br /><br />
                  <button class="button type1"></button>
                </div>
              </form>
            </div>
          </div>

          <div className='leftimage'>
            <img className='family' src={family} alt="Family Icon" />
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
};

export default Numberjsx;
