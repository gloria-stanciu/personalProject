'use strict'

const { getAll, getById } = require('./costs.get')
const { create } = require('./costs.post')
const { update } = require('./costs.update')
const { remove } = require('./costs.delete')
const { costValidate } = require('./costs.validate')

module.exports = Router => {
  const router = new Router({
    prefix: 'costs',
  })

  router.get('/:userId', getAll)
  router.get('/details/:id', getById)
  router.post('/:userId', costValidate, create)
  router.put('/:id', update)
  router.delete('/:id', remove)

  return router
}
