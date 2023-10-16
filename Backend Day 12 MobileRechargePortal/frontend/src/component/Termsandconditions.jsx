// src/components/TermsAndConditions.jsx
import React, { useState } from 'react';
import terms from '../Assets/CSS/terms.css'

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(true);
    // You can perform additional actions here when the user accepts the terms.
  };

  return (
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our mobile recharge service. Please read these Terms and Conditions
        carefully before using our website. By accessing or using the service,
        you agree to be bound by these terms.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our mobile recharge service, you agree to abide by these Terms and Conditions.
        If you do not agree to these terms, please do not use our service.
      </p>

      <h2>2. Service Description</h2>
      <p>
        Our service allows you to recharge your mobile devices, manage your account, and access
        various features related to mobile communication.
      </p>

      {/* Add more sections and content here */}

      {/* Checkbox for accepting terms */}
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
        />
        I accept the terms and conditions
      </label>

      {/* Accept button */}
      <button
        className="accept-button"
        onClick={handleAcceptance}
        disabled={!accepted}
      >
        Accept
      </button>
    </div>
  );
};

export default TermsAndConditions;
