import { Heading, Subheading, BodyText, Reveal, Question } from './LessonComponents.jsx';

const lessonContent = [
  {
    title: "Sample Lesson 1",
    slides: [
      [
        <Heading text="What Is an Argument? (And No, It’s Not a Fight)"/>,
        <Subheading text="Lesson 1: The Building Blocks of Reasoning"/>
      ],

      [
        <BodyText text="When you hear the word 'argument,' what comes to mind?"/>,
        <BodyText text="Maybe yelling, disagreement, or a dramatic exchange over dinner."/>,
        <BodyText text="But in logic and critical thinking, an argument means something very different—and much more structured."/>,
        <BodyText text="In this lesson, you’ll learn what an argument really is, how it's built, and why understanding this will help you recognize both strong reasoning and sneaky fallacies in everyday life."/>,
        <Reveal 
          before="An argument is..." 
          after="In logic, an argument is a group of statements, where some are meant to support (or give reasons for) another. The supporting statements are called premises, and the statement they support is called the conclusion." 
        />
      ],

      [
        <BodyText text="Let’s break this down."/>,
        <BodyText text="An argument is not about shouting or getting emotional."/>,
        <BodyText text="Instead, it's about trying to show that something is true using reasons."/>,
        <BodyText text="If you say, 'Cats are better than dogs,' that’s just an opinion."/>,
        <BodyText text="But if you say: 'Cats are better than dogs because they are quieter, more independent, and don’t need to be walked every day'…"/>,

        <BodyText text="Now you’ve made an argument."/>,
        <BodyText text="You’re giving reasons (premises) to support your point (conclusion)."/>
      ],

      [
        <Question 
          type="radio" 
          question="Which of the following is an example of an argument (in the logical sense)?" 
          answers={[
            ["Why are you always like this?!", "This is an emotional reaction, not a reasoned argument."],
            ["I think we should leave early.", "This is just a statement of opinion with no supporting reason."],
            ["We should leave early because traffic will be bad later.", "Correct! This statement provides a reason to support a conclusion."],
            ["That’s just your opinion.", "This is a dismissal, not an argument."]
          ]} 
          correct={2}
        />,
        <Reveal 
          before="“We should leave early because traffic will be bad later.” Can you find the conclusion and the premise?" 
          after="- Premise: Traffic will be bad later.\n- Conclusion: We should leave early.\nThe premise gives a reason why the conclusion is supposed to be true." 
        />
      ],

      [
        <Subheading text="How to Spot an Argument"/>,
        <BodyText text="Arguments often include words like:"/>,
        <BodyText text="- Because"/>,
        <BodyText text="- Therefore"/>,
        <BodyText text="- So"/>,
        <BodyText text="- Since"/>,
        <BodyText text="- Hence"/>
      ],

      [
        <BodyText text="These are clue words that help us tell which statement is the premise and which is the conclusion."/>,
        <BodyText text="But be careful—not every sentence with 'because' is an argument."/>,
        <BodyText text="Sometimes people explain things or just give background."/>
      ],

      [
        <Question 
          type="radio" 
          question="Which of the following contains an argument?" 
          answers={[
            ["She went home because she was tired.", "This is an explanation, not a persuasive argument."],
            ["The test was hard, so I studied all weekend.", "Correct! This gives a reason to justify an action—an argument."],
            ["I'm telling you, just because!", "This lacks a real reason—no argument here."],
            ["Rain was falling softly outside.", "This is a description, not an argument."]
          ]} 
          correct={1}
        />
      ],

      [
        <Subheading text="The Core of Logic: Premises and Conclusions"/>,
        <BodyText text="Let’s make it simple. Here’s a handy formula:"/>,
        <BodyText text="Premises + Reasoning = Conclusion"/>
      ],

      [
        <BodyText text="That’s all an argument is."/>,
        <BodyText text="If you can identify the premises and conclusion, you’ve unlocked the heart of logical thinking."/>,
        <BodyText text="You don’t need fancy language. You just need to ask:"/>,
        <BodyText text="- What is the speaker trying to prove?"/>,
        <BodyText text="- What reasons are they giving to support it?"/>
      ],

      [
        <Reveal 
          before="“He must be home; his car is in the driveway.” Which is the premise, and which is the conclusion?" 
          after="- Premise: His car is in the driveway.\n- Conclusion: He must be home.\nThe speaker is using the car as evidence to support the conclusion." 
        />
      ],

      [
        <Subheading text="Wrap-Up: Why This Matters"/>,
        <BodyText text="Being able to recognize arguments is the first step in learning how to evaluate them."/>,
        <BodyText text="Some arguments are strong. Some are weak."/>,
        <BodyText text="Some look convincing but fall apart under pressure—and those are called fallacies, which we’ll explore in the next lessons."/>
      ],

      [
        <BodyText text="For now, just remember:"/>,
        <BodyText text="- An argument gives reasons (premises) to support a claim (conclusion)."/>,
        <BodyText text="- Not every opinion is an argument."/>,
        <BodyText text="- Arguments aren’t about being loud—they’re about being logical."/>
      ],

      [
        <Question 
          type="radio" 
          question="Which of the following best describes a logical argument?" 
          answers={[
            ["A disagreement between people.", "This is the common usage, but not the logical definition."],
            ["A claim followed by supporting reasons.", "Correct! This defines an argument in logic."],
            ["A list of unrelated facts.", "This is just information, not an argument."],
            ["A story meant to entertain.", "That's a narrative, not a logical argument."]
          ]} 
          correct={1}
        />
      ]
    ]
  }, {
    title: "Sample Lesson 2",
    slides: [
      [<Heading text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Heading text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 2",
    slides: [
      [<Heading text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Heading text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 2",
    slides: [
      [<Heading text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Heading text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 4",
    slides: [
      [<Heading text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 5",
    slides: [
      [<Heading text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 6",
    slides: [
      [<Heading text="Red Herring"/>, <BodyText text="this is some sample lesson 2 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Sample Lesson 3",
    slides: [
      [<Heading text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }
];

export default lessonContent;