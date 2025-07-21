import React, { useRef, useState } from 'react';
import { lessonContent } from '../LessonContent.jsx';

export default function Deck() {
  const [activeCard, setActiveCard] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  
  const handleCardClick = (index) => {
    const card = document.getElementById(`card-${index}`);
    // cases where user clicks active card again
    if (activeCard === index) {
      if (card) {
        const rect = card.getBoundingClientRect();
        // resert everything
        // card.style.transition = "none";
        card.style.transform = "translate(0, 0) rotateY(0)";
        void card.offsetWidth;
        // card.style.transition = "transform 0.6s ease";
        // card.style.transform = "";
      }
      setTimeout(() => {
        setActiveCard(null);
      }, 600)
      return;
    }
    // cases where another card is active
    if (activeCard !== null) {
      const prevCard = document.getElementById(`card-${activeCard}`);
      if (prevCard) {
        const rect = prevCard.getBoundingClientRect();
        prevCard.style.transition = "transform 0.6s ease-out";
        prevCard.style.transform = "";
      }
      setTimeout(()=> {
        setActiveCard(null);
        requestAnimationFrame(() => activateCard(index));
      }, 600);
    } else {
      activateCard(index); 
    }
  };

  const activateCard = (index) => {
    const card = document.getElementById(`card-${index}`);
    const initialRect = card.getBoundingClientRect();

    setActiveCard(index);

    
    requestAnimationFrame(() => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const targetX = viewportWidth / 6 - initialRect.width / 6;
      const targetY = viewportHeight / 3.5 - initialRect.height / 3.5;
  
      // calculate offset from current position to target
      const offsetX = targetX - initialRect.left;
      const offsetY = targetY - initialRect.top;
  
      card.style.transition = "none";
      card.style.transform = `translate(0px, 0px) rotateY(0deg)`;
  
      void card.offsetWidth;
  
      card.style.transition = "transform 1s ease";
      card.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateY(360deg) scale(1.5)`;
      });
  };

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
      <div className="deck-card-container" style={{marginLeft: `-${lessonContent.length*3}rem`}}> {/* need to change this whenever offset of cards is changed */}
        <div className="deck-card-wrapper">
          {lessonContent.map((card, index) => (
              <div 
                key={index} 
                id={`card-${index}`}
                className={`deck-card${activeCard === index ? " deck-card-active" : ""}`} 
                onClick={() => handleCardClick(index)}
                style={{zIndex: `${index}`, left: `${index * 6}rem`}}
              > 
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
        <div className={`deck-card-description-panel ${activeCard !== null ? 'visible' : ''}`}>
          {activeCard !== null && (
            <div key={activeCard} className="deck-card-description">
              <h2>{lessonContent[activeCard].title}</h2>
              <p>{lessonContent[activeCard].description}</p>
            </div>
          )}
        </div>
    </div>
    <div className="deck-progress-border">
      <div className="deck-progress-interior" style={{width: `${(parseInt(localStorage.getItem("completedLessonIndex") || "0", 10))*100/(lessonContent.length)}%`}}></div>
    </div>
    <p>You have completed {((parseInt(localStorage.getItem("completedLessonIndex") || "0", 10))*100/(lessonContent.length)).toFixed(2)}% of the course.</p>
  </div>
  );
}