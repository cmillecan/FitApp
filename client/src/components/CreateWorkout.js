import React from 'react';
import '../App.css';
import './CreateWorkout.css';
import { useForm } from "react-hook-form";
import client from "../backend-client";

const CreateWorkout = (props) => {
    const { userId } = props;
    const { handleSubmit, register } = useForm();
    const onSubmit = values => {
        const { category, exercise, schema, weight, unit } = values;
        client.createWorkout(userId, { category, exercise, schema, weight, unit }).then( () => console.log('success!')).catch((e) => console.error(e))
    }

    return (
        <div className='plan-container'>
            {/* Workout Form */}
            <div className='workoutForm'>
                <div className='header'>Create a workout</div>
                <div className='form-css'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            category
                            <input type='text' name='category' ref={register} />
                        </label>
                        <label>
                            exercise
                            <input type='text' name='exercise' ref={register} />
                        </label>
                        <label>
                            sets/reps
                            <input type='text' name='schema' ref={register} />
                        </label>
                        <label>
                            weight/time
                            <input type='text' name='weight' ref={register} />
                        </label>
                        <label>
                            lbs/miles/minutes
                            <input type='text' name='unit' ref={register} />
                        </label>
                        <label>
                            notes
                            <input type='text' name='notes' ref={register} />
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateWorkout;