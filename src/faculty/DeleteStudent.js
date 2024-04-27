import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './faculty.css'
import config from '../config';

export default function DeleteStudent() {
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

  const deleteStudent = async (email) => {
    try {
      await axios.delete(`${config.url}/deletestudent/${email}`);
      fetchStudents();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div  className='delete-background'style={{ textAlign: 'center' }}>
      <h1> Delete Students</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Year</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Course</th>
              <th>Faculty</th>
              <th>Section</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student, index) => (
      <tr key={index}>
        <td>{student.fullname}</td>
        <td>{student.id}</td>
        <td>{student.email}</td>
        <td>{student.year}</td>
        <td>{student.branch}</td>
        <td>{student.semester}</td>
        <td>{student.course}</td>
        <td>{student.faculty}</td>
        <td>{student.section}</td>
        <td>
          <button onClick={() => deleteStudent(student.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="10">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}