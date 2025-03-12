import React from "react";

function Input() {
  const [word, setWord] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ word });
    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
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
