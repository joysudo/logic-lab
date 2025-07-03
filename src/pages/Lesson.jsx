import { useParams } from 'wouter';
import { useState } from 'react';

const lessonContent = {
  1: {
    title: "Straw Man",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  2: {
    title: "False Dilemma",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  3: {
    title: "Red Herring",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  4: {
    title: "Ad Hominem",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  5: {
    title: "Slippery Slope",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  6: {
    title: "Appeal to Authority",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  7: {
    title: "Hasty Generalization",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
  8: {
    title: "Post Hoc",
    definition: "Definition here...",
    examples: {
      bad: "Bad example...",
      good: "Good example..."
    }
  },
};

const slidesForLesson = (lesson) => [
  { type: 'title', content: <h1>{lesson.title}</h1> },
  { type: 'definition', content: <p>{lesson.definition}</p> },
  { type: 'examples-bad', content: <p><strong>Bad Example:</strong> {lesson.examples.bad}</p> },
  { type: 'examples-good', content: <p><strong>Good Example:</strong> {lesson.examples.good}</p> },
];

export default function Lesson() {
  const params = useParams();   // if  route is /lesson/:id, and the user visits /lesson/1, params.id will be '1'
  const lesson = lessonContent[params.id]; // shorthand for lessonContent[X], so we can append things like .examples.good
  const slides = slidesForLesson(lesson);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

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
        {slides[currentSlide].content}
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