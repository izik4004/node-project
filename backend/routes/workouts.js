const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

//single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single workouts'})
})

//Post a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'Post new workout'})
})

//Delete a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

//update a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update workout'})
})
module.exports = router 