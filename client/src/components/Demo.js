import React from 'react';
import './Demo.css';

function Cards() {
  return (
      <div className='demo-container'>
          <h1>HOW IT WORKS</h1>
          <div className='cards-content'>

              <div className="card">
                  <div className="card-header">

                  </div>
                  <div className="card-main">
                      <div className="main-description">1. Sign-in with Google</div>
                  </div>
              </div>

              <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-main">
                      <div className="main-description">2. Create a workout</div>
                  </div>
              </div>

              <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-main">
                      <div className="main-description">3. View your workout</div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Cards;