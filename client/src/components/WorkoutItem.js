import React from 'react';
import { Link } from 'react-router-dom';

function WorkoutItem(props) {
  return (
    <>
      <li className='workout__item'>
        <Link className='workout__item__link' to={props.path}>
          <figure className='workout__item__pic-wrap' data-category={props.label}>
            <img
              className='workout__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='workout__item__info'>
            <h5 className='workout__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default WorkoutItem;