import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { database,ref,onValue } from './firebase';
import './CourseList.css'
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const coursesRef = ref(database,'courses');
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      const courseList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      setCourses(courseList);
    });
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='containers'>
        <h1>Course </h1>
      <input
        type="text"
        placeholder="Search by course or instructor"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul className='courses'>
        {filteredCourses.map(course => (
          <li className='item' key={course.id}>
            <Link to={`/courses/${course.id}`}>
                <div>
                    <h3 className='course-name'>{course.name}</h3>
                    <p className='course-instructor'>By:{course.instructor}</p>
                    <p className='course-like'>Likes:{course.likes}</p>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
