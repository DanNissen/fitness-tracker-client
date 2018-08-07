const store = require('../store')

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

const signInSuccess = (response) => {
  store.user = response.user
  store.signed_in = true
  $('#sign-in-form')[0].reset()
  $('#sign-in-modal').modal('hide')
  $('.signed-in').css('visibility', 'visible')
  $('.signed-out').css('visibility', 'hidden')
  console.log('sign in success')
  console.log('user is', store.user)
  console.log('token is', store.user.token)
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text('Welcome! To get started logging press Log Workout.')
}

const signInError = (response) => {
  $('#sign-in-form')[0].reset()
  console.log('sign in failed!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again.')
}

const changePasswordSuccess = (response) => {
  $('#change-password-form')[0].reset()
  $('#change-pw-modal').modal('hide')
  console.log('change password success')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully changed your password, please don't forget it!`)
}

const changePasswordError = (response) => {
  $('#change-password-form')[0].reset()
  console.log('change password failed!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again. Are you sure you entered your password correctly?')
}

const signOutSuccess = () => {
  console.log('sign out success')
  $('.signed-in').css('visibility', 'hidden')
  $('.signed-out').css('visibility', 'visible')
  $('.view-accomplishments').empty()
  $('#message-modal').modal('show')
  $('#message-title').text('Goodbye!!')
  $('#message-text').text('Come back soon to keep tracking your success!')
}

const signOutError = (response) => {
  console.log('sign out failed!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again.')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
