import { useState } from "react"
import Nav from './components/Nav';
import Textform from './components/Textform'; 
function App() {
  
  return (
    <>
    <Nav title="textmax" />
    <div className="container">    
      <Textform text="enter the text to analyze"/>
    </div>
    </>
  );

}

export default App
