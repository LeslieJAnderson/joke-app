import "../styling/jokeCard.css";

import React from "react";

function JokeCard({ joke, showPunchline, setShowPunchlineHelper, rateJoke }) {
  return (
    <div className="joke-card">
      <div className="jc-joke-setup">{joke.setup}</div>
      {showPunchline || joke.isFunny !== undefined ? (
        <React.Fragment>
          <div className="jc-punchline">{joke.punchline}</div>
          <div className="jc-rate-button-holder">
            <div style={{ padding: 10 }}>
              <div
                className={`jc-rate-button jc-down-button ${joke.isFunny === false && "jc-rated jc-rated-down"}`}
                onClick={() => rateJoke(false)}
              >
                Booo
              </div>
            </div>
            <div style={{ padding: 10 }}>
              <div
                className={`jc-rate-button jc-up-button ${joke.isFunny === true && "jc-rated jc-rated-up"}`}
                onClick={() => rateJoke(true)}
              >
                Hah!
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="jc-punchline-reveal-holder">
            <button
              type="button"
              className="jc-punchline-reveal"
              onClick={setShowPunchlineHelper}
            >
              Reveal Punchline
            </button>
          </div>
          <div className="jc-vote-button-holder" />
        </React.Fragment>
      )}
    </div>
  );
}

export default JokeCard;
