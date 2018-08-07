// const getFormFields = require('../../../lib/get-form-fields')
const workoutApi = require('./api')
const workoutUi = require('./ui')

const onGetWorkouts = (event) => {
  console.log('getting workouts')
  workoutApi.getWorkouts()
    .then(workoutUi.getWorkoutsSuccess)
    .catch(workoutUi.getWorkoutsError)
}

module.exports = {
  onGetWorkouts
}
