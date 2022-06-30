// Create a basic slideshow application, as shown below. Application requirements are given below, and the finished application must pass all of the unit tests.

// Your task is to complete the implementation of src/components/Slides.js according to the following requirements:

// The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with 2 properties: string title and string text.
// On application launch, the first slide must be rendered.
// Clicking on the "Next" button shows the next slide. This button is disabled when the current slide is the last one.
// Clicking on the "Prev" button shows the previous slide. This button is disabled when the current slide is the first one.
// Clicking on the "Restart" button returns to the first slide. This button is disabled when the current slide is the first one.
// You can assume that the passed slides array contains at least one slide.

// Initially, the file is filled with boilerplate code. Note the following:

// The "Restart" button must have data-testid="button-restart".
// The "Prev" button must have data-testid="button-prev".
// The "Next" button must have data-testid="button-next".
// Each slide's title must be rendered as an <h1> element with data-testid="title".
// Each slide's text must be rendered as a <p> element with data-testid="text".

// Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

import React from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isDisabledPrev, setIsDisabledPrev] = React.useState(true);
  const [isDisabledNext, setIsDisabledNext] = React.useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setIsDisabledPrev(false);
      setIsDisabledNext(false);
    } else {
      setIsDisabledNext(true);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setIsDisabledPrev(false);
      setIsDisabledNext(false);
    } else {
      setIsDisabledPrev(true);
    }
  };

  const handleRestart = () => {
    setCurrentSlide(0);
    setIsDisabledPrev(true);
    setIsDisabledNext(false);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" className="small">
          Prev
        </button>
        <button data-testid="button-next" className="small">
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
        <h1 data-testid="title">Slide Title Here</h1>
        <p data-testid="text">Slide Text Here</p>
      </div>
    </div>
  );
}
