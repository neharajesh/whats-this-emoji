import React, { useState } from "react";
import "./styles.css";

var headingText = "What's This Emoji?";
var color = "lightblue";

var emojiDictionary = {
  "😊": "smiling",
  "😂": "laughing",
  "😢": "crying",
  tushar: "iloveyou",
  "🐱‍👤": "ninja cat",
  "🍇": "grapes",
  "🍉": "watermelon",
  "🥔": "potato"
};

var emojisWeKnow = Object.keys(emojiDictionary);

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

  function showEmojiOnClick(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <input onChange={inputEventHandler}></input>
      <div
        style={{ fontSize: "1.5rem", padding: "0.5rem", paddingTop: "1rem" }}
      >
        {meaning}
      </div>

      <h3> Emojis we know : </h3>
      {emojisWeKnow.map((emoji) => (
        <span
          key={emoji}
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={() => showEmojiOnClick(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
