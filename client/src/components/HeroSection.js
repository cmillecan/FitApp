import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import WorkoutCard from "./WorkoutCard";

function HeroSection({ user }) {
  const exercises = [
    { exercise: "swing", schema: "", weight: "40", unit: "sec" },
    { exercise: "press combo", schema: "", weight: "40", unit: "sec" },
    { exercise: "plank pass", schema: "", weight: "40", unit: "sec" },
    { exercise: "dead/squat", schema: "", weight: "40", unit: "sec" },
    { exercise: "lunge/press", schema: "", weight: "40", unit: "sec" },
  ];

  const heroButton = user ? (
    <a href="/plan" className="btn-mobile">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        PLAN WORKOUT
      </Button>
    </a>
  ) : (
    <a href="/api/auth/google" className="btn-mobile">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        GET STARTED
      </Button>
    </a>
  );

  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="left-content">
          <h1>PLAN YOUR WORKOUTS ONLINE</h1>
          <p>
            Welcome to FitApp, an easy and paperless way to keep track of your
            workouts.
          </p>
          <div className="hero-btns">{heroButton}</div>
        </div>
      </div>

      {/* right container */}
      <div className="hero-right">
        <WorkoutCard
          isDemo
          content={{
            date: "Today",
            category: "KETTLEBELL HIIT",
            exercises,
            notes: "Repeat 3x. Rest 20 seconds between each exercise",
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
