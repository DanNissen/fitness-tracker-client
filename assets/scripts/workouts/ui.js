// const store = require('../store')
const showWorkoutsTemplate = require('../templates/get-workouts.handlebars')

const getWorkoutsSuccess = (data) => {
  console.log('got workouts', data)
  if (Object.keys(data).length === 0) {
    $('#workouts-container').empty()
    $('#workouts-container').append('<h1>No workouts are in the database. Sign in to create some!</h1>')
  } else {
    const showWorkoutsHtml = showWorkoutsTemplate({object: data})
    $('#workouts-container').empty()
    $('#workouts-container').append(showWorkoutsHtml)
  }
}

const getWorkoutsError = (response) => {
  console.log('could not get workouts')
}

module.exports = {
  getWorkoutsSuccess,
  getWorkoutsError
}
