import { useState, useEffect } from 'react';
import { lessonContent} from '../../LessonContent.jsx';

export default function Matching() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);

  const availableFallacies = lessonContent.slice(2).map(obj => ({name: obj.title, definition: obj.definition}));
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const fallacies = shuffleArray([...availableFallacies]).slice(0, 4);

  // initialize cards
  useEffect( () => {
    const cardPairs = [];
    fallacies.forEach((fallacy, index) => {
      cardPairs.push({id: 2*index, content: fallacy.name, type: 'name', fallacyId: index}) // ids used to identify matched cards later 
      cardPairs.push({id: 2*index+1, content: fallacy.definition, type: 'definition', fallacyId: index})
    })
    setCards([...cardPairs].sort(() => Math.random() - 0.5));
  }, []); // only runs when initialized bc dependency array is empty

  useEffect (() => {
    let interval;
    if (gameStarted && matched.length < fallacies.length * 2) {
      interval = setInterval(() => setTime(t => t+1), 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted]);

  // wait one second before displaying congrats screen
  useEffect(() => {
    if (matched.length === fallacies.length * 2) {
      const timer = setTimeout(() => {
        setShowWinMessage(true);
        setGameStarted(false);
      }, 1000);
      return () => clearTimeout(timer); // clean up on unmount
    } else {
      setShowWinMessage(false);
    }
  }, [matched]);

  const resetGame = () => {
    const cardPairs = [];
    fallacies.forEach((fallacy, index) => {
      cardPairs.push({id: 2*index, content: fallacy.name, type: 'name', fallacyId: {index}}) // ids used to identify matched cards later 
      cardPairs.push({id: 2*index+1, content: fallacy.definition, type: 'definition', fallacyId: {index}})
    })
    if (time < parseInt(localStorage.getItem('bestTimeMatching')) || !localStorage.getItem('bestTimeMatching')) {
      localStorage.setItem('bestTimeMatching', (time).toString());
    }
    setCards([...cardPairs].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
    setTime(0);
    setGameStarted(false);
    setShowWinMessage(false);
  };

  const handleCardClick = (id) => {
    if (!gameStarted) setGameStarted(true);
    if (flipped.length === 2 || matched.includes(id)) return;
    const newFlipped = [...flipped, id]  // need this; variables update instaneously but useState doesn't
    setFlipped(newFlipped);
    if (newFlipped.length == 2) {
      const [card1, card2] = [cards.find(c => c.id === newFlipped[0]), cards.find(c => c.id === newFlipped[1])]; // retrieves full objects instead of just ids
      if (card1.fallacyId === card2.fallacyId) {
        setMatched(prev => [...prev, card1.id, card2.id]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
    };

  return (
    <>
      <a href={`/games`} className="button-exit">
        <svg viewBox="-3.5 0 19 19">
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/>
        </svg>
      </a>
      {!showWinMessage &&
        <div className="matching-container">
          <div className="matching-info">
            <h2 className="matching-timer">Time: {`${String(Math.floor(time / 60)).padStart('0')}:${String(time % 60).padStart(2, '0')}`}</h2>
            {localStorage.getItem('bestTimeMatching') && <h2 className="matching-timer">Best time: {`${String(Math.floor(parseInt(localStorage.getItem('bestTimeMatching')) / 60)).padStart('0')}:${String(parseInt(localStorage.getItem('bestTimeMatching')) % 60).padStart(2, '0')}`}</h2>}
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
        </div>
      }
      {showWinMessage &&
        <div className={`matching-container matching-win-message`}>
         <h1>You won!</h1>
         <p>Your time was {`${String(Math.floor(time / 60)).padStart('0')}:${String(time % 60).padStart(2, '0')}`}.{time >= parseInt(localStorage.getItem('bestTimeMatching')) ? " Can you beat your best?" : " That's a new personal best!"}.</p>
         <button onClick={resetGame} className="matching-button-replay matching-button">Play Again?</button>
         <a href={`/`} className="matching-button">Back to Home</a>
        </div>
      }
    </>
  );
};