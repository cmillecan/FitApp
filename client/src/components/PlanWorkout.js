import React from 'react';
import '../App.css';
import './PlanWorkout.css';

function Plan() {
    const exercises = [
        { exercise: "squat", schema: "3 x 10", weight: 135, unit: "lb" },
        { exercise: "deadlift", schema: "3 x 10", weight: 135, unit: "lb" },
        { exercise: "bench", schema: "3 x 10", weight: 135, unit: "lb" }
    ]
    return (
        <div className='plan-container'>
            {/* Workout Form */}
            <div className='workoutForm'>
                Plan Workout
            </div>
        </div>
    );
}

export default Plan;