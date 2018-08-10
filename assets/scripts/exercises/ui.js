const store = require('../store')
const showExercisesTemplate = require('../templates/get-exercises.handlebars')
const dropdownExercisesTemplate = require('../templates/exercise-dropdown.handlebars')
const exerciseApi = require('./api')

const getExercisesSuccess = (data) => {
  // console.log('got exercises', data)
  if (data.exercises.length === 0) {
    $('#exercise-container').empty()
    $('#exercise-container').append('<h4>No exercises are in the database. Create some!</h4>')
  } else {
    const showExercisesHtml = showExercisesTemplate({object: data})
    $('#exercise-container').empty()
    $('#exercise-container').append(showExercisesHtml)
    const exerciseDropdownHTML = dropdownExercisesTemplate({object: data})
    $('#exercise-dropdown-container').empty()
    $('#exercise-dropdown-container').append(exerciseDropdownHTML)
  }
  if (store.signed_in === true) {
    $('.signed-in-visible').css('display', 'block')
    $('.exercise-button').css('display', 'inline')
    $('.signed-out-visible').css('display', 'none')
    $('.exercise-button').hide()
    // console.log('USER ID IS', store.user.id)
    $('.exercise-button-' + store.user.id).show()
  }
}

const getExercisesError = (response) => {
  // console.log('could not get exercises')
  $('#message-modal').modal('show')
  $('#message-title').text('Oh No!!')
  $('#message-text').text(`Could not get your exercises!`)
}

const createExerciseSuccess = (response) => {
  $('#create-exercise-form')[0].reset()
  $('#create-exercise-modal').modal('hide')
  // console.log('Exercise logged!')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully logged your exercise!`)
  exerciseApi.getExercises()
    .then(getExercisesSuccess)
    .catch(getExercisesError)
}

const createExerciseError = (response) => {
  $('#create-exercise-form')[0].reset()
  // console.log('exercise not logged properly!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your exercise could not be created.')
}

const updateExerciseSuccess = (response) => {
  // console.log(response)
  // console.log('Exercise updated!', response)
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
  // console.log('exercise not updated properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your exercise could not be updated.')
}

const deleteExerciseSuccess = (response) => {
  // console.log('Exercise deleted!', response)
  $('.delete-exercise').modal('hide')
  // $('#message-modal').modal('show')
  // $('#message-title').text('Success!!')
  // $('#message-text').text(`You have successfully deleted your exercise!`)
  exerciseApi.getExercises()
    .then(getExercisesSuccess)
    .catch(getExercisesError)
}

const deleteExerciseError = (response) => {
  // console.log('exercise not deleted properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your exercise could not be deleted. Please try again.')
}

const resetExerciseForms = () => {
  $('#create-exercise-form')[0].reset()
  $('.update-exercise-form')[0].reset()
}

module.exports = {
  getExercisesSuccess,
  getExercisesError,
  createExerciseSuccess,
  createExerciseError,
  updateExerciseSuccess,
  updateExerciseError,
  deleteExerciseSuccess,
  deleteExerciseError,
  resetExerciseForms
}
