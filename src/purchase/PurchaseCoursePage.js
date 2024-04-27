import React, { useState } from 'react';
import PurchaseCourseForm from './PurchaseCourseForm';

const PurchaseCoursePage = () => {
  // State to manage any messages or errors
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle successful course purchase
  const handlePurchaseSuccess = () => {
    setMessage('Course purchased successfully.');
    setError(null);
  };

  // Function to handle errors during course purchase
  const handlePurchaseError = (errorMessage) => {
    setMessage(null);
    setError(errorMessage);
  };

  return (
    <div>
      <h2>Purchase Course</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <PurchaseCourseForm
        onPurchaseSuccess={handlePurchaseSuccess}
        onPurchaseError={handlePurchaseError}
      />
    </div>
  );
};

export default PurchaseCoursePage;
