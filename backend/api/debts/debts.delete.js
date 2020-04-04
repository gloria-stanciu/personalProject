'use strict'

const Debts = require('../../models/debts')
const { substractDebts } = require('../../middleware/updateUser.middleware')


exports.remove = async ctx => {
  const deleteDebt = await Debts.query().where('id', ctx.params.id)
  await substractDebts(deleteDebt[0])
  await Debts.query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'Debt deleted successfully'
}
