import React, { useEffect, useState } from "react";
import "../App.css";
import client from "../backend-client";
import "./WorkoutCard.css";
import "./History.css";
import WorkoutCard from "./WorkoutCard";

function WorkoutList({ userId }) {
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
  };
  useEffect(() => {
    updateWorkouts();
  }, []);

  // Delete Workouts
  const workoutsList =
    workouts && workouts.length ? (
      workouts.map((w) => {
        const onDelete = () => {
          client.deleteWorkout(userId, w.id).then(() => {
            updateWorkouts();
          });
        };
        return <WorkoutCard content={w} onDelete={onDelete} />;
      })
    ) : (
      <div>No workouts logged!</div>
    );

  return <div className="history-container">{workoutsList}</div>;
}

export default WorkoutList;
