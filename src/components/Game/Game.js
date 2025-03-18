import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import Board from "../Board";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [submittedWord, setSubmittedWord] = React.useState([]);
  return (
    <>
      <Board submittedWord={submittedWord} />
      <Input
        submittedWord={submittedWord}
        setSubmittedWord={setSubmittedWord}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={submittedWord.length} />
      )}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
