const { signUp } = require('./auth.signup')
const { login } = require('./auth.login')

module.exports = Router => {
  const router = new Router({
    prefix: 'auth',
  })

  router.post('/register', signUp)
  router.post('/login', login)

  return router
}
