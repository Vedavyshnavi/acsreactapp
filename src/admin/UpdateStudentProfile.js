import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';
import config from '../config';

export default function UpdateStudentProfile() {
  const [studentData, setStudentData] = useState({
    fullname: '',
    id: '',
    gender: '',
    dateofbirth:'',
    email: '',
    year: '',
    branch: '',
    semester: '',
    course: '',
    section: '',
    faculty: '',
    location:'',
    contact:'',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [initialStudentData, setInitialStudentData] = useState({});

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student');
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
      setInitialStudentData(parsedStudentData); // Store initial student data
    }
  }, []);

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {};
      for (const key in studentData) {
        if (studentData[key] !== initialStudentData[key] && initialStudentData[key] !== '') {
          updatedData[key] = studentData[key]; 
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        // There are changes
        updatedData.email = studentData.email;
        const response = await axios.put(`${config.url}/updatestudentprofile`, updatedData);
        setMessage(response.data);
        setError('');
        localStorage.setItem("student", JSON.stringify(updatedData)); // Update local storage with updated data
      } else {
        // No changes
        setMessage("No Changes in Student Profile");
        setError("");
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div className='update-background'>
      <h3 align="center"><u>Update Profile</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={studentData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>ID</label>
          <input type='number' id="id" value={studentData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={studentData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>  
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dateofbirth" value={studentData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={studentData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Year</label>
          <input type="number" id="year" value={studentData.year} onChange={handleChange} required />
        </div>
        <div>
          <label>Branch</label>
          <select id="branch" value={studentData.branch} onChange={handleChange} required>
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
          <select id="semester" value={studentData.semester} onChange={handleChange} required>
            <option value="">Select Semester</option>
            <option value="odd">Odd</option>
            <option value="even">Even</option>
          </select>
        </div>
        <div>
          <label>Courses</label>
          <select id="course" value={studentData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="pfsd">PFSD</option>
            <option value="mswd">MSWD</option>
            <option value="jfsd">JFSD</option>
            <option value="aws">AWS</option>
          </select>
        </div>
        <div>
          <label>Section</label>
          <select id="section" value={studentData.section} onChange={handleChange} required>
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
          <select id="faculty" value={studentData.faculty} onChange={handleChange} required>
            <option value="">Select Faculty</option>
            <option value="j surya kiran">31-32 J Surya Kiran</option>
            <option value="seetha">33-34 Seetha</option>
            <option value="hari">35-36 Hari</option>
            <option value="akshay">37-38 Akshay</option>
          </select>
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={studentData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="text" id="contact" value={studentData.contact}pattern="[6789][0-9]{9}" placeholder="Must be 10 digits" onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}