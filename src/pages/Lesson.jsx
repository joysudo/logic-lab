import { useParams } from 'wouter';
import { useState } from 'react';

// going for a nested array approach--array stored alongside metadata in an object, those objects stored in one array
const lessonContent = [
  {
    title: "Sample Lesson 1",
    slides: [
      [<Title text="Straw Man"/>, <BodyText text="this is some sample lesson 1 body text"/>],
      [<RevealSlide text="reveal slide text"/>]
    ]
  }, {
    title: "Sample Lesson 2",
    slides: [
      [<Title text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<RevealSlide text="reveal slide text"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Title text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<RevealSlide text="reveal slide text"/>]
    ]
  },
];

function Title({ text }) {
  return <h1>{text}</h1>;
}

function BodyText({ text }) {
  return <p>{text}</p>;
}

function RevealSlide({ text }) {
  return <h1>{text}</h1>;
}

export default function Lesson() {
  const { id } = useParams(); 
  const lessonIndex = parseInt(id, 10);
  const lesson = lessonContent[lessonIndex];
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === lesson.slides.length - 1;

  const goPrev = () => {
    if (!isFirstSlide) setCurrentSlide(currentSlide - 1);
  };

  const goNext = () => {
    if (!isLastSlide) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="slide-container">
      <button onClick={goPrev} disabled={isFirstSlide} className="slide-navigation previous-button">
        <svg viewBox="0 0 16 16" > 
          <path d="M12 8a.5.5 180 01-.5.5H5.707L7.854 10.646a.5.5 180 11-.708.708l-3-3a.5.5 180 010-.708l3-3a.5.5 180 01.708.708L5.707 7.5H11.5A.5.5 180 0112 8"/> 
        </svg>
      </button>
      <div className="slide">
        {lesson.slides[currentSlide].map((Component, i) => (
          <div key={i}>{Component}</div>
        ))}
        {isLastSlide && <a href="/" className='slide-complete'>Complete</a>}
      </div>
      <button onClick={goNext} disabled={isLastSlide} className="slide-navigation next-button">
        <svg viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
      </button>
    </div>
  );
}