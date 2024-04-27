import React, { useEffect, useState } from 'react';
import './student.css';
// import profile from './Divya.jpg'

export default function StudentProfile() {
  // <img src={profile} alt='profile' width="40%"  />
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student');
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
    }
  }, []);

  return (
    studentData ? (
      <div className='profile-card'>
        <p><strong>Full Name:</strong> {studentData.fullname}</p>
        <p><strong>ID:</strong>{studentData.id}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
        <p><strong>Branch</strong> {studentData.branch}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Location:</strong> {studentData.location}</p>
        <p><strong>Contact:</strong> {studentData.contact}</p>
      </div>
    ) : (
      <p>No Student Data Found</p>
    )
  );
}