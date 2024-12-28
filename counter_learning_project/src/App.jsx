import React, { useState } from "react";
import Nav from './components/Nav';
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from './components/About'; 
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [alert, setalert] = useState(null);
    const [mode, setmode] = useState('light'); // Start with 'light'

    const showalert = (message, type) => {
        setalert({ msg: message, type: type });
        setTimeout(() => setalert(null), 2000); // Auto-dismiss alert
    };

    const changemode = () => {
        if (mode === 'light') {
            setmode('dark');
            document.body.style.backgroundColor = 'black';
            showalert("Dark mode enabled", "success");
        } else {
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showalert("Light mode enabled", "success");
        }
    };

    return (
        <>
            {/* Removed Router and Routes */}
            <Nav title="textmax" mode={mode} changemode={changemode} />
            <Alert alert={alert} />
            <div className="container">
                {/* Render the desired components directly */}
                <Textform
                    text="Enter the text to analyze"
                    mode={mode}
                    showalert={showalert}
                />
                {/* Uncomment and use this if you want to include the About component directly */}
                {/* <About mode={mode} /> */}
            </div>
        </>
    );
}

export default App;
