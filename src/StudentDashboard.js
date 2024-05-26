import React, { useState, useEffect } from 'react';
import { database ,ref, onValue } from './firebase';
import "./StudentDashboard.css"
const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const coursesRef = ref(database, 'enrolledCourses');
    onValue(coursesRef, (snapshot) => {
      const coursesData = snapshot.val();
      const coursesArray = coursesData ? Object.keys(coursesData).map(key => ({ id: key, ...coursesData[key] })) : [];
      setEnrolledCourses(coursesArray);
    });
  }, []);


  return (
    <div className='container'>
      <h1 className='head'>Enrolled Courses</h1>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <img src={course.thumbnail} alt={course.name} />
            <div>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <div>
                <progress value={course.progress} max="100"></progress>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
