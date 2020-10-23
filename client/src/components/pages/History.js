import React, {useEffect, useState} from 'react';
import '../../App.css';
import CreateWorkout from "../CreateWorkout";
import client from "../../backend-client";

function History() {
    const [workout, setWorkout] = useState();

    useEffect(() => {
        client
            .getUser()
            .then((res) => res.json())
            .then((data) => {
                data && setWorkout(data);
            })
            .catch((e) => {
                console.error("getUser failed: ", e);
            });
    }, []);


  return (
      <>
        <CreateWorkout />
      </>
  );
}

export default History;