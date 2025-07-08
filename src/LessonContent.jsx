import { Title, BodyText, RevealSlide } from './LessonComponents.jsx';

const lessonContent = [
  {
    title: "Sample Lesson 1",
    slides: [
      [<Title text="Straw Man"/>, <BodyText text="this is some sample lesson 1 body text"/>],
      [<RevealSlide before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 2",
    slides: [
      [<Title text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<RevealSlide before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Title text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<RevealSlide before="reveal slide text" after="this is after the reveal"/>]
    ]
  },
];

export default lessonContent;