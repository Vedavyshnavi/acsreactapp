import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddFaculty() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    fullname: '',
    id: '',
    email:'',
    branch: '',
    course: '',
    section:''
   
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const changetext = (e)=>{
       const txt =  e.target.value.toUpperCase()
       e.target.value = txt
  }
  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}addfaculty`, formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          gender:'',
          dateofbirth:'',
          id: '',
          email:'',
          branch: '',
          company:'',
          course: '',
          section: '',
          address:'',
          contact:'',
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div className='addstudent-background'>
      <h3 align="center"><u>Add Faculty</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} onKeyUp={changetext}required />
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
          <label>Company Name</label>
          <input type="text" id="company" value={formData.company} onChange={handleChange} required />
        </div>
        <div></div>
        <div>
          <label>ID</label>
          <input type='number' id="id" value={formData.id} onChange={handleChange} required/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Branch</label>
          <select id="branch" value={formData.branch} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="ai&ds">AI&DS</option>
            <option value="bba">BBA</option>
            <option value="mba">MBA</option>
            <option value="ba">BA</option>
          </select>
        </div>
        <div>
          <label>Courses</label>
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
          <label>Address</label>
          <textarea type="text" id="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}