import { useParams } from 'wouter';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <button onClick={goPrev} disabled={isFirstSlide} className="slide-navigation">Previous</button>
      <div className="slide">
        {slides[currentSlide].content}
        {isLastSlide && <a href="/" className='slide-complete'>Complete</a>}
      </div>
      <button onClick={goNext} disabled={isLastSlide} className="slide-navigation">Next</button>
    </div>
  );
}