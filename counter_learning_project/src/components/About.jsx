import React from 'react';

function About(props) {
  const mystyle = {
    backgroundColor: props.mode === 'light' ? 'white' : 'black',
    color: props.mode === 'light' ? 'black' : 'white',
  };

  return (
    <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
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
              style={mystyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
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
              style={mystyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.changemode}
        >
          {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
        </button>
      </div>
    </div>
  );
}

export default About;
