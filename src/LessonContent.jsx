import { Heading, Subheading, BodyText, Reveal, Question } from './LessonComponents.jsx';

const unitDescription = [
  {id: 1, name: "Intro to Logic & Argument", description: "This unit teaches you how to spot and understand arguments. You'll learn that arguments have reasons (premises) that lead to a main point (conclusion), and how to tell if an argument is built well (valid) and makes sense in the real world (sound). You'll also discover different types of arguments, like those that try to prove something for sure (deductive) and those that just try to show it's likely (inductive)."},
  {id: 2, name: "Formal Fallacies", description: "In this unit, you'll learn about mistakes in the structure of an argument. These mistakes make an argument's conclusion not necessarily follow from its premises, even if the premises are true. You'll explore common errors like affirming the consequent, denying the antecedent, and the undistributed middle."},
  {id: 3, name: "Informal Fallacies I - Fallacies of Relevance", description: "This unit focuses on arguments that try to trick you by bringing up information that doesn't actually relate to the main point. You'll learn about ad hominem attacks, trying to win by twisting someone's words, and changing the subject entirely."},
  {id: 4, name: "Informal Fallacies II - Weak Induction", description: "This unit explores arguments where the premises do relate to the conclusion but offer insufficient or weak evidence to support it. You'll learn to spot hasty generalizations, appeals to unqualified authority, and slippery slope arguments that leap to conclusions without proper backing."},
  {id: 5, name: "Informal Fallacies III - Presumption & Ambiguity", description: "This unit covers deceptive arguments that rely on unwarranted assumptions or unclear wording. We'll examine fallacies like begging the question, complex questions, and the misuse of words with multiple meanings."},
]

