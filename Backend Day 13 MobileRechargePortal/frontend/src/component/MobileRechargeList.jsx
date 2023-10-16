import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MobileRechargeList() {
  const [mobileRecharges, setMobileRecharges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/mobile-recharges')
      .then((response) => setMobileRecharges(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mobile Recharge List</h1>
      <ul>
        {mobileRecharges.map((recharge) => (
          <li key={recharge.id}>{recharge.name}, {recharge.number}, {recharge.sim}</li>
        ))}
      </ul>
      {/* Add navigation and other UI elements */}
    </div>
  );
}

export default MobileRechargeList;
