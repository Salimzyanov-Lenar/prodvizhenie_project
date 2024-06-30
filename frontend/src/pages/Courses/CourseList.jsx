import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ audienceId }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/courses/${audienceId}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Добавим отладку
        setCourses(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, [audienceId]);

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;