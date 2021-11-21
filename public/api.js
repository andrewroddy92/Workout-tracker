const API = {
  // Calls all workouts and returns 
  async getLastWorkout() {
    let res;
    try {
      //Retrieves all the workouts
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }

    const json = await res.json();

    //Extract last workout from array
    const lastWorkout = json[json.length - 1];
  
    return lastWorkout;
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    //Update a specific workout to add a new exercise
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
