import React,{useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Uppercaase waas clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
      };
    
      const handleLowClick = () => {
        console.log("Uppercaase waas clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

      };
    
      const handleClearClick = () => {
        // console.log("Uppercaase waas clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");

      };
    
      const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
        
      };
    
      const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard222222222222","success");

      };
    

  return (
    <>
    <div className="pageLayout" style={{color:props.mode==='dark'?'white':'#084e87'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#084e87'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          convert to Uppercase 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          convert to Lowercase 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          clear text 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          copy text
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#084e87'}}>
        <h1>your text summary</h1>
        <p>
          {text.split("").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}

export default TextForm
