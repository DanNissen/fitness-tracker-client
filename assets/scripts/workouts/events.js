const getFormFields = require('../../../lib/get-form-fields')
const workoutApi = require('./api')
const workoutUi = require('./ui')

const onGetWorkouts = (event) => {
  console.log('getting workouts')
  workoutApi.getWorkouts()
    .then(workoutUi.getWorkoutsSuccess)
    .catch(workoutUi.getWorkoutsError)
}

const onCreateWorkout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  workoutApi.createWorkout(data)
    .then(workoutUi.createWorkoutSuccess)
    .catch(workoutUi.createWorkoutError)
}

module.exports = {
  onGetWorkouts,
  onCreateWorkout
}
