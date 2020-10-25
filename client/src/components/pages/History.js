import React from 'react';
import '../../App.css';
import WorkoutList from "../History";

function History( { userId }) {
    return (
        <WorkoutList userId={userId} />
    );
}

export default History;