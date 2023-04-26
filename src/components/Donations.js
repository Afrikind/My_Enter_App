import React, { useState } from "react";
import './module.css';

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleDonate = (event) => {
    event.preventDefault();
    // Code to process donation
  };

  return (
    <div className="donation-container">
      <form onSubmit={handleDonate}>
        <label>
          Donation Amount:
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Card Name:
          <input
            type="text"
            placeholder="Enter card name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            placeholder="Enter expiry date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </label>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donation;
