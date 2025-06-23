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

export default function Lesson() {
  const params = useParams();   // if  route is /lesson/:id, and the user visits /lesson/1, params.id will be '1'
  const lesson = lessonContent[params.id]; // shorthand for lessonContent[X], so we can append things like .examples.good
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