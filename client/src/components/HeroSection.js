import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import WorkoutCard from './WorkoutCard';

function HeroSection() {
  const exercises = [
    { exercise: "squat", schema: "3 x 10", weight: 135, unit: "lb" },
    { exercise: "deadlift", schema: "3 x 10", weight: 135, unit: "lb" },
    { exercise: "bench", schema: "3 x 10", weight: 135, unit: "lb" }
  ]

  return (
    <div className='hero-container'>
      <div className='hero-left'>
        <div className='left-content'>

          <h1>PLAN YOUR WORKOUTS ONLINE</h1>
          <p>Welcome to FitApp, an easy and paperless way to keep track of your workouts.</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              HOW IT WORKS
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>

      {/* right container */}
      <div className='hero-right'>
        <WorkoutCard date="Today" category="Legs" exercises={exercises} notes="Notes: sldkfjsldkjfslkdjfsldkfjkldsfjdklsjfdklsfj"/>
      </div>
    </div>
  );
}

export default HeroSection;