import React from 'react';
import './Demo.css';
import CardItem from './CardItem';
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}

function Cards() {
  return (
    <div className='cards'>
      <h1>HOW IT WORKS</h1>
        <Carousel afterChange={onChange}>
            <div>
                <h3 className='contentStyle'>1 Sign-in to Google</h3>
            </div>
            <div>
                <h3 className='contentStyle'>2 Create a workout</h3>
            </div>
            <div>
                <h3 className='contentStyle'>3 View your workout</h3>
            </div>
        </Carousel>
      <div className='cards__container'>
            <CardItem
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
      </div>
    </div>
  );
}

export default Cards;