import React from "react";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Board({ submittedWord }) {
  return (
    <div className="guess-result">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={submittedWord[num]} />;
      })}
    </div>
  );
}

export default Board;
