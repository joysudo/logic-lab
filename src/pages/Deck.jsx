import React, { useState, useEffect } from 'react';
import { lessonContent } from '../LessonContent.jsx';

export default function Deck() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  
  return (
    <div className="deck-page">
      <div className="top-navigation">
        <h1 className="placeholder-for-logo">Logic Lab</h1>
        <div className="top-navigation-links">
          <a href={`/`}>Learn</a>
          <a href={`/deck`}>Deck</a>
          <a href={`/about`}>About</a>
        </div>
      </div>
      <div className="deck-card-container">
        <div className="deck-card-wrapper">
          {lessonContent.map((card, index) => (
              <div key={index} className={`deck-card${activeCard === index ? "-active" : ""}`} style={{ zIndex: index,left: activeCard === index? null : `${index*10}rem`}}>
                <div className="deck-card-back">
                  <img src={`/images/sample-card-back.png`}></img>
                </div>
                <div className="deck-card-front">
                  <h3>{card.title}</h3>
                  <img src={`/images/card${index + 1}.png`}></img>
                </div>
              </div>
          ))}
        </div>
    </div>
    <div className="deck-progress-border">
      <div className="deck-progress-interior" style={{width: `${(parseInt(localStorage.getItem("completedLessonIndex") || "0", 10))*100/(lessonContent.length)}%`}}></div>
    </div>
  </div>
  );
}