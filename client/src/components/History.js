import React, {useEffect, useState} from 'react';
import '../App.css';
import client from "../backend-client";
import './WorkoutCard.css';
import './History.css';
import WorkoutCard from "./WorkoutCard";

function WorkoutList( { userId }) {
    const [workouts, setWorkouts] = useState();
    const updateWorkouts = () => {
        client
            .getWorkouts(userId)
            .then((res) => res.json())
            .then((data) => {
                data && setWorkouts(data);
            })
            .catch((e) => {
                console.error("getWorkouts failed: ", e);
            });
    }
    useEffect(() => {
        updateWorkouts();
    }, []);

    // Delete Workouts
    const workoutsList = workouts && workouts.length ? workouts.map(w => {
        const onDelete = () => {
            client.deleteWorkout(userId, w.id).then(() => {
                updateWorkouts();
            })
        }
        return <WorkoutCard content={w} onDelete={onDelete} />
    }) : <div>No workouts logged!</div>

    // Group Workouts into 3 per row
    // const groupedWorkouts = [];
    // workouts.forEach((w, i) => {
    //     const bigIndex = Math.floor(i / 3);
    //     if (i % 3 === 0) {
    //         groupedWorkouts.push([]);
    //     }
    //     groupedWorkouts[bigIndex].push(w);
    // });
    // const workoutContent = groupedWorkouts.map((gw) => {
    //     return (
    //         <div className="workoutsRow">
    //             {gw.map((w) => {
    //                 return (
    //                     <WorkoutCard exercise={w.exercise} weight={w.weight} date={w.date} />
    //                 );
    //             })}
    //         </div>
    //     );
    // });

    return (
        <div className='history-container'>
           {/*{workoutContent}*/}
            {workoutsList}
        </div>
    );
}

export default WorkoutList;