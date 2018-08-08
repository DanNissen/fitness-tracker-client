const getFormFields = require('../../../lib/get-form-fields')
const exerciseApi = require('./api')
const exerciseUi = require('./ui')

const onGetExercises = (event) => {
  console.log('getting exercises')
  exerciseApi.getExercises()
    .then(exerciseUi.getExercisesSuccess)
    .catch(exerciseUi.getExercisesError)
}

const onCreateExercise = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  exerciseApi.createExercise(data)
    .then(exerciseUi.createExerciseSuccess)
    .catch(exerciseUi.createExerciseError)
}

module.exports = {
  onGetExercises,
  onCreateExercise
}