const lessonContent = [
  {
    title: "Introducing Argument",
    description: "1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    definition: "this is the definition for sample lesson 1",
    unit: 1,
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
          after="- Premise: Traffic will be bad later. - Conclusion: We should leave early. The premise gives a reason why the conclusion is supposed to be true." 
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
          after="- Premise: His car is in the driveway. - Conclusion: He must be home. The speaker is using the car as evidence to support the conclusion." 
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
    title: "Validity v. Soundness",
    description: "2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    definition: "this is the definition for sample lesson 2",
    unit: 1,
    slides: [
      [
        <Heading text="Is It True? Is It Strong? The Two Tests of an Argument"/>,
        <Subheading text="Lesson 3: Validity vs. Soundness (and Why It Matters)"/>
      ],
    
      [
        <BodyText text="In the last lessons, you learned how to identify an argument by finding its premises and conclusion."/>,
        <BodyText text="But finding an argument is only the first step. The real challenge—and the key to media literacy—is learning how to evaluate an argument."/>,
        <BodyText text="How do you know if an argument is good or bad? We use two different, critical concepts: Validity and Soundness."/>,
        <BodyText text="These terms don't mean 'true' or 'good' in the everyday sense; they are precise tools for logic."/>,
        <Reveal 
          before="Think of it like building a house. One concept is about the blueprint (the structure), and the other is about the materials (the truth of the facts)." 
          after="Validity is about the blueprint (the structure). Soundness is about the materials (the truth of the facts)." 
        />
      ],
    
      [
        <Subheading text="Test #1: Validity (The Blueprint)"/>,
        <BodyText text="Validity is all about the structure of the argument, not whether the statements are actually true."/>,
        <BodyText text="A valid argument is one where if the premises were true, the conclusion would have to be true. The conclusion follows logically from the premises."/>,
        <BodyText text="It’s a hypothetical test: Does the conclusion flow from the premises?"/>,
        <BodyText text="The argument below is valid because its structure works, even if the premise is silly:"/>,
        <BodyText text="Premise 1: All birds are mammals."/>,
        <BodyText text="Premise 2: A robin is a bird."/>,
        <BodyText text="Conclusion: Therefore, a robin is a mammal."/>
      ],
    
      [
        <BodyText text="Wait, robins are not mammals! Why is this valid?"/>,
        <BodyText text="Because we are ignoring the real-world truth for a moment. If we assume P1 and P2 are true, the conclusion logically must be true."/>,
        <BodyText text="If the premises are taken as true, the logic holds up. The blueprint is perfect."/>,
        <Reveal 
          before="So, what is the key to validity?" 
          after="An argument is valid if it is impossible for all the premises to be true and the conclusion false at the same time." 
        />
      ],
    
      [
        <Subheading text="Test #2: Soundness (The Materials)"/>,
        <BodyText text="Soundness is a stronger test. For an argument to be sound, it must satisfy two conditions:"/>,
        <BodyText text="1. The argument must be Valid (the blueprint is correct)."/>,
        <BodyText text="2. All of its premises must be Actually True (the materials are good)."/>,
        <BodyText text="If an argument is valid AND based on facts, it's a sound argument—the strongest kind."/>,
        <BodyText text="The 'robin' argument from before was valid, but it was unsound because the first premise ('All birds are mammals') is false."/>
      ],
    
      [
        <BodyText text="Here is a sound argument:"/>,
        <BodyText text="Premise 1: All fish can swim."/>,
        <BodyText text="Premise 2: A shark is a fish."/>,
        <BodyText text="Conclusion: Therefore, a shark can swim."/>,
        <BodyText text="It’s valid (the logic holds), AND the premises are factually true."/>
      ],
    
      [
        <Question 
          type="radio" 
          question="Consider this argument: 'All cars run on electricity. My vehicle is a car. Therefore, my vehicle runs on electricity.' Is this argument valid or sound?" 
          answers={[
            ["It is both valid and sound.", "Incorrect. The first premise is factually false."],
            ["It is valid but unsound.", "Correct! The structure is logically perfect (valid), but the first premise is false, making it unsound."],
            ["It is invalid but sound.", "Incorrect. Sound arguments must be valid."],
            ["It is neither valid nor sound.", "Incorrect. The logic flows perfectly, making it valid."]
          ]} 
          correct={1}
        />
      ],
    
      [
        <Subheading text="Why This Distinction Matters for Media Literacy"/>,
        <BodyText text="In the real world, especially in advertising and political commentary, people often try to get you to accept an argument that is valid but unsound."/>,
        <BodyText text="They might present a perfectly structured argument (it sounds logical), but they sneak in a false or distorted premise."/>,
        <BodyText text="Your job as a critical thinker is to check both:"/>,
        <BodyText text="1. Validity: Does the conclusion actually follow from the premises?"/>,
        <BodyText text="2. Truth of Premises: Are the premises actually true?"/>
      ],
    
      [
        <BodyText text="If an influencer says: 'All successful people get only 4 hours of sleep. I get 4 hours of sleep. Therefore, I am successful.'"/>,
        <BodyText text="The argument is valid (the conclusion follows the rules), but the first premise is likely false (unsound), making the argument unreliable."/>,
        <Reveal 
          before="Can you think of a real-world example of an argument that is valid but relies on a false premise?" 
          after="Political example: 'Everyone who is against this new law is a socialist. You are against this new law. Therefore, you are a socialist.' The structure is valid, but the first premise ('Everyone who is against this new law is a socialist') is a false generalization and likely an oversimplification, making the argument unsound." 
        />
      ],
    
      [
        <BodyText text="For now, just remember:"/>,
        <BodyText text="- Validity = Does the conclusion flow from the premises (good blueprint)?"/>,
        <BodyText text="- Soundness = Is it valid AND are the premises true (good blueprint and good materials)?"/>,
        <BodyText text="- A sound argument is the gold standard; it's logically compelling and factually correct."/>
      ],
    
      [
        <Question 
          type="radio" 
          question="Which condition is necessary for an argument to be considered sound?" 
          answers={[
            ["The premises are persuasive, even if the conclusion is weak.", "Incorrect. Persuasion isn't the same as soundness, and the conclusion must be well-supported."],
            ["The argument must be valid, and all of its premises must be true.", "Correct! This is the precise two-part definition of a sound argument."],
            ["The premises must be facts, regardless of the logical connection to the conclusion.", "Incorrect. Soundness requires validity (a logical connection)."],
            ["The conclusion must be true, even if the premises are false.", "Incorrect. Soundness requires true premises and validity."]
          ]} 
          correct={1}
        />
      ]
    ]
  }, {
    title: "Deductive v. Inductive",
    description: "3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    definition: "this is the definition for sample lesson 3",
    unit: 2,
    slides: [
      [<Heading text="False Dichotomy"/>, <BodyText text="this is some sample lesson 3 body text"/>],
      [<Reveal before="reveal slide text" after="this is after the reveal"/>]
    ]
  }, {
    title: "Affirming the Consequent",
    description: "This fallacy occurs when one assumes that if 'If P, then Q' and 'Q' are true, then 'P' must be true. It confuses cause and effect.",
    definition: "If P then Q. Q. Therefore, P. (Invalid form)",
    unit: 2,
    slides: [
      [<Heading text="Example"/>, <BodyText text="If it rains, the ground gets wet. The ground is wet. Therefore, it rained. (Not necessarily—someone could’ve watered the lawn.)"/>]
    ]
  },
  {
    title: "Denying the Antecedent",
    description: "This fallacy assumes that if 'If P, then Q' and 'not P' are true, then 'not Q' must be true. It mistakenly treats the conditional as biconditional.",
    definition: "If P then Q. Not P. Therefore, not Q. (Invalid form)",
    unit: 2,
    slides: [
      [<Heading text="Example"/>, <BodyText text="If I’m in Paris, I’m in France. I’m not in Paris. Therefore, I’m not in France. (Invalid—could be in Lyon.)"/>]
    ]
  },
  {
    title: "Undistributed Middle",
    description: "A formal fallacy in categorical syllogisms where the middle term does not connect the two premises properly.",
    definition: "Failure to distribute (apply to all members) the middle term between premises.",
    unit: 2,
    slides: [
      [<Heading text="Example"/>, <BodyText text="All cats are mammals. All dogs are mammals. Therefore, all dogs are cats. (The middle term 'mammals' is undistributed.)"/>]
    ]
  },
  
  // ———————————————
  // UNIT 3: INFORMAL FALLACIES I — RELEVANCE
  // ———————————————
  {
    title: "Ad Hominem",
    description: "Attacking the person instead of addressing their argument.",
    definition: "An argument that dismisses someone's claim by criticizing the speaker rather than the reasoning.",
    unit: 3,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘You’re wrong about climate change because you’re not a scientist.’"/>]
    ]
  },
  {
    title: "Appeal to Emotion",
    description: "Attempting to persuade by eliciting emotions rather than presenting logical reasons.",
    definition: "Subtypes: ad misericordiam (appeal to pity) and ad populum (appeal to popularity).",
    unit: 3,
    slides: [
      [<Heading text="Example: Ad Misericordiam"/>, <BodyText text="‘You must pass me, I worked so hard and my family needs this.’"/>],
      [<Heading text="Example: Ad Populum"/>, <BodyText text="‘Everyone believes this, so it must be true.’"/>]
    ]
  },
  {
    title: "Strawman",
    description: "Misrepresenting an opponent’s argument to make it easier to attack.",
    definition: "Distorting someone’s position before refuting the distorted version.",
    unit: 3,
    slides: [
      [<Heading text="Example"/>, <BodyText text="A: ‘We should have background checks for gun buyers.’ B: ‘My opponent wants to take away all your guns.’"/>]
    ]
  },
  {
    title: "Red Herring",
    description: "Introducing an irrelevant topic to divert attention from the real issue.",
    definition: "A distraction fallacy that shifts focus from the original argument.",
    unit: 3,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘Why worry about pollution when there are people starving?’"/>]
    ]
  },
  {
    title: "Appeal to Force (Ad Baculum)",
    description: "Using threats or fear instead of reasoning to persuade.",
    definition: "Arguing that one should accept a conclusion to avoid punishment or harm.",
    unit: 3,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘Agree with the policy or you’ll lose your job.’"/>]
    ]
  },
  
  // ———————————————
  // UNIT 4: INFORMAL FALLACIES II — WEAK INDUCTION
  // ———————————————
  {
    title: "Hasty Generalization",
    description: "Drawing a general rule from too few or unrepresentative examples.",
    definition: "Making a broad claim based on limited evidence.",
    unit: 4,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘My two teachers were strict, so all teachers are strict.’"/>]
    ]
  },
  {
    title: "Weak Analogy",
    description: "Assuming two things are alike in all respects because they are alike in some respects.",
    definition: "Comparing dissimilar things as if they were sufficiently alike to justify a conclusion.",
    unit: 4,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘Cars and people both have engines, so people should need oil changes.’"/>]
    ]
  },
  {
    title: "False Cause (Post Hoc)",
    description: "Mistaking temporal sequence or correlation for causation.",
    definition: "Assuming that because one event followed another, it was caused by it.",
    unit: 4,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘I wore my lucky socks and we won. Therefore, the socks caused the win.’"/>]
    ]
  },
  {
    title: "Slippery Slope",
    description: "Arguing that a small first step will inevitably lead to a chain of related (usually negative) events.",
    definition: "Predicting catastrophic results without sufficient evidence of the causal chain.",
    unit: 4,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘If we allow students to redo one test, next they’ll want to redo every assignment.’"/>]
    ]
  },
  
  // ———————————————
  // UNIT 5: INFORMAL FALLACIES III — PRESUMPTION & AMBIGUITY
  // ———————————————
  {
    title: "Begging the Question (Circular Reasoning)",
    description: "The argument’s conclusion is assumed in one of its premises.",
    definition: "Restating the conclusion as a premise; assuming what needs to be proven.",
    unit: 5,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘Reading is beneficial because it’s good for you to read.’"/>]
    ]
  },
  {
    title: "Loaded Question",
    description: "A question that presupposes guilt or accepts a controversial assumption.",
    definition: "A question structured so any direct answer commits the respondent to a claim.",
    unit: 5,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘Have you stopped cheating on your taxes?’ (implies you were cheating)."/>]
    ]
  },
  {
    title: "False Dichotomy",
    description: "Presenting only two options when more alternatives exist.",
    definition: "Framing a situation as either/or when it’s not exhaustive.",
    unit: 5,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘You’re either with us or against us.’"/>]
    ]
  },
  {
    title: "Equivocation",
    description: "Using a key term in different senses within the same argument.",
    definition: "A shift in word meaning that makes an argument misleading.",
    unit: 5,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘Feathers are light. What is light cannot be dark. Therefore, feathers cannot be dark.’"/>]
    ]
  },
  {
    title: "Amphiboly",
    description: "A fallacy caused by ambiguous grammar or syntax rather than word meaning.",
    definition: "A misleading argument due to structural ambiguity in a sentence.",
    unit: 5,
    slides: [
      [<Heading text="Example"/>, <BodyText text="‘The police shot the thief with a gun.’ (Who had the gun?)"/>]
    ]
  }
];

export {unitDescription, lessonContent};