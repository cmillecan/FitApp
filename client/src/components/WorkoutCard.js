import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = ({date, category, exercises}) => {
  const renderExercises = exercises.map(e => <div className="exerciseItem">
    <span>{e.exercise}</span>
    <span>{e.schema}</span>
    <span>{e.weight} {e.unit}</span>
  </div>)

  return (
    <div className="workoutCard">
      <div className="date">{date}</div>
      <div className="category">{category}</div>
      {renderExercises}
    </div>
  )
}

export default WorkoutCard