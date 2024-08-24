import React, { useState } from 'react';


export default function Textform(props) {

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked", text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newText =  '';
        setText(newText);
        props.showAlert("Text has been cleared","success"); 
    }

    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
        
     }
     
      const [text, setText] = useState('');

     return (
        <>
        <div className='container my-4' style={{color: props.mode==='dark' ? 'white' : 'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#564b83' : 'white',color: props.mode==='dark' ? 'white' : 'black'}} id="mybox" rows="12"></textarea>
            </div>
            <button  disabled={text.length===0}  className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button  disabled={text.length===0}  className="btn btn-warning mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button  disabled={text.length===0}  className="btn btn-secondary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>
            <button  disabled={text.length===0}  className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className='container my-3'  style={{color: props.mode==='dark' ? 'white' : 'black'}}>
            <h1>Your text summary </h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter the text to preview it here"}</p>
        </div>
        </>
    );
}