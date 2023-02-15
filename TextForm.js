import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handleUpClick button is clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("handleUpClick button is clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const deleteText = () => {
    // console.log("handleUpClick button is clicked"+text);
    let newText = text.substring(text.length);
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("enter the text");
  // text="this is the new text"   //this is the wrong way to change the state
  //setText="this is the new text"   //this is the wrong way to change the state
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="5"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Click to Convert UpperCase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleLowClick}
          >
            Click to Convert LowerCase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={deleteText}>
            Click to Delete the Text
          </button>
        </div>
      </div>
      <div className="container mx-3 my-3 text-primary">
        <h1>You Text Summary</h1>
        <p>
          Total Texts= {text.length} <br /> Total Words={" "}
          {text.split(" ").length} <br />
          {text.split(" ").length * 0.008} Minutes Read
        </p>
        <br />
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}
