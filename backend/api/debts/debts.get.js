'use strict'

const Debts = require('../../models/debts')

exports.getAll = async ctx => {
  const debts = await Debts.query()
  ctx.body = debts
}

exports.getById = async ctx => {
  const debt = await Debts.query().where('id', ctx.params.id)
  ctx.body = debt
}
