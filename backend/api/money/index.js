'use strict'

const { getAll, getById } = require('./money.get')
const { addMoney } = require('./money.post')
const { update } = require('./money.update')
const { remove } = require('./money.delete')
const { moneyValidate } = require('./money.validate')

module.exports = Router => {
  const router = new Router({
    prefix: 'money',
  })

  router.get('/:userId', getAll)
  router.get('/details/:id', getById)
  router.post('/:userId', moneyValidate, addMoney)
  router.put('/:id', update)
  router.delete('/:id', remove)

  return router
}
