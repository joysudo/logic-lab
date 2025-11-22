# Logic Lab

Logic Lab is an interactive platform built to help *you* identify logical fallacies. 🃏 

Submitted to the **2025 Congressional App Challenge**. You can access it on all browsers at https://logic-lab-eight.vercel.app/.

> Watch the demo/pitch on YouTube:
>
> [![dark room with open laptop and hands typing](http://img.youtube.com/vi/Glv23dq4HAs/0.jpg)](http://www.youtube.com/watch?v=Glv23dq4HAs "Really, watch it!")

## Contents

Progress through the course as you flip over "cards."

<img width="1079" height="939" alt="image" src="https://github.com/user-attachments/assets/540b0cc2-951f-4c8d-9c03-4800c99f6b9a" />

Each lesson is interactive, with questions, reveals, and more.
<img width="1908" height="942" alt="image" src="https://github.com/user-attachments/assets/6e0046c2-1746-4a5c-bee5-d9ecdd938052" />

Cards you unlock are added to the "deck," where users can quiz themselves on content.
<img width="1899" height="924" alt="image" src="https://github.com/user-attachments/assets/c9725282-2b35-4d56-a57a-356f33bddf23" />

The same fallacies you learn are automatically added to games for more review.
<img width="1784" height="937" alt="image" src="https://github.com/user-attachments/assets/2bb18677-8002-4a8e-9f1d-98ae69afb664" />


## Stack + Process

I built Logic Lab's entire website myself during the summer of '25. It was part of my first big venture into React. 

| Component | Technology |
| :--- | :--- |
| Framework | React |
| Routing | Wouter |
| Styling | Vanilla CSS |
| Tooling | Vite |

According to Toggl, I spent 40 hours on its coding (you can tell I didn't know much!). If you include Figma mockups, scrapped hand-drawn assets, and coding from before I downloaded Toggl, I'd put that number closer to 50-60.

Logic Lab is also accompanied by a Chrome extension, which connects to OpenAI to identify and highlight actual fallacies in your browser. Built by my partner, Tanisha Sajjan, it hasn't been released due to token funding and other constraints.

### Some Problem Solving (or: what my rubber ducks heard for three months 🐤)

Yeah... I ran into a lot of of issues. One of the biggest headaches was the deck page.

![ezgif-6623bc5eec9f343b](https://github.com/user-attachments/assets/53969b03-7ff8-49fb-8d39-e218ac802d3d)

The issue here is that I wanted the page to be responsive. Cards at the bottom populate as they're unlocked, meaning their position isn't absolute. Built-in CSS animation doesn't exactly like that. I was also very particular about _how_ I wanted this animation to look. Some of my "must-haves" were:
- [x] for cards at the bottom of the screen to fly up slightly when hovered over
- [x] for cards, when selected, to fly from their current position to a target on screen
- [x] for flying cards to expand for readability and spin 2x while travelling to position
- [x] for the active card to automatically fly back when another was selected

Probably not the simplest of demands, right? But I'm a fan of websites with personality. I didn't want to make another basic grid of fallacies and their definitions and move on.

After multiple days of trial and error, I got something that works. First, a custom function gets the card's current position using ```card.getBoundingClientRect().``` It calculates the required offsetX and offsetY to move the card from its current position to a calculated target. Then the jsx sets the transition for the animation and applies a ```transform``` to the end state. The browser interpolates the changes in ```translate```, ```rotateY```, and ```scale``` using the ease timing function, letting the card expand, flip, and move to the center-left of screen.

There are few quirks in this process. The browser has to force a repaint with ```void card.offsetWidth;``` and I added some other resets after the offset calculations. I also found that I needed to set a timeout in deactivation cases, to allow the visual card reset to start before updating the ```activeCard``` state. That was a YouTube tutorial I didn't expect to watch. And of course, there's some finangling to even make sure that the deck page _knows_ which lessons have been created, for example. A massive array with custom components, objects, and definitions holds that. 

In the end, though, I'm really happy I didn't compromise on the initial vision. I was also excited about the other additions I made to this page, like the progress bar, pop-up text, and overall course percentage completion. Worth the suffering? I think so. 🐣

> [!NOTE]
> This project was conceptualize and created by humans, with minimal use of AI to debug. You're reading human words in this README.
>
> Thank you for supporting Logic Lab! ♣️♥️
