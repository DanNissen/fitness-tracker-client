// const store = require('../store')
const showExercisesTemplate = require('../templates/get-exercises.handlebars')
const exerciseApi = require('./api')

const getExercisesSuccess = (data) => {
  console.log('got exercises', data)
  if (Object.keys(data).length === 0) {
    $('#exercise-container').empty()
    $('#exercise-container').append('<h1>No exercises are in the database. Sign in to create some!</h1>')
  } else {
    const showExercisesHtml = showExercisesTemplate({object: data})
    $('#exercise-container').empty()
    $('#exercise-container').append(showExercisesHtml)
  }
}

const getExercisesError = (response) => {
  console.log('could not get exercises')
}

const createExerciseSuccess = (response) => {
  $('#create-exercise-form')[0].reset()
  $('#create-exercise-modal').modal('hide')
  console.log('Exercise logged!')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully logged your exercise!`)
  exerciseApi.getExercises()
    .then(getExercisesSuccess)
    .catch(getExercisesError)
}

const createExerciseError = (response) => {
  $('#create-exercise-form')[0].reset()
  console.log('exercise not logged properly!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your exercise could not be created.')
}

module.exports = {
  getExercisesSuccess,
  getExercisesError,
  createExerciseSuccess,
  createExerciseError
}
