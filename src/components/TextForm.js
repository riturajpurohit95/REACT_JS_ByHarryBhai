import React, {useState} from "react";

export default function TextForm(props) {
    const HandleUpprClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!","success");
    }
    const HandleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!","success");
    }
    const  HandleClearClick = () =>{
        setText("");
        props.showAlert("Text has been cleared!","success");
    }
    const HandleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Coppied to clipboard!","success");
    }
    const HandleSpaceClick = () =>{
      let newText = text.split(/[ ]+/g);
      setText(newText.join(" "));
      props.showAlert("Space handled!","success");
    }
    const HandleOnChange = (event) =>{
        setText(event.target.value);
    }
  const [text,setText] = useState("Enter text here");
//   text="abcdf"  // Wrong way to change the state
//   setText("Enter your text");  //Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h4>{props.heading}</h4>
        <textarea
          className={`form-control bg-${props.mode}`}
          value={text}
          onChange={HandleOnChange}
          style={{color: props.mode==='dark'?'white':'black'}}
          id="mybox"
          rows="8"
        ></textarea>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} my-2`} onClick={HandleUpprClick}>
            Convert to UpperCase
        </button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2`} onClick={HandleLowerClick}>
            Convert to LowerCase
        </button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} `} onClick={HandleClearClick}>
            Clear text
        </button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} mx-2`} onClick={HandleCopyClick}>
            Copy text
        </button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'primary'} `} onClick={HandleSpaceClick}>
            Remove Extra Space
        </button>
      </div>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary</h4>
        <p>{text.split(' ').filter((t)=>t!="").length} words and {text.split('').filter((t)=>t!=" ").length} characters</p>
        <p>{0.008 * text.split(' ').filter((t)=>t!="").length} minutes to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  );
}
