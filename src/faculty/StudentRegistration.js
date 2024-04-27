import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function StudentRegistration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    id:'',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    year:'',
    branch:'',
    semester:'',
    course:'',
    section:'',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertjobseeker`, formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullname: '',
          id:'',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          year:'',
          branch:'',
          semester:'',
          course:'',
          section:'',
          contact: ''
        });
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Student Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>ID</label>
          <input type='number' id="id" value={formData.id} onChange={handleChange} required/>
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
            <option value="">Select Gender</option>
            <option value="odd">Odd</option>
            <option value="even">Even</option>
            </select>
        </div>
        
        <div>
          <label>Courses</label>
          <select id="courses" value={formData.courses} onChange={handleChange} required>
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
            <option value="31">33</option>
            <option value="31">34</option>
            <option value="31">35</option>
            <option value="31">36</option>
            <option value="31">37</option>
            <option value="31">38</option>
            <option value="31">39</option>
            </select>
        </div>
        <div>
          <label>Contact</label>
          <input type="text" id="contact" value={formData.contact}pattern="[6789][0-9]{9}" placeholder="Must be 10 digits" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}