import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guessInput, setGuessInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    handleSubmitGuess(guessInput);

    setGuessInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        onChange={(e) => {
          const guessToUpperCase = e.target.value.toUpperCase();
          setGuessInput(guessToUpperCase);
        }}
      />
    </form>
  );
}

export default GuessInput;
