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

const onUpdateWorkout = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  console.log('data is', data)
  console.log('id is', id)
  workoutApi.updateWorkout(data, id)
    .then(workoutUi.updateWorkoutSuccess)
    .catch(workoutUi.updateWorkoutError)
}

module.exports = {
  onGetWorkouts,
  onCreateWorkout,
  onUpdateWorkout
}
