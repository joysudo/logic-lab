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
            // parseInt(localStorage.getItem("completedLessonIndex") || "0", 10)
            <div key={index} className="lesson-card">
              {index > parseInt(localStorage.getItem("completedLessonIndex") || "0", 10) && 
                <div className="lesson-card-locked">
                  <img src={`/images/sample-card-back.png`}></img>
                  <h1>{lesson.title}</h1>
                </div>
              }
              {index === parseInt(localStorage.getItem("completedLessonIndex") || "0", 10) && 
                <div className="lesson-card-play">
                  <a href={`/lesson/${index + 1}`} className="lesson-card-play-title">{lesson.title}</a>
                  <a href={`/lesson/${index + 1}`} className="lesson-card-play-button"></a>
                </div>
              }
              {index < parseInt(localStorage.getItem("completedLessonIndex") || "0", 10) && 
                <div className="lesson-card-unlocked">
                  <a href={`/lesson/${index + 1}`} className="lesson-card-title">{lesson.title}</a>
                  {!imageErrors[index + 1] ? (<img src={`/images/card${index + 1}.png`} className="lesson-card-image" onError={() => handleImageError(index + 1)}/>)
                  : (<p>joy felt too lazy to put an image here</p>)}
                </div>
              }
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