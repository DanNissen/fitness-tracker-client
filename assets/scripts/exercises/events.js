const getFormFields = require('../../../lib/get-form-fields')
const exerciseApi = require('./api')
const exerciseUi = require('./ui')

const onGetExercises = (event) => {
  // console.log('getting exercises')
  exerciseApi.getExercises()
    .then(exerciseUi.getExercisesSuccess)
    .catch(exerciseUi.getExercisesError)
}

const onCreateExercise = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is', data)
  exerciseApi.createExercise(data)
    .then(exerciseUi.createExerciseSuccess)
    .catch(exerciseUi.createExerciseError)
}

const onUpdateExercise = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  // console.log('data is', data)
  // console.log('id is', id)
  exerciseApi.updateExercise(data, id)
    .then(exerciseUi.updateExerciseSuccess)
    .catch(exerciseUi.updateExerciseError)
}

const onDeleteExercise = (event) => {
  event.preventDefault()
  const data = $(event.target).data('id')
  // console.log('id is', data)
  exerciseApi.deleteExercise(data)
    .then(exerciseUi.deleteExerciseSuccess)
    .catch(exerciseUi.deleteExerciseError)
}

const onResetExerciseForms = () => {
  exerciseUi.resetExerciseForms()
}

module.exports = {
  onGetExercises,
  onCreateExercise,
  onUpdateExercise,
  onDeleteExercise,
  onResetExerciseForms
}
