import React from 'react';
import '../App.css';
import './CreateWorkout.css';
import { DatePicker } from 'antd';
import { useForm } from "react-hook-form";

const CreateWorkout = () => {
        const { handleSubmit, register, errors} = useForm();
        const onSubmit = values => console.log(values);

    return (
        <div className='plan-container'>
            {/* Workout Form */}
            <div className='workoutForm'>
                <DatePicker type='primary'>Choose</DatePicker>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                    <input type='text' name='category' placeholder='category' ref={register} />
                    </label>
                    <label>
                        <input type='text' name='exercise' placeholder='exercise 'ref={register} />
                    </label>
                    <label>
                        <input type='text' name='schema' placeholder='sets/reps' ref={register} />
                    </label>
                    <label>
                        <input type='text' name='weight' placeholder='weight/time' ref={register} />
                    </label>
                    <label>
                        <input type='text' name='unit' placeholder='lb/kg/minutes/miles' ref={register} />
                    </label>
                    <input type="submit" />
                </form>

            </div>
        </div>
    );
}

export default CreateWorkout;