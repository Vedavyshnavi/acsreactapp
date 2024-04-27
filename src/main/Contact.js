import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

export default function Contact() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you should make your API call or perform your form submission logic
      // For demonstration purposes, I'm just setting a message
      setMessage('Form submitted successfully');
      setError('');
      
      // Clearing form fields after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="contact-background"> {/* Apply a class to style the container */}
      <h3 align="center" className='contact-header'><u>Contact Us</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea id="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}