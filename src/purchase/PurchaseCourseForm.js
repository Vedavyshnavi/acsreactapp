import React, { useState } from 'react';

const PurchaseCourseForm = ({
  courseName,
  paymentMethod,
  handleCourseNameChange,
  handlePaymentMethodChange,
}) => {
  // State to track payment status
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Function to simulate payment process
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate payment process (e.g., API call)
    // Upon successful payment, set paymentSuccess to true
    // For demonstration purposes, we're setting it directly
    setPaymentSuccess(true);
  };

  return (
    <div>
        <h3 align='center'>Payment process</h3>
      {!paymentSuccess ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={handleCourseNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>
          <button type="submit">Purchase</button>
        </form>
      ) : (
        <div>
          <h1>Payment Successful!</h1>
          <p>Thank you for purchasing the course.</p>
          {/* You can add additional content here */}
        </div>
      )}
    </div>
  );
};

export default PurchaseCourseForm;
