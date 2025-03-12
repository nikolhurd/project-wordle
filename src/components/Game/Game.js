import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import Board from "../Board";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [submittedWord, setSubmittedWord] = React.useState([]);

  return (
    <>
      <Board submittedWord={submittedWord} />
      <Input
        submittedWord={submittedWord}
        setSubmittedWord={setSubmittedWord}
      />
    </>
  );
}

export default Game;
