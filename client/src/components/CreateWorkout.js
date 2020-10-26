import React, {Fragment, useState} from 'react';
import '../App.css';
import './CreateWorkout.css';
import { useForm } from "react-hook-form";
import client from "../backend-client";

const CreateWorkout = (props) => {
    const { userId } = props;
    const { handleSubmit, register } = useForm();
    const onSubmit = values => {
        const { category, exercise, schema, weight, unit } = values;
        client
            .createWorkout(userId, {
                category,
                exercises: [{ exercise, schema, weight, unit }],
            })
            .then(() => console.log("success!"))
            .catch((e) => console.error(e));
    };

    // Add input field
    const [inputFields, setInputFields] = useState([
        {exercise:'', sets:'', wt:'', lbs:''}
    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({exercise:'', sets:'', wt:'', lbs:''});
        setInputFields(values);
    };
    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "firstName") {
            values[index].firstName = event.target.value;
        } else {
            values[index].lastName = event.target.value;
        }
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

                            {inputFields.map((inputField, index) => (
                                <Fragment key={`${inputField}~${index}`}>

                            <div className='exercise-row'>
                                <label>
                                    exercise*
                                    <input className='ex' type='text' name='exercise' ref={register} onChange={event => handleInputChange(index, event)} />
                                </label>
                                <label>
                                    sets/reps
                                    <input className='sets' type='text' name='schema' ref={register} />
                                </label>
                                <label>
                                    wt
                                    <input className='wt' type='text' name='weight' ref={register} />
                                </label>
                                <label>
                                    lbs
                                    <input className='lbs' type='text' name='unit' ref={register} />
                                </label>
                                <button
                                    className='add-btn'
                                    type="button"
                                    onClick={() => handleAddFields()}
                                >
                                    +
                                </button>
                            </div>
                                </Fragment>
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