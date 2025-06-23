import { useParams } from 'wouter';

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
};

export default function Lesson() {
  const params = useParams(); // Corrected
  const lesson = lessonContent[params.id]; // Access params.id

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.definition}</p>
      <h2>Examples</h2>
      <p>Bad: {lesson.examples.bad}</p>
      <p>Good: {lesson.examples.good}</p>
      <a href="/">Back to Home</a>
    </div>
  );
}