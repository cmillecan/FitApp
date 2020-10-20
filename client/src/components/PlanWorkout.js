import React from 'react';
import '../App.css';
import './PlanWorkout.css';
import { DatePicker } from 'antd';

function Plan() {
     // const exercises = [
     //    { exercise: "squat", schema: "3 x 10", weight: 135, unit: "lb" },
     //    { exercise: "deadlift", schema: "3 x 10", weight: 135, unit: "lb" },
     //    { exercise: "bench", schema: "3 x 10", weight: 135, unit: "lb" }
    // ]
    return (
        <div className='plan-container'>
            {/* Workout Form */}
            <div className='workoutForm'>
                <DatePicker type='primary'>Choose</DatePicker>
            </div>
        </div>
    );
}

export default Plan;