'use strict'

const { getAll, getById } = require('./user.get')
const { update } = require('./user.update')
const { remove } = require('./user.delete')

module.exports = Router => {
  const router = new Router({
    prefix: 'users',
  })

  router.get('/', getAll)
  router.get('/:id', getById)
  router.put('/:id', update)
  router.delete('/:id', remove)

  return router
}
