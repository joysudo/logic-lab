export function Heading({ text }) {
  return <h1>{text}</h1>;
}

export function Subheading({ text }) {
  return <h2>{text}</h2>;
}

export function BodyText({ text }) {
  return <p>{text}</p>;
}

import { useState } from 'react';
export function Reveal({ before, after }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <>
      <p>{before}</p>
      {!revealed && <button onClick={() => setRevealed(true)} className="reveal-button">Reveal</button>}
      {revealed && <p className="reveal-text">{after}</p>}
    </>
  );
}

export function Question ({type, question, answers, correct}) {
  const [selectedOption, setSelectedOption] = useState("unselected");
  return(
    <>
      <p><b>{question}</b></p>
      <div className="question-options">
        {answers.map(([answer, explanation], index) => (
          <label>
            <input type={type} checked={selectedOption === index} onChange={() => setSelectedOption(index)}/>
            {answer}
          </label>
        ))}
      </div>
      {typeof selectedOption === "number" && answers[selectedOption] && (selectedOption === correct ? (<p className="correct-answer">{answers[selectedOption][1]}</p>) : (<p className="incorrect-answer">{answers[selectedOption][1]}</p>))}
    </>
  );
}