import React, {useEffect, useState} from 'react';
import '../App.css';
import client from "../backend-client";
import {CalendarTwoTone} from "@ant-design/icons";
import './WorkoutCard.css';
import './History.css';
import WorkoutCard from "./WorkoutCard";

function WorkoutList( { userId }) {
    const [workouts, setWorkouts] = useState();

    useEffect(() => {
        client
            .getWorkouts(userId)
            .then((res) => res.json())
            .then((data) => {
                data && setWorkouts(data);
            })
            .catch((e) => {
                console.error("getWorkouts failed: ", e);
            });
    }, []);

    const workoutsList = workouts && workouts.length ? workouts.map(w => <WorkoutCard content={w} />) : <div>No workouts logged!</div>

    return (
        <div className='history-container'>
            <div className='historyCard'>
                <div className="date" ><CalendarTwoTone twoToneColor='#00A1BD' /></div>

                <div className='category'>
                    {workoutsList}
                </div>
            </div>
        </div>
    );
}

export default WorkoutList;