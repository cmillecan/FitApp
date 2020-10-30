const host = "http://constance.ninja";

const client = {
  getUser() {
    return fetch(`${host}/api/users`);
  },
  signOut() {
    return fetch(`${host}/api/auth/logout`);
  },
  deleteUser(userId) {
    return fetch(`${host}/api/users/${userId}`, { method: "delete" });
  },
  getWorkouts(userId) {
    return fetch(`${host}/api/users/${userId}/workouts`);
  },
  deleteWorkout(userId, workoutId) {
    return fetch(`${host}/api/users/${userId}/workouts/${workoutId}`, {
      method: "delete",
    });
  },
  createWorkout(userId, inputs) {
    return fetch(`${host}/api/users/${userId}/workouts`, {
      method: "post",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default client;
