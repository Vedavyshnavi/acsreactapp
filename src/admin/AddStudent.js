// AddStudent.js
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
    <div>
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
            <option value="me">ME</option>
            <option value="bio technology">BIO TECHNOLOGY</option>
            <option value="civil engineering">CIVIL ENGINEERING</option>
            <option value="agriulture">AGRICULTURE</option>
            <option value="bca">BCA</option>
            
          </select>
        </div>
        <div>
          <label>Semester</label>
          <select id="semester" value={formData.semester} onChange={handleChange} required>
            <option value="">Select Semester</option>
            <option value="odd">Odd</option>
            <option value="even">Even</option>
            <option value="acceleration">acceleration</option>
            <option value="summer term">summer term</option>
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
            <option value="dbms">DBMS</option>
            <option value="psqt">PSQT</option>
            <option value="os">OS</option>
            <option value="ds">DS</option>
            <option value="ep">EP</option>
            <option value="mp">MP</option>
            <option value="atfl">ATFL</option>
            <option value="ddais">DDAIS</option>
            <option value="daa">DAA</option>
          </select>
        </div>
        <div>
          <label>Section</label>
          <select id="section" value={formData.section} onChange={handleChange} required>
            <option value="">Select Section</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>

            
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>

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
            <option value="divya">11-12 divya</option>
            <option value="sridevi">13-14 sridevi</option>
            <option value="venubabu">15-16 venubabu</option>
            <option value="akshith">17-18 akshith</option>
            <option value="naveen">19-20 naveen</option>
            
            
            <option value="swetha">21-22 swetha</option>
            <option value="ajay">23-24 ajay</option>
            <option value="khashim">25-26 khashim</option>
            <option value="ajay">27-28 vyshnavi</option>
            <option value="ajay">29-30 priyanka</option>

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