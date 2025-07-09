import { React, useState } from 'react';
import lessonContent from '../LessonContent.jsx';

export default function Home() {
    const [imageErrors, setImageErrors] = useState({});
    const handleImageError = (lessonId) => {
      setImageErrors(prevErrors => ({
        ...prevErrors, 
        [lessonId]: true
      }));
    }

  return (
    <div>
      <div className="top-navigation">
        <h1 className="placeholder-for-logo">Logic Lab</h1>
        <div className="top-navigation-links">
          <a href={`/`}>Learn</a>
          <a href={`/progress`}>Progress</a>
          <a href={`/about`}>About</a>
        </div>
      </div>
      <div className="home-grid">
        <div className="lessons-column"> 
          {/* iterates through lessons, turning to jsx table of contents entries*/}
          {lessonContent.map((lesson, index) => ( 
            <div key={index} className="lesson-card">
              <a href={`/lesson/${index + 1}`} className="lesson-card-title">{lesson.title}</a>
              {!imageErrors[index + 1] ? (<img src={`/images/card${index + 1}.png`} className="lesson-card-image" onError={() => handleImageError(index + 1)}/>)
              : (<p>joy felt too lazy to put an image here</p>)}
            </div>
          ))}
        </div>
        <div className="topics-column"> 
          {/* edit this column later, needs to be responsive */}
          <div className="topics-card">
            <h2 className="topics-card-title">Intro to Fallacies</h2>
            <p className="topics-card-body">Learn the basics of logical reasoning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}