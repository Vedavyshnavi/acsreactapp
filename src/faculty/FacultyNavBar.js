import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './faculty.css'; // Import the CSS file
import FacultyHome from './FacultyHome';
import FacultyProfile from './FacultyProfile';
import StudentRegistration from './StudentRegistration';
import AddCourses from './AddCourses';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import DeleteStudent from './DeleteStudent';
import ViewCourses from './ViewCourses';

export default function FacultyNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');

    navigate('/facultylogin');
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">Your Brand</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link align='right'to="/facultyhome" className="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
              <Link className="dropbtn">Students</Link>
              <div className="dropdown-content">
                <Link to="/registration" className="dropdown-item">Registration</Link>
                <Link to="/addstudent" className="dropdown-item">Add Students</Link>
                <Link to="/viewstudents" className="dropdown-item">View Students</Link>
                <Link to="/deletestudent" className="dropdown-item">Delete Students</Link>
                {/* <Link to="/updatestudentprofile" className="dropdown-item" >Update Profile</Link> */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="dropbtn">Courses</Link>
              <div className="dropdown-content">
                <Link to="/addcourse" className="dropdown-item">Add Courses</Link>
                <Link to="/viewcourses" className="dropdown-item">View Courses</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link align='right'to="/facultyprofile" className="nav-link">Faculty Profile</Link>
            </li>
          </ul>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <Routes>
        <Route path="/facultyhome" element={<FacultyHome />} exact />
        <Route path="/facultyprofile" element={<FacultyProfile />} exact />
        <Route path='/registration' element={<StudentRegistration/>} exact/>
        <Route path='/addstudent' element={<AddStudent/>} exact />
        <Route path='/viewstudents' element={<ViewStudents/>} exact />
        <Route path='/deleteStudent' element={<DeleteStudent/>} exact />
        <Route path='/addcourse' element={<AddCourses/>} exact/>
        <Route path='/viewcourses' element={<ViewCourses/>} exact />
      </Routes>
    </div>
  );
}