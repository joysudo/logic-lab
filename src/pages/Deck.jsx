import { useState } from 'react';
import { lessonContent } from '../LessonContent.jsx';
import NavigationBar from '../components/NavigationBar';

export default function Deck() {
  const [activeCard, setActiveCard] = useState(null);
  
  const handleCardClick = (index) => {
    const card = document.getElementById(`card-${index}`);
    // cases where user clicks active card again
    if (activeCard === index) {
      if (card) {
        const rect = card.getBoundingClientRect();
        // reset everything
        card.style.transform = "translate(0, 0) rotateY(0)";
        void card.offsetWidth;
      }
      setTimeout(() => {
        setActiveCard(null);
      }, 300)
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
        requestAnimationFrame(() => activateCard(index));
      }, 300);
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
      <NavigationBar/>
      <div className="deck-card-container" >
        {activeCard === null && 
          <div className="deck-default-description-panel">
            <h1>This is the deck page.</h1>
            <p>The Deck is your personal archive of all the fallacies you've mastered. Once you've learned them, come here to find their descriptions and track your overall progress.</p>
          </div>
        }
        <div className="deck-card-wrapper"
          style={{paddingRight: `${parseInt(localStorage.getItem("completedLessonIndex") || "0", 10)*3}rem`}}
        >
          {lessonContent.slice(2, parseInt(localStorage.getItem("completedLessonIndex") || "0", 10)).map((card, index) => ( // remember to change this index if the number of intro lessons are changed
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