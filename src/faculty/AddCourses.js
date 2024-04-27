import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddCourses() {
  const [formData, setFormData] = useState({
    coursename: '',
    description: '',
    duration: '',
    imageUrl: '',
    price: 0,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = {
        coursename: formData.coursename,
        description: formData.description,
        duration: formData.duration,
        file: formData.imageUrl, // Assuming imageUrl contains the image URL
        price: formData.price
      };
  
      const response = await axios.post(`${config.url}/addcourses`, formDataToSend);
  
      if (response.status === 200) {
        setFormData({
          coursename: '',
          description: '',
          duration: '',
          imageUrl: '',
          price: 0,
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  

  return (
    <div >
      <h3 align="center"><u>Add Course</u></h3>
      {message ? <h4 align="center">{message}</h4> : null}
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit}>
      <div>
  <label>Course Name</label>
  <input type="text" id="coursename" value={formData.coursename} onChange={handleChange} required />
</div>
<div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration</label>
          <input type="date" id="duration" value={formData.duration} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" id="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" id="price" value={formData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}