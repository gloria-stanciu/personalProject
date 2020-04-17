'use strict'

const { getAll, getById } = require('./debts.get')
const { create } = require('./debts.post')
const { update } = require('./debts.update')
const { remove } = require('./debts.delete')
const { debtsValidate } = require('./debts.validate')

module.exports = Router => {
  const router = new Router({
    prefix: 'debts',
  })

  router.get('/:userId', getAll)
  router.get('/details/:id', getById)
  router.post('/:userId', debtsValidate, create)
  router.put('/:id', update)
  router.delete('/:id', remove)

  return router
}
