import React from 'react';
import CourseList from './CourseList';
import './CoursesYoung.css';
import boy from './boy.png'

const CoursesYoung = () => {
    const audienceSlug = 'young';

    return (
        <div className='main__content-coursesyoung'>
            <h1>Темы для изучения</h1>
            <div className='content-container'>
                <CourseList audienceSlug={audienceSlug} />
                <div className='image-container'>
                    <img src={boy} alt='Student' className='student-image' />
                </div>
            </div>
        </div>
    );
};

export default CoursesYoung;
