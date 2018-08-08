const store = require('../store')
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
  if (store.signed_in === true) {
    $('.signed-in-visible').css('display', 'block')
    $('.signed-out-visible').css('display', 'none')
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

const updateExerciseSuccess = (response) => {
  console.log(response)
  console.log('Exercise updated!', response)
  $('.update-exercise-form')[0].reset()
  $('.update-exercise-modal').modal('hide')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully updated your exercise!`)
  exerciseApi.getExercises()
    .then(getExercisesSuccess)
    .catch(getExercisesError)
}

const updateExerciseError = (response) => {
  $('.update-exercise-form')[0].reset()
  console.log('exercise not updated properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your exercise could not be updated.')
}

module.exports = {
  getExercisesSuccess,
  getExercisesError,
  createExerciseSuccess,
  createExerciseError,
  updateExerciseSuccess,
  updateExerciseError
}
