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

module.exports = {
  getWorkouts
}
