import "../styling/jokeList.css";

import React from "react";
import { FaThumbsDown,FaThumbsUp } from "react-icons/fa";

export default function JokeList({ jokeList, currentJoke }) {
  const displayRating = joke => {
    if (joke.isFunny) {
      return <FaThumbsUp />;
    } if (joke.isFunny === false) {
      return <FaThumbsDown />;
    }
    return null;
  };

  return (
    <div className="joke-list">
      <div className="jl-holder">
        <h1 className="jl-row">
          Setup
          <div className="jl-rating">Rating</div>
        </h1>
        {jokeList.map(joke => {
          return (
            <div
              key={joke.id}
              className={`jl-row ${joke.id === currentJoke.id && "jl-current-joke"}`}
            >
              {joke.setup}
              {displayRating(joke)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
