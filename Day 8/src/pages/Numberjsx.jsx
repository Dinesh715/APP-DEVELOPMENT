import React, { useState } from 'react';
import Chatjsx from './Chatjsx';
import business from '../Assets/business.png'
import Number from '../css/Number.css';
import rupee from '../Assets/rupee.png';
import mobile from '../Assets/mobile.png';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Numberjsx = () => {
  const dispatch=useDispatch();
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

    // dispatch(setMobileNumber(mobileNumber));
    // Proceed with navigation or any other logic
    nav(`/history`);
  };

  return (
    <>
      <div>
        <Chatjsx />
        <div className='totalcontent'>
        <div className='leftimage'>
            <img className='family' src={business} alt="Family Icon" />
          </div>
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
                  <button type="submit" className='rechargebutton'>
                    Recharge
                  </button>
                </div>
              </form>
            </div>
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
