import React, { useState } from 'react';

function About() {
  const [mystytle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const mode = () => {
    setmystyle((prevStyle) => ({
      color: prevStyle.color === 'white' ? 'black' : 'white',
      backgroundColor: prevStyle.backgroundColor === 'black' ? 'white' : 'black',
    }));
  };

  return (
    <div className="container" style={mystytle} >
      <h1>About us</h1>
      <div className="accordion" id="accordionExample" style={mystytle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystytle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystytle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystytle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystytle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystytle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystytle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3" style={mystytle}>
        <button type="button" className="btn btn-primary" onClick={mode}>
          {mystytle.color === 'white' ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default About;
