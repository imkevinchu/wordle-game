import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guessList, setGuessList] = useState([]);

  function handleSubmitGuess(guessInput) {
    const nextGuesses = [...guessList, guessInput];
    setGuessList(nextGuesses);

    if (guessInput.toUpperCase() === answer) setGameStatus("won");
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          numGuesses={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
