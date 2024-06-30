import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/course/${id}/`)
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
  }, [id]);

  const handleNextVideo = () => {
    fetch(`http://127.0.0.1:8000/api/course/${id}/next/${course.audience}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => navigate(`/course/${data.id}`))
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <YoutubeEmbed embedId={course.video_id} />
      <button onClick={handleNextVideo}>Next Video</button>
    </div>
  );
};

export default CourseDetail;
