import { React, useState } from 'react';
import lessonContent from '../LessonContent.jsx';

const units = [
  {id: 1, name: "Intro to Logic & Argument", description: "This unit teaches you how to spot and understand arguments. You'll learn that arguments have reasons (premises) that lead to a main point (conclusion), and how to tell if an argument is built well (valid) and makes sense in the real world (sound). You'll also discover different types of arguments, like those that try to prove something for sure (deductive) and those that just try to show it's likely (inductive)."},
  {id: 2, name: "Formal Fallacies", description: "In this unit, you'll learn about mistakes in the structure of an argument. These mistakes make an argument's conclusion not necessarily follow from its premises, even if the premises are true. You'll explore common errors like affirming the consequent, denying the antecedent, and the undistributed middle."},
  {id: 3, name: "Informal Fallacies I - Fallacies of Relevance", description: "This unit focuses on arguments that try to trick you by bringing up information that doesn't actually relate to the main point. You'll learn about ad hominem attacks, trying to win by twisting someone's words, and changing the subject entirely."},
]

export default function Home() {
  let currentUnitId = null;
  const completedLessonIndex = parseInt(localStorage.getItem("completedLessonIndex") || "0", 10)  
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
      <div className="lessons-column"> 
        {/* iterates through lessons, turning to jsx table of contents entries*/}
        {lessonContent.map((lesson, index) => {
          const isFirstLessonInUnit = lesson.unit !== currentUnitId;
          if (isFirstLessonInUnit) {currentUnitId = lesson.unit};
            return (
              <div className="lesson-topic-pair">
                <div key={index} className="lesson-card" style={index === completedLessonIndex ? {backgroundColor:'#738175'} : undefined}>
                  {index > completedLessonIndex && 
                    <div className="lesson-card-locked">
                      <img src={`/images/sample-card-back.png`}></img>
                      <h1>{lesson.title}</h1>
                    </div>
                  }
                  {index === completedLessonIndex && 
                    <div className="lesson-card-play">
                      <a href={`/lesson/${index + 1}`} className="lesson-card-play-title">{lesson.title}</a>
                      <a href={`/lesson/${index + 1}`} className="lesson-card-play-button"></a>
                    </div>
                  }
                  {index < completedLessonIndex && 
                    <div className="lesson-card-unlocked">
                      <a href={`/lesson/${index + 1}`} className="lesson-card-title">{lesson.title}</a>
                      {!imageErrors[index + 1] ? (<img src={`/images/card${index + 1}.png`} className="lesson-card-image" onError={() => handleImageError(index + 1)}/>)
                      : (<p>joy felt too lazy to put an image here</p>)}
                    </div>
                  }
                </div>
                {(isFirstLessonInUnit) && (
                  <div className="topics-card">
                    <h3>{units.find(u => u.id === lesson.unit)?.name}</h3>
                    <p>{units.find(u => u.id === lesson.unit)?.description}</p>
                  </div>
                )}
              </div>)
        })}
      </div>
    </div>
  );
}