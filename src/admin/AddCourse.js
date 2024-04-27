import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddCourse() {
  const [formData, setFormData] = useState({
    coursename: '',
    description: '',
    duration: '',
    price: '',
    file: null
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const fileInputRef = useRef(null); // Ref for the file input element

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('coursename', formData.coursename);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('duration', formData.duration);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/addcourse`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response && response.data) {
        setSuccessMessage(response.data);
        setFormData({
          coursename: '',
          description: '',
          duration: '',
          price: '',
          file: null
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='addevent-background'>
      <h3 align="center"><u>Add Course</u></h3>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Course Name:</label>
          <input type="text" id="coursename" value={formData.coursename} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" id="duration" value={formData.duration} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" id="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
