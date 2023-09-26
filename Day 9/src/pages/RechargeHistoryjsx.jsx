import React, { useState } from 'react';
import Chatjsx from './Chatjsx';
import Rechargecss from '../css/RechargeHistorycss.css';
import store from '../Redux/Store';
import { useSelector } from 'react-redux/es/hooks/useSelector';
function RechargeHistory() {
  // const mobileNumber = useSelector((state) => state.mobileNumber);

  // console.log(mobileNumber);
  return (
    <div>
        <Chatjsx/>
      <h2><div className="heading">Recharge History</div></h2>
      <table>
        <thead>
          <tr>
          <p><br></br><div className='usernamealignm'> Your mobile number: 1122334455 has been successfully recharged</div></p>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default RechargeHistory;
