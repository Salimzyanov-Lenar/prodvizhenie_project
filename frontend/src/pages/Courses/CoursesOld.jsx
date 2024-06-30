import React from 'react';
import CourseList from './CourseList';

const CoursesOld = () => {
    const audienceId = 2;

    return (
        <div className='main__content'>
            <p>Добро пожаловать на страницу курсов для взрослых!</p>
            <CourseList audienceId={audienceId} />
        </div>
    );
};

export default CoursesOld;
