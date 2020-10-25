import React from 'react';
import './Demo.css';

function Cards() {
  return (
      <div className='demo-container'>
          <h1>HOW IT WORKS</h1>
          <div className='cards-content'>
              <div className="card">
                  <div className="card-header">Night</div>
                  <div className="card-main">
                      <i className="material-icons">hot_tub</i>
                      <div className="main-description">Hot Tub</div>
                  </div>
              </div>
              <div className="card">
                  <div className="card-header">Night</div>
                  <div className="card-main">
                      <i className="material-icons">hot_tub</i>
                      <div className="main-description">Hot Tub</div>
                  </div>
              </div>
              <div className="card">
                  <div className="card-header">Night</div>
                  <div className="card-main">
                      <i className="material-icons">hot_tub</i>
                      <div className="main-description">Hot Tub</div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Cards;