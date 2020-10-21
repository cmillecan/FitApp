import React from 'react';
import './Demo.css';
import { Carousel } from 'antd';
import WorkoutCard from './WorkoutCard';
import './WorkoutCard.css';

function onChange(a, b, c) {
    console.log(a, b, c);
}

function Cards() {
  return (
    <div className='cards'>
      <h1>HOW IT WORKS</h1>
        <div className='demoDiv'>
        <div className='demo'>
        <Carousel autoplay>
            <div>
                <h3 className='contentStyle'>1 Sign in with Google</h3>
            </div>
            <div>
                <h3 className='contentStyle'>2 Create a workout</h3>
            </div>
            <div>
                <h3 className='contentStyle'>3 View your workout</h3>
            </div>
        </Carousel>
        </div>
        </div>
    </div>
  );
}

export default Cards;