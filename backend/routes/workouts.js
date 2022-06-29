const express = require('express')
const {createWorkout, getWorkouts, getWorkout} = require('../controllers/workourController')

const router = express.Router()

router.get('/', getWorkouts)

//single workouts
router.get('/:id', getWorkout)

//Post a new workout
router.post('/', createWorkout) 

//Delete a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

//update a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update workout'})
})
module.exports = router 