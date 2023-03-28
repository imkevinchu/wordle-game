import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        style={{ textTransform: "uppercase" }}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
