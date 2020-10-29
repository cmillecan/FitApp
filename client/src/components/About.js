import React from "react";
import "./About.css";
import pic from "../about.JPG";
import { Link } from "react-router-dom";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

function About() {
  return (
    <div className="about-container">
      <h1>ABOUT</h1>
      <div className="about-content">
        <div className="left">
          <img className="about-pic" src={pic} alt="about" />
          <div className="name">Constance Millecan</div>
          <div className="social-icons">
            <Link
              className="social-icon-link github"
              to="github.com/cmillecan/FitApp"
              target="_blank"
              aria-label="Github"
            >
              <GithubOutlined />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="twitter.com/cmillecan"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterOutlined />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="linkedin.com/cmillecan"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined />
            </Link>
          </div>
        </div>

        <div className="right">
          When thinking about my final project for Holberton School, I knew that
          I wanted to create something functional. Exercise has been an
          important part of my life so I thought of an app to plan and save
          workouts. I had used notebooks, Microsoft Word, and Google Sheets to
          log my workouts in the past. I don't use paper much anymore and I
          found the other apps too slow and would eventually stop using them. My
          solution was to create something simpler. The main goals I had in mind
          when designing FitApp were being able to track progress and create
          customized workouts. I chose to make a full-stack web application that
          would give me both frontend and backend experience. I also had an
          interest in learning Javascript. FitApp was built using React,
          Express, and Sequelize.
        </div>
      </div>
    </div>
  );
}

export default About;
