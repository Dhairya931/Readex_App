import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database ,ref,onValue} from './firebase';
import "./CourseDetails.css"

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const courseReff = ref(database,`courses/${id}`);
    onValue(courseReff, (snapshot) => {
      setCourse(snapshot.val());
    });
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className='course-details'>
      <h1>{course.name}</h1>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.status}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.prerequisites}</p>
      <div>
        <h2>Syllabus</h2>
        <details>
          <summary>Expand</summary>
          <ul>
          {course.syllabus.map((item, index) => (
            <li className="info" key={index}>{item}</li>
          ))}
        </ul>
        </details>
      </div>
    </div>
  );
};

export default CourseDetails;
