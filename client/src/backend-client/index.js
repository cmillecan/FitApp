const host = "http://localhost:3000";

const client = {
    getUser() {
        return fetch(`${host}/api/users`);
    },
    deleteUser(userId) {
        return fetch (`${host}/api/users/${userId}`, {method: 'delete'})
    },
    getWorkout(userId, workoutId) {
        return fetch(`${host}/api/users/${userId}/workouts/${workoutId}`)
    },
    getWorkouts(userId) {
        return fetch(`${host}/api/users/${userId}/workouts`)
    },
    deleteWorkout(userId, workoutId) {
        return fetch(`${host}/api/users/${userId}/workouts/${workoutId}`, {method: 'delete'})
    },
    createWorkout(userId, inputs) {
        return fetch(`${host}/api/users/${userId}/workouts`, {method: 'post', body: JSON.stringify(inputs), headers: {
                'Content-Type': 'application/json'
            }})
    },
};

export default client;