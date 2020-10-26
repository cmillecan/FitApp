import React from 'react';
import './Demo.css';
import DB from '../DB.svg';

function Cards() {
  return (
      <div className='demo-container'>
          <h1>HOW IT WORKS</h1>
          <div className='cards-content'>

              <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-main">
                      <div className="main-description">Sign-in with Google</div>
                  </div>
              </div>

              <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-main">
                      <div className="main-description">Create a workout</div>
                  </div>
              </div>

              <div className="card">
                  <div className="card-header">
                  </div>
                  <div className="card-main">
                      <div className="main-description">View your workouts <img src={DB} alt="Dumbbells" /></div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Cards;