const { signUp } = require('./auth.signup')
const { login } = require('./auth.login')
const { signUpValidate, logInValidate } = require('./auth.validate')

module.exports = Router => {
  const router = new Router({
    prefix: 'auth',
  })

  router.post('/register', signUpValidate, signUp)
  router.post('/login', logInValidate, login)

  return router
}
