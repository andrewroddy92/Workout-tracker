const router = require('express').Router();
const path = require('path');
const Workout = require("../models/workouts");
const mongojs = require('mongojs');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.updateOne({_id: mongojs.ObjectId(req.params.id)}, { $push: { exercises: req.body } })
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/api/workouts', (req, res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
        ])        
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/exercise', (req, res) => {
    //Navigates to Exercise page
    res.sendFile(path.join(__dirname, '..', "/public/exercise.html"));
});

router.get('/stats', (req, res) => {
    //Navigates to Stats page
    res.sendFile(path.join(__dirname, '..', "/public/stats.html"));
});


module.exports = router;
