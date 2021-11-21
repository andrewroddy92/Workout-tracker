const router = require('express').Router();

router.get('/api/workouts', async (req, res) => {
    try {
        //TODO: Returns all the workouts
        const workouts = []
        res.status(200).json(workouts);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/api/workouts/:id', async (req, res) => {
    try {
        //TODO: Updates specific workout to add new exercise
        const workout = "";
        res.status(200).json(workout);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
});


module.exports = router;
