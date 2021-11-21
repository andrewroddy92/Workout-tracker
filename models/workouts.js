const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Int,
    weight: Int,
    reps: Int,
    sets: Int,
});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [ExerciseSchema]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;