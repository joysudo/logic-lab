export function Heading({ text }) {
  return <h1 className="slide-heading">{text}</h1>;
}

export function Subheading({ text }) {
  return <h2 className="slide-subheading">{text}</h2>;
}

export function BodyText({ text }) {
  return <p className="slide-body">{text}</p>;
}

import { useState } from 'react';
export function Reveal({ before, after, onComplete }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <>
      <p className="slide-question">{before}</p>
      {!revealed && <button onClick={() => {setRevealed(true); onComplete();}} className="reveal-button">Reveal</button>}
      {revealed && <p className="reveal-text">{after}</p>}
    </>
  );
}

export function Question ({type, question, answers, correct, onComplete}) {
  const [selectedOption, setSelectedOption] = useState("unselected");
  return(
    <>
      <p className="slide-question">{question}</p>
      <div className="question-options">
        {answers.map(([answer, explanation], index) => (
          <label>
            <input type={type} checked={selectedOption === index} 
              onChange={() => {setSelectedOption(index); if (selectedOption === "unselected") onComplete();}}
            />
            {answer}
          </label>
        ))}
      </div>
      {typeof selectedOption === "number" && answers[selectedOption] && (selectedOption === correct ? (<p className="correct-answer">{answers[selectedOption][1]}</p>) : (<p className="incorrect-answer">{answers[selectedOption][1]}</p>))}
    </>
  );
}