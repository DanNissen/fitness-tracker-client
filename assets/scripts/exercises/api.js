const config = require('../config')
// const store = require('../store')

const getExercises = () => {
  console.log('Getting exercises')
  return $.ajax({
    method: 'Get',
    url: config.apiUrl + '/exercises'
  })
}

const createExercise = (data) => {
  console.log('data passed to api is', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/exercises',
    data: data
  })
}

module.exports = {
  getExercises,
  createExercise
}
