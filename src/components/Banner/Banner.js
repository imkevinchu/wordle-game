import React from "react";

function Banner({ gameStatus, numGuesses, answer }) {
  const isGameWon = gameStatus === "won" ? true : false;
  const className = isGameWon ? "happy banner" : "sad banner";
  const message = isGameWon ? (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}</strong>.
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>
    </p>
  );
  return <div className={className}>{message}</div>;
}

export default Banner;
