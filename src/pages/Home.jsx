import { useState } from 'react';
import {unitDescription, lessonContent} from '../LessonContent.jsx';


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
          <a href={`/deck`}>Deck</a>
          <a href={`/about`}>About</a>
        </div>
      </div>
      <div className="lessons-column"> 
        {/* iterates through lessons, turning to jsx table of contents entries*/}
        {lessonContent.map((lesson, index) => {
          const isFirstLessonInUnit = lesson.unit !== currentUnitId;
          if (isFirstLessonInUnit) {currentUnitId = lesson.unit};
            return (
              <div className="lesson-unit-pair">
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
                  <div className="unit-info">
                    <div className="unit-card">
                      <h3>{unitDescription.find(u => u.id === lesson.unit)?.name}</h3>
                      <p>{unitDescription.find(u => u.id === lesson.unit)?.description}</p>
                    </div>
                    <div className="unit-progress-border">
                      <div className="unit-progress-interior" style={{width: lessonContent.findIndex(obj => obj.unit === currentUnitId) > completedLessonIndex ? '0%'
                          : `${(completedLessonIndex - lessonContent.findIndex(obj => obj.unit === currentUnitId))/(lessonContent.filter(obj => obj.unit === currentUnitId).length)*100}%`
                      }}></div>
                    </div>
                  </div>
                )}
              </div>)
            }
          )
        }
      </div>
    </div>
  );
}