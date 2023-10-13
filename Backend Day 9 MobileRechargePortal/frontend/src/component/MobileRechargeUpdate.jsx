import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MobileRechargeUpdate({ match }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    sim: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8080/mobile-recharges/${match.params.id}`, formData)
      .then((response) => {
        console.log('Mobile recharge record updated:', response.data);
        // You can add further actions like redirecting or displaying a success message
      })
      .catch((error) => {
        console.error('Error updating mobile recharge record:', error);
        // Handle errors here
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/mobile-recharges/${match.params.id}`)
      .then((response) => {
        const { name, number, sim } = response.data;
        setFormData({
          name: name,
          number: number,
          sim: sim,
        });
      })
      .catch((error) => {
        console.error('Error fetching mobile recharge record:', error);
        // Handle errors here
      });
  }, [match.params.id]);

  return (
    <div>
      <h1>Update Mobile Recharge Record</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>SIM Type:</label>
          <input
            type="text"
            name="sim"
            value={formData.sim}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      {/* Add UI elements for navigation or error handling */}
    </div>
  );
}

export default MobileRechargeUpdate;
