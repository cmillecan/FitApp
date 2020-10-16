import React from 'react';
import './Demo.css';
import WorkoutItem from './WorkoutItem';

function Workout() {
  return (
    <div className='workout'>
      <h1>HOW IT WORKS</h1>
      <div className='workout__container'>
        <div className='workout__wrapper'>
          <ul className='workout__items'>
            <WorkoutItem
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <WorkoutItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Workout;