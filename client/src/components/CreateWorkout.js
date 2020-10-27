import React, {useState} from 'react';
import '../App.css';
import './CreateWorkout.css';
import { useForm } from "react-hook-form";
import client from "../backend-client";
import {useHistory} from "react-router-dom";

const CreateWorkout = (props) => {
    const history = useHistory();
    const { userId } = props;
    const { handleSubmit, register } = useForm();
    // Add input field
    const [exerciseInputs, setExerciseInputs] = useState([
        {exercise:'', schema:'', weight:'', unit:''}
    ]);
    const onSubmit = values => {
        const { category, notes } = values;
        client
            .createWorkout(userId, {
                category,
                notes,
                exercises: exerciseInputs,
            })
            .then(() => history.push('/history'))
            .catch((e) => console.error(e));
    };

    const handleAddFields = () => {
        const values = [...exerciseInputs];
        values.push({exercise:'', schema:'', weight:'', unit:''});
        setExerciseInputs(values);
    };
    const handleInputChange = (index, event) => {
        const values = [...exerciseInputs];
        if (event.target.name === 'exercise') {
            values[index].exercise = event.target.value;
        } else if (event.target.name === 'schema') {
            values[index].schema = event.target.value;
        } else if (event.target.name === 'weight') {
            values[index].weight = event.target.value;
        } else if (event.target.name === 'unit') {
            values[index].unit = event.target.value;
        }
        setExerciseInputs(values);
    }

    return (
        <div className='plan-container'>
            {/* Workout Form */}
            <div className='workoutForm'>
                <div className='form-content'>
                    <div className='header'>Create a workout</div>
                    <div className='form-css'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                category*
                                <input className='cat' type='text' name='category' ref={register} />
                            </label>
                            {exerciseInputs.map((inputField, index) => (
                                <div key={`${inputField}~${index}`} className='exercise-row'>
                                    <label>
                                        exercise*
                                        <input className='ex' type='text' name='exercise' onChange={event => handleInputChange(index, event)} />
                                    </label>
                                    <label>
                                        sets/reps
                                        <input className='sets' type='text' name='schema' onChange={event => handleInputChange(index, event)} />
                                    </label>
                                    <label>
                                        wt
                                        <input className='wt' type='text' name='weight' onChange={event => handleInputChange(index, event)} />
                                    </label>
                                    <label>
                                        lbs
                                        <input className='lbs' type='text' name='unit' onChange={event => handleInputChange(index, event)} />
                                    </label>
                                    <button
                                        className='add-btn'
                                        type="button"
                                        onClick={() => handleAddFields()}
                                    >
                                        +
                                    </button>
                                </div>
                            ))}
                            <label>
                                notes
                                <input className='note' type='text' name='notes' ref={register} />
                            </label>
                            <div className='button-row'>
                                <input className='submit-btn' type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateWorkout;