import React, { useState } from "react";
import "../App.css";

export default function InputText(props) {
  let [text, setText] = useState("");
  let [desc, setDesc] = useState(0);
  let wordLength;
  let textChange = (event) => {
    setText(event.target.value);
    wordLength = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " " && text[i + 1] !== " ") {
        wordLength++;
      }
    }
    setDesc(wordLength + 1);
    if (text === "") {
      setDesc(0);
    }
  };
  let uppercase = () => {
    setText(text.toUpperCase());
    props.alertHeading("Converted to Uppercase");
  };
  let lowercase = () => {
    setText(text.toLowerCase());
    props.alertHeading("Converted to Lowercase");
  };
  let clear = () => {
    setText("");
    setDesc(0);
    props.alertHeading("Text Cleared");
  };
  let ExtraSpace = () => {
    let arr = text.split(/[ ]+/);
    setText(arr.join(" "));
    props.alertHeading("Extra spaces has been Removed");
  };
  let copy = () => {
    let event = document.querySelector("#text-input");
    event.select();
    navigator.clipboard.writeText(event.value);
    props.alertHeading("Copied to Clipboard");
  };
  let time = Math.round(desc * 0.4);
  return (
    <div className="app">
      <label htmlFor="text-input">{props.textarea}</label>
      <textarea
        name="text-input"
        id="text-input"
        placeholder={props.textarea_placeholder}
        value={text}
        onChange={textChange}
        cols="30"
        rows="10"
      ></textarea>
      <div className="buttons">
        <button onClick={uppercase}>Convert to Uppercase</button>
        <button onClick={lowercase}>Convert to Lowercase</button>
        <button onClick={ExtraSpace}>Remove Extra Spaces</button>
        <button onClick={clear}>Clear</button>
        <button onClick={copy}>copy</button>
      </div>
      <div className="text-description">
        <label>Text Description</label>
        <p>
          {text.length > 0
            ? `${desc} words and ${text.length} characters.`
            : "Enter some text in the text box to see text description here."}
        </p>
        <p>
          {text.length > 0
            ? time < 60
              ? `${time} seconds to read.`
              : `${Math.round(time / 60)} minutes to read.`
            : ""}
        </p>
      </div>
    </div>
  );
}
