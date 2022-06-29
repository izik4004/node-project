const express = require('express')
const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout, } = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

//single workouts
router.get('/:id', getWorkout)

//Post a new workout
router.post('/', createWorkout) 

//Delete a new workout
router.delete('/:id', deleteWorkout)

//update a new workout
router.patch('/:id', updateWorkout)


module.exports = router 