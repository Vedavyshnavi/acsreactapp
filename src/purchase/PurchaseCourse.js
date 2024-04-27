// PurchaseCourse.js

import React, { useState } from 'react';
import PurchaseCourseForm from './PurchaseCourseForm';

const PurchaseCourse = () => {
  // State to track payment status
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Function to simulate payment process
  const processPayment = () => {
    // Simulate payment process (e.g., API call)
    // Upon successful payment, set paymentSuccess to true
    // For demonstration purposes, we're setting it directly
    setPaymentSuccess(true);
  };

  return (
    <div>
      {!paymentSuccess ? (
        <PurchaseCourseForm processPayment={processPayment} />
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

export default PurchaseCourse;
