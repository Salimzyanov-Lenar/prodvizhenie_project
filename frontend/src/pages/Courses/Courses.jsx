import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    return (
        <div className='courses-container'>
            <h1 className='courses-title'>ВИДЫ КУРСОВ</h1>
            <div className='courses-content'>
                <div className='course-block'>
                    <Link to="/courses/courses_young" className='course-link'>
                        <div className='course-box'>
                            <p>Если вы универсальный или продвинутый пользователь, то эта страница для вас. Тренды, основа и вершина медиасферы ждут вас!</p>
                        </div>
                        <button className='course-button'>ПРОДОЛЖИТЬ</button>
                    </Link>
                </div>
                <div className='course-block'>
                    <Link to="/courses/courses_old" className='course-link'>
                        <div className='course-box'>
                            <p>Уроки на этой странице подойдут для тех, кто считает себя неопытным пользователем интернета и хочет изучить базу.</p>
                        </div>
                        <button className='course-button'>ПРОДОЛЖИТЬ</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;
