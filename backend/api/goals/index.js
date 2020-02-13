'use strict'

const { getAll, getById } = require('./goals.get')
const { create } = require('./goals.post')
const { update } = require('./goals.update')
const { remove } = require('./goals.delete')

module.exports = Router => {
  const router = new Router({
    prefix: 'goals',
  })

  router.get('/:userId', getAll)
  router.get('/details/:id', getById)
  router.post('/:userId', create)
  router.put('/:id', update)
  router.delete('/:id', remove)

  return router
}
