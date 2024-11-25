import React from 'react'

function Home() {
  return (
    <div>
         <div className="container my-5" style={{ paddingTop: '70px' }}>
      <h2 className="text-center mb-4">Welcome to Your Dashboard</h2>
      <div className="row g-4">
        {/* Upcoming Companies */}
        <div className="col-md-6 col-lg-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Upcoming Companies</h5>
              <p className="card-text">View the list of companies visiting for recruitment.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>

        {/* Upcoming Tests */}
        <div className="col-md-6 col-lg-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Upcoming Tests</h5>
              <p className="card-text">Check the schedule for upcoming tests.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>

        {/* Your Filled Forms */}
        <div className="col-md-6 col-lg-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Your Filled Forms</h5>
              <p className="card-text">Review the forms you have already filled.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="col-md-6 col-lg-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Results</h5>
              <p className="card-text">Check your test and interview results.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home