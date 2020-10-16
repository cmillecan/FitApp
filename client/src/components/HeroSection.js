import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Workout.css';
import Workout from './Workout';
import WorkoutItem from './WorkoutItem';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>PLAN YOUR WORKOUTS</h1>
      <p>What are you waiting for?</p>
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
          onClick={console.log('hey')}
        >
         GET STARTED
        </Button>
        </div>
{/*
      <div className='right-div'>
        <WorkoutItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
      </div>
*/}
    </div>
  );
}

export default HeroSection;