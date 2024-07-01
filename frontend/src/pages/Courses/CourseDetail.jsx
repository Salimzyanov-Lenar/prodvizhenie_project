import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import './CourseDetail.css';

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/course/${slug}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Добавим отладку
        setCourse(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, [slug]);

  const handleNextVideo = () => {
    if (course && course.audience) {
      fetch(`http://127.0.0.1:8000/api/course/${slug}/next/${course.audience.slug}/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("Next course data: ", data); // Добавим отладку
          if (data.slug) {
            navigate(`/course/${data.slug}`);
          } else {
            console.error("Next course slug is undefined");
          }
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-detail">
      <YoutubeEmbed embedId={course.video_id} />
      <div className="course-buttons-container">
        <div className="course-buttons">
          {course.files_link && (
            <a href={course.files_link} target="_blank" rel="noopener noreferrer" className="button files-button">
              ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ
            </a>
          )}
          <button onClick={handleNextVideo} className="button next-button">СЛЕДУЮЩИЙ УРОК</button>
        </div>
        <img src="/images/newspaper.png" alt="Next Lesson" className="background-image" />
      </div>
    </div>
  );
};

export default CourseDetail;
