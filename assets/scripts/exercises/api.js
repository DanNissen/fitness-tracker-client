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

const updateExercise = (data, id) => {
  const url = config.apiUrl + '/exercises/' + id
  console.log('url is:', url)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/exercises/' + id,
    data: data
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  getExercises,
  createExercise,
  updateExercise
}
