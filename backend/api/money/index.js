'use strict'

const { getAll } = require('./money.get')
const { addMoney } = require('./money.post')
const { update } = require('./money.update')
const { remove } = require('./money.delete')

module.exports = Router => {
  const router = new Router({
    prefix: 'money',
  })

  router.get('/:userId', getAll)
  router.post('/:userId', addMoney)
  router.put('/:id', update)
  router.delete('/:id', remove)

  return router
}
