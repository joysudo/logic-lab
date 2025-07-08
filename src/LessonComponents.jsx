export function Title({ text }) {
  return <h1>{text}</h1>;
}

export function BodyText({ text }) {
  return <p>{text}</p>;
}

import { useState } from 'react';
export function RevealSlide({ before, after }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <>
      <p>{before}</p>
      {!revealed && <button onClick={() => setRevealed(true)}>Reveal</button>}
      {revealed && <p className="revealed-text">{after}</p>}
    </>
  );
}