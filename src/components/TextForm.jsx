import React,{useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Uppercaase waas clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
      };
    
      const handleLowClick = () => {
        console.log("Uppercaase waas clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
      };
    
      const handleClearClick = () => {
        // console.log("Uppercaase waas clicked" + text);
        let newText = "";
        setText(newText);
      };
    
      const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
      };
    
      const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      };
    

  return (
    <>
    <div className="conatiner">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          copy text
        </button>
      </div>
      <div className="container">
        <h1>your text summary</h1>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
