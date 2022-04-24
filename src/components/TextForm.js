import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleCapitalizedClick = () => {
    const lines = text.split(/\n/);
    const capEachLine = [];
    lines.forEach(function (line) {
      if (
        line.split(/\s+/).filter((element) => {
          return element.length !== 0;
        }).length === 0
      ) {
        capEachLine.push(line);
      } else {
        let CapEachWord = [];
        let words = line.toLowerCase().split(" ");
        words.forEach(function (word) {
          if (word.length === 0) {
            CapEachWord.push(word);
          } else {
            CapEachWord.push(word.replace(word[0], word[0].toUpperCase()));
          }
        });
        let newLine = CapEachWord.join(" ");
        capEachLine.push(newLine);
      }
    });
    setText(capEachLine.join("\n"));
    props.showAlert("Capitalized Each Words!", "success");
  };
  const handleRemoveSpace = () => {
    const lines = text.split(/\n/);
    const finalLines = [];
    lines.forEach(function (line) {
      let newLine = line.split(/\s+/).filter((element) => {
        return element.length !== 0;
      });
      finalLines.push(newLine.join(" "));
    });

    setText(finalLines.join("\n"));
    props.showAlert("Extra Space Removed!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard!", "success");
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="my-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            id="myBox"
            rows="7"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#071E3D",
              color: props.mode === "light" ? "black" : "white",
              fontSize: "17px",
            }}
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-info m-2" style={{ fontWeight: "500" }} onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button disabled={text.length === 0} className="btn btn-info m-2" style={{ fontWeight: "500" }} onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-info m-2" style={{ fontWeight: "500" }} onClick={handleCapitalizedClick}>
          Capitalized Each Words
        </button>
        <button disabled={text.length === 0} className="btn btn-info m-2" style={{ fontWeight: "500" }} onClick={handleRemoveSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-info m-2" style={{ fontWeight: "500" }} onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button disabled={text.length === 0} className="btn btn-info m-2" style={{ fontWeight: "500" }} onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summery</h2>
        <p>
          Words :{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          <br /> Characters : {text.length}{" "}
        </p>
        <h2>Text Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
