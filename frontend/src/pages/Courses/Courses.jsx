import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    return (
        <div className='main__content'>
            <p>Добро пожаловать на страницу о курсах!</p>
            <nav>
                <Link to="/courses/courses_young"><button>Молодежные курсы</button></Link>
                <Link to="/courses/courses_old"><button>Курсы для взрослых</button></Link>
            </nav>
        </div>
    );
};

export default Courses;
