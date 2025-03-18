import React from "react";
import { answer } from "../Game/Game";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Input({ submittedWord, setSubmittedWord, gameStatus, setGameStatus }) {
  const [word, setWord] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...submittedWord, word];
    setSubmittedWord(nextGuesses);

    /* logic for game status */
    if (word === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        value={word}
        onChange={(event) => {
          setWord(event.target.value.toUpperCase());
        }}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      ></input>
    </form>
  );
}

export default Input;
