import React, { useState } from "react";
import "./styles.css";

var headingText = "What's this emoji?";
var color = "lightblue";

var tusharCount = 0;

export default function App() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    tusharCount = tusharCount + 1;
    console.log("is Nehas " + tusharCount);
  }

  function incrementCounter() {
    var newCount = count + 1;
    setCount(newCount);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <div>
        <button onClick={clickHandler}> Tushar </button>
      </div>
      <button onClick={incrementCounter}>Increment Counter!</button> {count}
    </div>
  );
}
