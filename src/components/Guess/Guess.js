import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const checkGuessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkGuessResult ? checkGuessResult[num].letter : undefined}
          status={checkGuessResult ? checkGuessResult[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
