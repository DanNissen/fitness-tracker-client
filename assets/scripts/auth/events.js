const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

module.exports = {
  onSignUp,
  onSignIn
}