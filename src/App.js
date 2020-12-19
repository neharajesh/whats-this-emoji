import React, { useState } from "react";
import "./styles.css";

var headingText = "What's This Emoji?";
var color = "lightblue";

var emojiDictionary = {
  a: "aah",
  b: "bee",
  c: "sea",
  tushar: "love",
  "🍇": "grapes",
  "🍉": "watermelon",
  "🥔": "potato"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "not in our DB yet :(";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <input onChange={inputEventHandler}></input>
      <div>{meaning}</div>
    </div>
  );
}
