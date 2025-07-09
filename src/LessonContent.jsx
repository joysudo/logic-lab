import { Title, BodyText, Reveal, Question } from './LessonComponents.jsx';

const lessonContent = [
  {
    title: "Sample Lesson 1",
    slides: [
      [<Title text="Straw Man"/>, <BodyText text="this is some sample lesson 1 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>],
      [<Question type="radio" question="this is a sample question" answers={[["this is the first answer option", "explanation"], ["dos", "fsdsd"], ["third", "dsfjkis"], ["this is the fourth", "sdfsdfsd"]]} correct={1}/>]
    ]
  }, {
    title: "Sample Lesson 2",
    slides: [
      [<Title text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Title text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  },
];

export default lessonContent;