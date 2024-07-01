import React from 'react';
import CourseList from './CourseList';
import './CoursesYoung.css';

const CoursesYoung = () => {
    const audienceSlug = 'young';

    return (
        <div className='main__content-coursesyoung'>
            <h1>Темы для изучения</h1>
            <div className='content-container'>
                <CourseList audienceSlug={audienceSlug} />
            </div>
        </div>
    );
};

export default CoursesYoung;
