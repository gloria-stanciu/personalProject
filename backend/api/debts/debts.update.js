'use strict'

const Debts = require('../../models/debts')

exports.update = async ctx => {
  const debt = await Debts.query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  ctx.body = debt
}
