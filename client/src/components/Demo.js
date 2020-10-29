import React from "react";
import "./Demo.css";
import demo1 from "../sign-in.png";
import demo2 from "../plan.png";
import demo3 from "../view.png";
import { Carousel } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

function Cards() {
  return (
    <div className="demo-container">
      <h1>HOW IT WORKS</h1>

      <div className="cards-content">
        <div className="card">
          <div className="card-header">
            <img className="demo-pic" src={demo1} alt="sign-in with google" />
          </div>
          <div className="card-main">
            <div className="main-description">1. Sign-in with Google</div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="demo-pic1" src={demo2} alt="sign-in with google" />
          </div>
          <div className="card-main">
            <div className="main-description">2. Create a workout</div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="demo-pic2" src={demo3} alt="sign-in with google" />
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
