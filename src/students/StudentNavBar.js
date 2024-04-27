import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './student.css'; // Import the CSS file
import StudentHome from './StudentHome';
import StudentProfile from './StudentProfile';
import PurchaseCourse from '../purchase/PurchaseCourse';
import ViewCourses from './Viewcourses';


export default function StudentNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('/studentlogin');
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">Your Brand</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/studenthome" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/viewcourses" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/purchase" className="nav-link">Fee Payments</Link>
            </li>
            <li className="nav-item">
              <Link to="/studentprofile" className="nav-link">Student Profile</Link>
            </li>
          </ul>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <Routes>
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/purchase" element={<PurchaseCourse />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path='/viewcourses' element={<ViewCourses/>}/>
      </Routes>
    </div>
  );
}
