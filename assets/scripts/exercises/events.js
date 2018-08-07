// const getFormFields = require('../../../lib/get-form-fields')
const exerciseApi = require('./api')
const exerciseUi = require('./ui')

const onGetExercises = (event) => {
  console.log('getting exercises')
  exerciseApi.getExercises()
    .then(exerciseUi.getExercisesSuccess)
    .catch(exerciseUi.getExercisesError)
}

module.exports = {
  onGetExercises
}
