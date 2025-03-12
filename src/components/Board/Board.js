import React from "react";

function Board({ submittedWord }) {
  return (
    <div className="guess-result">
      {submittedWord.map((word, index) => {
        return (
          <p className="guess" key={index}>
            {word}
          </p>
        );
      })}
    </div>
  );
}

export default Board;
