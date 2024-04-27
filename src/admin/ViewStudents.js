import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudents`);
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> View Students</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>ID</th>
              <th>Year</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Course</th>
              <th>Faculty</th>
              <th>Section</th>
              
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((students, index) => (
      <tr key={index}>
        <td>{students.fullname}</td>
        <td>{students.id}</td>
        <td>{students.year}</td>
        <td>{students.branch}</td>
        <td>{students.semester}</td>
        <td>{students.course}</td>
        <td>{students.faculty}</td>
        <td>{students.section}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}