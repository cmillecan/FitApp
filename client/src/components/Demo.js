import React from 'react';
import './Demo.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>HOW IT WORKS</h1>
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