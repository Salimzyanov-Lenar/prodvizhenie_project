import React from 'react';
import CourseList from './CourseList';

const CoursesYoung = () => {
    const audienceId = 1;

    return (
        <div className='main__content'>
            <p>Добро пожаловать на страницу молодежных курсов!</p>
            <CourseList audienceId={audienceId} />
        </div>
    );
};

export default CoursesYoung;
