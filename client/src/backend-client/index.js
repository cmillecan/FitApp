const host = "http://localhost:3000";

const client = {
    getUser() {
        return fetch(`${host}/api/users`);
    },
    deleteUser() {},
    getWorkouts() {},
    deleteWorkout() {},
    createWorkout() {},
};

export default client;