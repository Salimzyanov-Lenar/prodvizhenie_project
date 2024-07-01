import React from 'react';
import CourseList from './CourseList';
import './CoursesOld.css';

const CoursesOld = () => {
    const audienceSlug = 'old';

    return (
        <div className='main__content-coursesold'>
            <h1>Темы для изучения</h1>
            <div className='content-container'>
                <CourseList audienceSlug={audienceSlug} />
            </div>
        </div>
    );
};

export default CoursesOld;
