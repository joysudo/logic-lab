import { useState, useEffect } from 'react';
import { lessonContent} from '../LessonContent.jsx';

export default function Matching() {
  const fallacies = lessonContent.slice(2).map(obj => ({name: obj.title, definition: obj.definition}));
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([])

  // initialize cards
  useEffect( () => {
    const cardPairs = [];
    fallacies.forEach((fallacy, index) => {
      cardPairs.push({id: 2*index, content: fallacy.name, id: index}) // ids used to identify matched cards later 
      cardPairs.push({id: 2*index+1, content: fallacy.definition, id: index})
    })
    setCards([...cardPairs].sort(() => Math.random() - 0.5));
  }, []); // only runs when initialized bc dependency array is empty

  const handleCardClick = (id) => {
    if (flipped.length === 2 || matched.includes(id)) return;
    // fill with functionality later
  };

  return (
    <div className="matching-container">
      <div className="matching-info">
        <h2 className="matching-timer">Time: {null}</h2> {/*later issue*/}
        <h2 className="matching-timer">Best time: {null}</h2> {/*later: {bestTime !== null && ...}*/}
      </div>
      <div className="matching-card-grid">
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`matching-card ${flipped.includes(card.id) ? "flipped" : ""}`}
          >
            <div className="matching-card-front">?</div>
            <div className="matching-card-back">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};