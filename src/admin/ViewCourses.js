import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css'; // Assuming this is a custom CSS file for styling
import config from '../config'; // Assuming this is your configuration file for API URL

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className='addevent-background'>
      <h1 align="center">Courses</h1>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index}>
                <td>{course.coursename}</td>
                <td>{course.description}</td>
                <td>{course.duration}</td>
                <td>{course.price}</td>
                <td>
                  {course.file.endsWith('.jpg') || course.file.endsWith('.jpeg') || course.file.endsWith('.png') ? (
                    <img src={`${config.url}/courseimage/${course.file}`} alt="Course" style={{ width: '250px', height: '250px' }} />
                  ) : (
                    <a href={`${config.url}/courseimage/${course.file}`}>View Image</a>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align="center">No courses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
