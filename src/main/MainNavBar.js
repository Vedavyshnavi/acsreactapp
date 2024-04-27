import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AdminLogin from '../admin/AdminLogin';
import StudentLogin from '../students/StudentLogin';
import FacultyLogin from '../faculty/FacultyLogin';
import Contact from './Contact';
import './style.css'; 
import logo from './logo.png';

export default function MainNavBar({ onAdminLogin, onStudentLogin, onFacultyLogin }) {  
  return (
    <div className="container"> 
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Student Academic Course Registration System" width={100} height={40} />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="dropbtn">Login</Link>
              <div className="dropdown-content">
                <Link to="/studentlogin" className="dropdown-item">Student Login</Link>
                <Link to="/facultylogin" className="dropdown-item">Faculty Login</Link>
                <Link to="/adminlogin" className="dropdown-item">Admin Login</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/studentlogin" element={<StudentLogin onStudentLogin={onStudentLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/facultylogin" element={<FacultyLogin onFacultyLogin={onFacultyLogin}/>} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </div>
  );
}