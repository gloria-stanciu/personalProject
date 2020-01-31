const {signUp} = require('./auth.signup')

module.exports = Router =>{
  const router = new Router({
    prefix: 'auth'
  })

  router.post('/', signUp)

  return router
}