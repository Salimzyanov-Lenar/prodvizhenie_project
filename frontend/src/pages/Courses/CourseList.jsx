import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';
import logo from './logo.png';

const CourseList = ({ audienceSlug }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/courses/${audienceSlug}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCourses(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, [audienceSlug]);

  return (
    <div className='course-list'>
      {courses.map((course, index) => (
        <div key={course.id} className='course-item'>
          <Link to={`/course/${course.slug}`}>
            <div className='course-step'>{index + 1}</div>
            <img src={logo} alt='logo' className='course-logo' />
            <h2 className='course-title'>{course.title}</h2>
            <p className='course-description'>{course.description}</p>
            <img src={course.image} alt='' className='course-icon' />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
