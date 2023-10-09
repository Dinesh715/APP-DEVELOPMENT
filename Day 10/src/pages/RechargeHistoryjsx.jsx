import React, { useState } from 'react';
import Chatjsx from './Chatjsx';
import Rechargecss from '../css/RechargeHistorycss.css';
import store from '../Redux/Store';
function RechargeHistory() {
 
  return (
    <div>
        <Chatjsx/>
      <h2><div className="heading">Recharge History</div></h2>
      <table>
        <thead>
          <tr>
          <p><br></br><div className='usernamealignm'>{store.getState().mobileNumber}</div></p>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default RechargeHistory;
