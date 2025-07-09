export function Title({ text }) {
  return <h1>{text}</h1>;
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
      {!revealed && <button onClick={() => setRevealed(true)}>Reveal</button>}
      {revealed && <p className="revealed-text">{after}</p>}
    </>
  );
}

export function Question ({type, question, answers, correct}) {
  const [selectedOption, setSelectedOption] = useState("unselected");
  return(
    <>
      <p>{question}</p>
      <div className="options">
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