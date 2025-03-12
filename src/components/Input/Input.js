import React from "react";

function Input() {
  const [word, setWord] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        const guess = { guess: word.toUpperCase() };
        console.log(guess);
        setWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word.toUpperCase()}
        onChange={(event) => {
          setWord(event.target.value);
        }}
        pattern="\w{5,5}"
      ></input>
    </form>
  );
}

export default Input;
