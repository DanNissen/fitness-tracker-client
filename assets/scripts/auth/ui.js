// const store = require('../store')

const signUpSuccess = (response) => {
  $('#sign-up-form')[0].reset()
  $('#sign-up-modal').modal('hide')
  console.log('sign up success')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text('Thanks for signing up, please sign in to achieve your goals!')
}

const signUpError = (response) => {
  $('#sign-up-form')[0].reset()
  // console.log('sign up failed!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again. If you keep seeing this message, it is possible that your email has already been taken.')
}

module.exports = {
  signUpSuccess,
  signUpError
}
