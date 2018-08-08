// const store = require('../store')
const workoutApi = require('./api')
const showWorkoutsTemplate = require('../templates/get-workouts.handlebars')

const getWorkoutsSuccess = (data) => {
  console.log('got workouts', data)
  if (data.workouts.length === 0) {
    $('#workouts-container').empty()
    $('#workouts-container').append('<h4>No workouts are in the database. Create some!</h1>')
  } else {
    const showWorkoutsHtml = showWorkoutsTemplate({object: data})
    $('#workouts-container').empty()
    $('#workouts-container').append(showWorkoutsHtml)
  }
}

const getWorkoutsError = (response) => {
  console.log('could not get workouts')
}

const createWorkoutSuccess = (response) => {
  $('#create-workout-form')[0].reset()
  $('#create-workout-modal').modal('hide')
  console.log('Workout logged!')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully logged your workout!`)
  workoutApi.getWorkouts()
    .then(getWorkoutsSuccess)
    .catch(getWorkoutsError)
}

const createWorkoutError = (response) => {
  $('#create-workout-form')[0].reset()
  console.log('workout not logged properly!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your workout could not be created.')
}

module.exports = {
  getWorkoutsSuccess,
  getWorkoutsError,
  createWorkoutSuccess,
  createWorkoutError
}
