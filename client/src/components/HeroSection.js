import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import WorkoutCard from './WorkoutCard';
import BB from '../BB.svg';
import DB from '../DB.svg';

function HeroSection() {
  const exercises = [
    { exercise: "squat", schema: "3 x 10", weight: 135, unit: "lb" },
    { exercise: "deadlift", schema: "3 x 10", weight: 135, unit: "lb" },
    { exercise: "bench", schema: "3 x 10", weight: 135, unit: "lb" },
    { exercise: "run", schema: "", weight: 20, unit: "min" },
    { exercise: "yoga", schema: "", weight: 20, unit: "min" }
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
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
          </div>
          <div className='pictures'>
            <div className='BB'><img src={BB} alt='barbell' /></div>
            <div className='DB'><img src={DB} alt='dumbbell' /></div>
        </div>
      </div>
      </div>

      {/* right container */}
      <div className='hero-right'>
        <WorkoutCard date="Today" category="Exercise Category" exercises={exercises} notes="Notes: sldkfjsldkjfslkdjfsllsdkfjsldkjflsdkjflsdkjflsdkfjlsdkjfldskjfldskjflsdkjfklsddkfjkldsfjdklsjfdklsfj"/>
      </div>
    </div>
  );
}

export default HeroSection;