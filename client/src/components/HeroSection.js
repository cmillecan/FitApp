import React from 'react';
import '../App.css';
import { Button } from './Button';
import { ButtonPlan } from './ButtonPlan'
import './HeroSection.css';
import WorkoutCard from './WorkoutCard';

function HeroSection({user}) {
  const exercises = [
    { exercise: "warm-up", schema: "bike", weight: 10, unit: "min" },
    { exercise: "squats", schema: "3 x 10", weight: "135", unit: "lbs" },
    { exercise: "DB lunges", schema: "3 x 10", weight: "25", unit: "lbs"},
    { exercise: "SLD", schema: "3 x 10", weight: "60", unit: "lbs" },
    { exercise: "leg extns", schema: "3 x 10" },
    { exercise: "hamstring curls", schema: "3 x 10" }
  ]

    const heroButton = user ? (
        <ButtonPlan
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            PLAN WORKOUT
        </ButtonPlan>
    ) : (
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            GET STARTED
        </Button>
    );

  return (
    <div className='hero-container'>
      <div className='hero-left'>
        <div className='left-content'>

          <h1>PLAN YOUR WORKOUTS ONLINE</h1>
          <p>Welcome to FitApp, an easy and paperless way to keep track of your workouts.</p>
          <div className='hero-btns'>
              {heroButton}
          </div>
      </div>
      </div>

      {/* right container */}
      <div className='hero-right'>
        <WorkoutCard isDemo content={{date: 'Today', category: 'Legs', exercises, notes: 'Notes:'}} />
      </div>
    </div>
  );
}

export default HeroSection;