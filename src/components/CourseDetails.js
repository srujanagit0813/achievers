// components/CourseDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './PerfectCourseSection'; // import course data

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses[parseInt(id)];

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    // Use course.image, course.title, etc., instead of hardcoded values
    <div>
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{course.category} - {course.duration}</p>
      <p>Author: {course.author}</p>
      <p>Lessons: {course.lessons}</p>
      <p>Price: ${course.price} (Old: ${course.oldPrice})</p>
      {/* Add your existing styled layout here */}
    </div>
  );
};

export default CourseDetails;
