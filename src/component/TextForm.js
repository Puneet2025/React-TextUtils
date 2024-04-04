import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleDownClick = () =>{
        console.log("LowerCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClear = () =>{
        console.log("Clear text" + text);
        let newText = ("");
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleInverse = () =>{
        console.log("Reverse the text" + text);
        let newText = (" " + text.split ('').reverse ().join (''));
        setText(newText);
        props.showAlert("Converted to Inverse-case!", "success");
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("Hello"); Wrong way to declare a text
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-secondary mx-2 my-3" onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleClear}>Clear text</button>
                <button className="btn btn-danger mx-2 my-3" onClick={handleInverse}>Convert text to Reverse</button>
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read Words</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ?text:"Enter something in the text"}</p>
        </div>
        </>
    );
}
