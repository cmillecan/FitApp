import React from 'react';
import './WorkoutCard.css';
import { CalendarTwoTone} from '@ant-design/icons';

const WorkoutCard = ({date, exercises, category, notes}) => {
  const renderExercises = exercises.map(e => <div className="exerciseItem">
    <span>{e.exercise}</span>
    <span>{e.schema}</span>
    <span>{e.weight} {e.unit}</span>
  </div>)

  return (
      <div className="workoutCard">
        <div className='top-card'>
            <div className='cal'><CalendarTwoTone twoToneColor='#ffa23e' /></div>
            <div className="date" >{date}</div>
        </div>

        <div className='category'>{category}</div>
        {renderExercises}
        <div className="notes">{notes}</div>
      </div>
  );
}

export default WorkoutCard;