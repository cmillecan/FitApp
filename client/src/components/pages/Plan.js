import React from 'react';
import '../../App.css';
import CreateWorkout from '../CreateWorkout.js'

function Plan({userId}) {
  return (
      <CreateWorkout userId={userId} />
  );
}

export default Plan;