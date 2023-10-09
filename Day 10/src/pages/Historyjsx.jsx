import React from 'react'
import React, { useState } from 'react';
import RechargeHistory from './RechargeHistory';
import Numberjsx from './Numberjsx';
const Historyjsx = () => {
    const [mobileNumber, setMobileNumber] = useState('');
  
    const handleMobileNumberSubmit = (newMobileNumber) => {
      setMobileNumber(newMobileNumber);
    };
  return (
    <div>
        {mobileNumber ? (
        <RechargeHistory mobileNumber={mobileNumber} />
      ) : (
        <MobileNumberInput onMobileNumberSubmit={handleMobileNumberSubmit} />
      )}
    </div>
  )
}

export default Historyjsx


