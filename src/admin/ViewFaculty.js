import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewFaculty() {
  const [faculty, setFaculty] = useState([]);

  const fetchFaculty = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculty`);
      setFaculty(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
useEffect(() => {
    fetchFaculty();
  }, []);
  return (
    <div className='viewstudent-background'style={{ textAlign: 'center' }}>
      <h1>View Faculty</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>ID</th>
              <th>Email</th>
              <th>Company</th>
              <th>Branch</th>
              <th>Course</th>
              <th>Section</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(faculty) && faculty.length > 0 ? (
    faculty.map((faculty, index) => (
      <tr key={index}>
        <td>{faculty.fullname}</td>
        <td>{faculty.gender}</td>
        <td>{faculty.dateofbirth}</td>
        <td>{faculty.id}</td>
        <td>{faculty.email}</td>
        <td>{faculty.company}</td>
        <td>{faculty.branch}</td>
        <td>{faculty.course}</td>
        <td>{faculty.section}</td>
        <td>{faculty.address}</td>
        <td>{faculty.contact}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="11">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}