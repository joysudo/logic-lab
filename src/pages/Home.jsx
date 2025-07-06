import { React, useState } from 'react';

export default function Home() {
    const lessons = [
      { id: 1, title: "What's an Argument?" },
      { id: 2, title: "Validity v. Soundness" },
      { id: 3, title: "Deducing the Deductive" },
      { id: 4, title: "Affirming the Consequent" },
      { id: 5, title: "Denying the Antecedent" },
      { id: 6, title: "The Undistributed Middle" },
      { id: 7, title: "Ad Hominem" },
      { id: 8, title: "Appeal to Emotion" }
    ];
  
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
          {lessons.map(lesson => ( 
            <div key={lesson.id} className="lesson-card">
              <a href={`/lesson/${lesson.id}`} className="lesson-card-title">{lesson.title}</a>
                {!imageErrors[lesson.id] ? (<img src={`/images/card${lesson.id}.png`} className="lesson-card-image" onError={() => handleImageError(lesson.id)}/>)
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