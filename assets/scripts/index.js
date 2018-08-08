'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const exerciseEvents = require('./exercises/events')
const workoutEvents = require('./workouts/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  exerciseEvents.onGetExercises()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-workout-form').on('submit', workoutEvents.onCreateWorkout)
  $('#create-exercise-form').on('submit', exerciseEvents.onCreateExercise)
})
