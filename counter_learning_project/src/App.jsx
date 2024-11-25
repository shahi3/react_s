import { useState } from "react"
import Nav from './components/Nav';
import Textform from './components/Textform'; 
import About from './components/About';
function App() {
  
  return (
    <>
    <Nav title="textmax" />
    <div className="container">    
      <Textform text="enter the text to analyze"/>
    </div>
    <About/>
    </>
  );

}

export default App
