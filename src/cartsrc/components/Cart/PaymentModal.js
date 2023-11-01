import React from 'react';
import Modal from 'react-modal';

import './PaymentModal.css';
const PaymentModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Payment Modal"
      className="payment-modal" // Add a class for styling
    >
      <div className="payment-content">
        <h2>Please Pay!!!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" name="amount" placeholder="Rs.100.00" />
          </div>

          <button className="pay-button" type="submit">
            Pay Now
          </button>
        </form>
      </div>
      <button onClick={closeModal} className="close-button">
        Close
      </button>
    </Modal>
  );
};

export default PaymentModal;
