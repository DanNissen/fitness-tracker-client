const config = require('../config')
// const store = require('../store')

const getExercises = () => {
  console.log('Getting exercises')
  return $.ajax({
    method: 'Get',
    url: config.apiUrl + '/exercises'
  })
}

module.exports = {
  getExercises
}
