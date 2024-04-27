import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css'; 
import Registration from './Registration';
import AdminHome from './AdminHome';
import AddStudent from './AddStudent';
import AddFaculty from './AddFaculty';
import ViewStudents from './ViewStudents';
import ViewFaculty from './ViewFaculty';
import DeleteFaculty from './DeleteFaculty';
import DeleteStudent from './DeleteStudent';
import logo from './logo.png';
import UpdateStudentProfile from './UpdateStudentProfile';
import ChangeAdminPwd from './ChangeAdminPwd';
import AddEvents from './AddEvent';
import ViewEvents from './ViewEvent';
import AddCourse from './AddCourse';
import ViewCourses from './ViewCourses';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div className="container"> 
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" width={100} height={40} />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
         <li className='nav-item'>
         <Link to='/changepwd' className="nav-link">Change Password</Link>
         </li>
         <li className="nav-item dropdown">
              <Link className="dropbtn">Courses</Link>
              <div className="dropdown-content">
                <Link to="/addcourse" className="dropdown-item">Add Courses</Link>
                <Link to="/viewcourses" className="dropdown-item">View Courses</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="dropbtn">Students</Link>
              <div className="dropdown-content">
                <Link to="/registration" className="dropdown-item">Registration</Link>
                <Link to="/addstudent" className="dropdown-item">Add Students</Link>
                <Link to="/viewstudents" className="dropdown-item">View Students</Link>
                <Link to="/deletestudent" className="dropdown-item">Delete Students</Link>
                <Link to="/updatestudentprofile" className="dropdown-item" >Update Profile</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="dropbtn">Faculty</Link>
              <div className="dropdown-content">
                <Link to="/addfaculty" className="dropdown-item">Add Faculty</Link>
                <Link to="/viewfaculty" className="dropdown-item">View Faculty</Link>
                <Link to="/deletefaculty" className="dropdown-item">Delete Faculty</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="dropbtn">Events</Link>
              <div className="dropdown-content">
                <Link to="/addevents" className='dropdown-item'> Add Events</Link>
                <Link to="/viewevents" className='dropdown-item'> View Events</Link>
              </div>
            </li>
            <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path='/changepwd' element={<ChangeAdminPwd/>}/>
        <Route path='/addcourse' element={<AddCourse/>}/>
        <Route path='/viewcourses' element={<ViewCourses/>}/>
        <Route path='/registration' element={<Registration />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/viewstudents' element={<ViewStudents />} />
        <Route path='/updatestudentprofile' element={<UpdateStudentProfile/>}/>
        <Route path='/deletestudent' element={<DeleteStudent />} />
        <Route path='/addfaculty' element={<AddFaculty />} />
        <Route path='/viewfaculty' element ={<ViewFaculty/>} />
        <Route path='/deletefaculty' element={<DeleteFaculty/>}/>
        <Route path='/addevents' element={<AddEvents/>}/>
        <Route path='/viewevents' element={<ViewEvents/>}/>
        </Routes>
    </div>
  );
}