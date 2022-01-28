import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    if(text.length === 0){
        props.showAlert("Please enter something in the text box below!", "danger")
        return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    if(text.length === 0){
        props.showAlert("Please enter something in the text box below!", "danger")
        return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    if(text.length === 0){
        props.showAlert("Please enter something in the text box below!", "danger")
        return;
    }
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
  }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#272936",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Lower Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-danger mx-1 my-1"
          onClick={() => {
            setText("");
            props.showAlert("Cleared!", "success");
          }}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words; {text.length} characters
        </p>
        <p>{0.008 * (text.split(/\s+/).filter((element) => {return element.length !== 0}).length)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something in the textbox above to preview it here."}</p>
      </div>
    </>
  );
}
