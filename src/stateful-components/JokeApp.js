import "../styling/jokeApp.css";

import React, { useState } from "react";

import { jokes as jokeData } from "../constants/jokes";
import JokeCard from "../stateless-components/JokeCard.js";
import JokeList from "../stateless-components/JokeList.js";

function JokeApp() {
  const [jokes, setJokes] = useState(jokeData);
  const [showPunchline, setShowPunchline] = useState(false);
  const [jokeIndex, setJokeIndex] = useState(0);

  const rateJoke = isFunny => {
    setJokes(prevState => {
      const jokesClone = Array.from(prevState);
      jokesClone[jokeIndex].isFunny = isFunny;
      return jokesClone;
    });
  };

  const setShowPunchlineHelper = (val = true) => {
    setShowPunchline(val);
  };

  const advanceJoke = () => {
    const nextJoke = jokeIndex + 1;
    const lastJoke = jokes.length - 1;
    setJokeIndex(nextJoke <= lastJoke ? nextJoke : 0);
    setShowPunchlineHelper(false);
  };

  const recedeJoke = () => {
    const previousJoke = jokeIndex - 1;
    const lastJoke = jokes.length - 1;
    setJokeIndex(previousJoke >= 0 ? previousJoke : lastJoke);
    setShowPunchlineHelper(false);
  };

  const caclulateRemainingJokes = () => {
    let count = 0;
    jokes.forEach(joke => joke.isFunny !== undefined && count++);
    const jokesRemaining = jokes.length - count;
    return jokesRemaining;
  };

  return (
    <div className="joke-app">
      <div className="ja-holder">
        <button
          type="button"
          className="ja-button ja-previous"
          onClick={recedeJoke}
        >
          previous
        </button>
        <div className="ja-body-holder">
          <div className="ja-joke-counter">
            You have {caclulateRemainingJokes()} more joke
            {caclulateRemainingJokes() !== 1 && "s"} to rate
          </div>
          <JokeCard
            joke={jokes[jokeIndex]}
            showPunchline={showPunchline}
            setShowPunchlineHelper={setShowPunchlineHelper}
            rateJoke={rateJoke}
          />
        </div>
        <button type="button" className="ja-button ja-next" onClick={advanceJoke}>
          next
        </button>
      </div>
      <JokeList jokeList={jokes} currentJoke={jokes[jokeIndex]} />
    </div>
  );
}

export default JokeApp;
