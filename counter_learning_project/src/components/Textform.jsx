import React, { useState } from 'react'
function Textform(props) {
    const [text , settext] = useState('enter text here')
    const handleupclick  = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        
    }
    const handleloclick  = ()=>{
      let newtext=text.toLocaleLowerCase();
      settext(newtext)
      
  }
  const clear  = ()=>{
    let newtext='';
    settext(newtext)
    
}
const coppy =()=>{
  navigator.clipboard.writeText(text)

}
const space=()=>{
  let newtext = text.trim().replace(/\s+/g, ' ');
  settext(newtext)
}
    const handleonchange  = (event)=>{
       settext(event.target.value)
        
    }
    
  return (
    < >
    <div>
        <h1>{props.text}</h1>
        <div className="mb-3 ">
        <textarea className="form-control " id="mybox" rows="8"value={text} onChange={handleonchange} ></textarea>
        </div>
        <button className="btn btn-primary mb-3 mx-2"onClick={handleupclick}>convert to upper case</button>
        <button className="btn btn-primary mb-2 mx-2"onClick={handleloclick}>convert to upper case</button>
        <button className="btn btn-primary mb-2 mx-2"onClick={clear}>clear text</button>
        <button className="btn btn-primary mb-2 mx-2"onClick={coppy}>coppy text</button>
        <button className="btn btn-primary mb-2 mx-2"onClick={space}>remove extra spaces</button>



    </div>
    <div className="container2">
      <p>{text.length} is the length of the text</p>
      <p>{0.008 * (text.split(" ").length-1)} mitutes to read</p>
      <p>{text.split(" ").length-1} word in the text</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Textform;
