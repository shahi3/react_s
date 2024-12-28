import React, { useState } from 'react';

function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showalert("Converted to uppercase", "success");
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showalert("Converted to lowercase", "success");
    };

    const handleClear = () => {
        setText('');
        props.showalert("Text cleared", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Text copied to clipboard", "success");
    };

    const handleRemoveSpaces = () => {
        setText(text.trim().replace(/\s+/g, ' '));
        props.showalert("Extra spaces removed", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <h1>{props.text}</h1>
                <textarea
                    className="form-control"
                    style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'black',
                        color: props.mode === 'light' ? 'black' : 'white',
                    }}
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                />
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <p>{text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word.length).length} minutes to read</p>
                <p>{text.split(/\s+/).filter(word => word.length).length} words</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview here'}</p>
            </div>
        </>
    );
}

export default Textform;
