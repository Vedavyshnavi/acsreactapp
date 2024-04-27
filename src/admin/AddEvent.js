import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    date: '',
    file: null
  });
 
  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
      formDataToSend.append('category', formData.category);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/createevent`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response && response.data) {
        setMessage(response.data);
        setError('');
        setFormData({
          category: '',
          title: '',
          description: '',
          date: '',
          file: null
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
        setMessage('');
      }
    }
  };

  return (
    <div className='addevent-background'>
      <h3 align="center"><u>Add Event</u></h3>
      {message && <h4 align="center">{message}</h4>}
      {error && <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Category</label>
          <select type="text" id="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="assignment">Assignment</option>
            <option value="exam">Exam</option>
          </select>
        </div>
        <div>
          <label>Title</label>
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Image</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
