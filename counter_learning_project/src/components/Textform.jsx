import React, { useState } from 'react'
function Textform(props) {
    const [text , settext] = useState('enter text here')
    const handleclick  = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        
    }
    const handleonchange  = (event)=>{
       settextg(event.target.value)
        
    }
  return (
    <div>
        <h1>{props.text}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8"value={text} onChange={handleonchange} ></textarea>
        </div>
        <button className="btn btn-primary" mb="3" onClick={handleclick}>convert to upper case</button>
    
    </div>
  )
}

export default Textform;
