import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
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
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        style={{ textTransform: "uppercase" }}
        onChange={(e) => setGuessInput(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
