const config = require('../config')
const store = require('../store')

const getWorkouts = () => {
  console.log('Getting workouts')
  return $.ajax({
    method: 'Get',
    url: config.apiUrl + '/workouts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createWorkout = (data) => {
  console.log('data passed to api is', data)
  console.log('user is', store.user.email)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/workouts',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getWorkouts,
  createWorkout
}