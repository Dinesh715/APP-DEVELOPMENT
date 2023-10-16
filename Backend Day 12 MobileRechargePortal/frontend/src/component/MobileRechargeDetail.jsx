import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MobileRechargeDetail({ match, history }) {
  const [mobileRecharge, setMobileRecharge] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/mobile-recharges/${match.params.id}`)
      .then((response) => setMobileRecharge(response.data))
      .catch((error) => {
        console.error('Error fetching mobile recharge record:', error);
        // Handle errors here
      });
  }, [match.params.id]);

  const handleDelete = () => {
    // axios.delete(`http://localhost:8080/mobile-recharges/${match.params.id}`)
    //   .then(() => {
    //     console.log('Mobile recharge record deleted.');
    //     // You can add further actions like redirecting or displaying a success message
    //   })
    //   .catch((error) => {
    //     console.error('Error deleting mobile recharge record:', error);
    //     // Handle errors here
    //   });
  };

  if (!mobileRecharge) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Mobile Recharge Details</h1>
      <p>Name: {mobileRecharge.name}</p>
      <p>Number: {mobileRecharge.number}</p>
      <p>SIM Type: {mobileRecharge.sim}</p>
      <button onClick={handleDelete}>Delete</button>
      {/* Add UI elements for navigation or error handling */}
    </div>
  );
}

export default MobileRechargeDetail;
