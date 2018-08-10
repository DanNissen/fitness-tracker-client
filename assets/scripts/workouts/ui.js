// const store = require('../store')
const workoutApi = require('./api')
const showWorkoutsTemplate = require('../templates/get-workouts.handlebars')

const getWorkoutsSuccess = (data) => {
  // console.log('got workouts', data)
  if (Object.keys(data).length === 0) {
    $('#workouts-container').empty()
    $('#workouts-container').append('<h4>No workouts are in the database. Create some!</h1>')
  } else {
    const showWorkoutsHtml = showWorkoutsTemplate({days: data})
    $('#workouts-container').empty()
    $('#workouts-container').append(showWorkoutsHtml)
  }
}

const getWorkoutsError = (response) => {
  // console.log('could not get workouts')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, could not get workouts')
}

const createWorkoutSuccess = (response) => {
  $('#create-workout-form')[0].reset()
  $('#create-workout-modal').modal('hide')
  // console.log('Workout logged!')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully logged your workout!`)
  workoutApi.getWorkouts()
    .then(getWorkoutsSuccess)
    .catch(getWorkoutsError)
}

const createWorkoutError = (response) => {
  $('#create-workout-form')[0].reset()
  // console.log('workout not logged properly!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your workout could not be created.')
}

const updateWorkoutSuccess = (response) => {
  // console.log(response)
  // console.log('Workout updated!', response)
  $('.update-workout-form')[0].reset()
  $('.update-workout-modal').modal('hide')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully updated your workout!`)
  workoutApi.getWorkouts()
    .then(getWorkoutsSuccess)
    .catch(getWorkoutsError)
}

const updateWorkoutError = (response) => {
  $('.update-workout-form')[0].reset()
  // console.log('workout not updated properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your workout could not be updated.')
}

const deleteWorkoutSuccess = (response) => {
  // console.log('Workout deleted!', response)
  $('.delete-workout').modal('hide')
  // $('#message-modal').modal('show')
  // $('#message-title').text('Success!!')
  // $('#message-text').text(`You have successfully deleted your workout!`)
  workoutApi.getWorkouts()
    .then(getWorkoutsSuccess)
    .catch(getWorkoutsError)
}

const deleteWorkoutError = (response) => {
  // console.log('workout not deleted properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your workout could not be deleted. Please try again.')
}

const resetWorkoutForms = () => {
  $('#create-workout-form')[0].reset()
  $('.update-workout-form')[0].reset()
}

module.exports = {
  getWorkoutsSuccess,
  getWorkoutsError,
  createWorkoutSuccess,
  createWorkoutError,
  updateWorkoutSuccess,
  updateWorkoutError,
  deleteWorkoutSuccess,
  deleteWorkoutError,
  resetWorkoutForms
}
