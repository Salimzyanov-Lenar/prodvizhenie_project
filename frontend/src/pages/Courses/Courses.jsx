import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    return (
        <div className='courses-container'>
            <h1 className='courses-title'>ЗАГОЛОВОК</h1>
            <div className='courses-content'>
                <div className='course-block'>
                    <Link to="/courses/courses_young" className='course-link'>
                        <div className='course-box'>
                            <p>Здесь может быть описание молодежных курсов или другая информация, заполняющая весь блок.</p>
                        </div>
                        <button className='course-button'>МОЛОДЕЖНЫЕ КУРСЫ</button>
                    </Link>
                </div>
                <div className='course-block'>
                    <Link to="/courses/courses_old" className='course-link'>
                        <div className='course-box'>
                            <p>Здесь может быть описание курсов для взрослых или другая информация, заполняющая весь блок.</p>
                        </div>
                        <button className='course-button'>КУРСЫ ДЛЯ ВЗРОСЛЫХ</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;
