import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';


export default function AddStudent() {
  // State variables
  const [formData, setFormData] = useState({
    fullname: '',
    id: '',
    gender: '',
    email: '',
    year: '',
    branch: '',
    semester: '',
    course: '',
    section: '',
    faculty: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Event handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addstudent`, formData);
      if (response.status === 200) {
        setFormData({
          fullname: '',
          id: '',
          gender: '',
          dateofbirth:'',
          email: '',
          password:'',
          year: '',
          branch: '',
          semester: '',
          course: '',
          section: '',
          faculty: '',
          location: '',
          contact: ''
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
    <div className='addstudent-background'>
      <h3 align="center"><u>Add Student</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>ID</label>
          <input type='number' id="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>  
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Year</label>
          <input type="number" id="year" value={formData.year} onChange={handleChange} required />
        </div>
        <div>
          <label>Branch</label>
          <select id="branch" value={formData.branch} onChange={handleChange} required>
            <option value=""></option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="ai&ds">AI&DS</option>
            <option value="bba">BBA</option>
            <option value="mba">MBA</option>
            <option value="ba">BA</option>
          </select>
        </div>
        <div>
          <label>Semester</label>
          <select id="semester" value={formData.semester} onChange={handleChange} required>
            <option value="">Select Semester</option>
            <option value="odd">Odd</option>
            <option value="even">Even</option>
          </select>
        </div>
        <div>
          <label>Course</label>
          <select id="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="pfsd">PFSD</option>
            <option value="mswd">MSWD</option>
            <option value="jfsd">JFSD</option>
            <option value="aws">AWS</option>
          </select>
        </div>
        <div>
          <label>Section</label>
          <select id="section" value={formData.section} onChange={handleChange} required>
            <option value="">Select Section</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
          </select>
        </div>
        <div>
          <label>Faculty</label>
          <select id="faculty" value={formData.faculty} onChange={handleChange} required>
            <option value="">Select Faculty</option>
            <option value="j surya kiran">31-32 J Surya Kiran</option>
            <option value="seetha">33-34 Seetha</option>
            <option value="hari">35-36 Hari</option>
            <option value="akshay">37-38 Akshay</option>
          </select>
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="text" id="contact" value={formData.contact}pattern="[6789][0-9]{9}" placeholder="Must be 10 digits" onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}