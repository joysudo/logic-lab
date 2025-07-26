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
      cardPairs.push({id: 2*index, content: fallacy.name, type: 'name', fallacyId: {index}}) // ids used to identify matched cards later 
      cardPairs.push({id: 2*index+1, content: fallacy.definition, type: 'definition', fallacyId: {index}})
    })
    setCards([...cardPairs].sort(() => Math.random() - 0.5));
  }, []); // only runs when initialized bc dependency array is empty

  const resetGame = () => {
    const cardPairs = [];
    fallacies.forEach((fallacy, index) => {
      cardPairs.push({id: 2*index, content: fallacy.name, type: 'name', fallacyId: {index}}) // ids used to identify matched cards later 
      cardPairs.push({id: 2*index+1, content: fallacy.definition, type: 'definition', fallacyId: {index}})
    })
    setCards([...cardPairs].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
  };

  const handleCardClick = (id) => {
    if (flipped.length === 2 || matched.includes(id)) return;
    const newFlipped = [...flipped, id]  // need this; variables update instaneously but useState doesn't
    setFlipped(newFlipped);
    if (newFlipped.length == 2) {
      const [card1, card2] = [cards.find(c => c.id === newFlipped[0]), cards.find(c => c.id === newFlipped[1])]; // retrieves full objects instead of just ids
      if (card1.fallacyId.index === card2.fallacyId.index) {
        setMatched(prev => [...prev, card1.id, card2.id]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
    };

  return (
    <div className="matching-container">
      {matched.length !== fallacies.length * 2 &&
        <>
          <div className="matching-info">
            <h2 className="matching-timer">Time: {null}</h2> {/*later issue*/}
            <h2 className="matching-timer">Best time: {null}</h2> {/*later: {bestTime !== null && ...}*/}
          </div>
          <div className="matching-card-grid">
            {cards.map(card => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`matching-card ${flipped.includes(card.id) || matched.includes(card.id) ? "matching-card-flipped" : ""}`}
              >
                <div className="matching-card-front" >?</div> {/* style={{display: matched.includes(card.id) ? 'none' : undefined }} */}
                <div className={`matching-card-back ${matched.includes(card.id) && 'matching-card-matched'}`}>{card.content}<p className="matching-card-type">{card.type}</p></div>
              </div>
            ))}
          </div>
        </>
      }
      {matched.length === fallacies.length * 2 &&
        <>
         <h1>You won!</h1>
         <button onClick={resetGame} className="matching-button-replay matching-button">Play Again?</button>
         <a href={`/`} className="matching-button">Back to Home</a>
        </>
      }
    </div>
  );
};