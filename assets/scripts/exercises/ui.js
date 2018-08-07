// const store = require('../store')
const showExercisesTemplate = require('../templates/get-exercises.handlebars')

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

module.exports = {
  getExercisesSuccess,
  getExercisesError
}
