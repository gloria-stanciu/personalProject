'use strict'

const Debts = require('../../models/debts')

exports.remove = async ctx => {
  await Debts.query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'Debt deleted successfully'
}
