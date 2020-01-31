const {getAll} = require('./user.get')

module.exports = Router =>{
  const router = new Router({
    prefix: 'users'
  })

  router.get('/', getAll)

  return router
}