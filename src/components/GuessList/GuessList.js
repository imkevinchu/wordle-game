import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => {
        return <li key={crypto.randomUUID()}>{guess}</li>;
      })}
    </div>
  );
}

export default GuessList;
