import React from 'react';
import './WorkoutCard.css';
import { CalendarTwoTone} from '@ant-design/icons';
import moment from 'moment';

const WorkoutCard = ({content, isDemo, onDelete}) => {
  const {createdAt, exercises, category, notes, id} = content;
  const renderExercises = exercises.map(e => <div className="exerciseItem">
    <span>{e.exercise}</span>
    <span>{e.schema}</span>
    <span>{e.weight} {e.unit}</span>
  </div>)

  const format = 'ddd, MMM Do YYYY';
  const formattedDate = moment(createdAt).format(format);
  const deleteButton = isDemo ? null : <div className='delete-w' onClick={onDelete}>Delete</div>
  return (
      <div className="workoutCard">
          <div className="date" ><CalendarTwoTone twoToneColor='#00A1BD' /> {formattedDate}</div>

        <div className='category'>{category}</div>
        {renderExercises}
        <div className="notes">{notes}</div>
          <div className='delete-div'>{deleteButton}</div>
      </div>
  );
}

export default WorkoutCard;