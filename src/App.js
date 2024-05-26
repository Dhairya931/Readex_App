import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import StudentDashboard from './StudentDashboard';
import Navbar from './navbar';
import './index.css';
import "./App.css"

function App(){
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
