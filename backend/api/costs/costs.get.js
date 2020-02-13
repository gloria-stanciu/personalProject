'use strict'

const Costs = require('../../models/costs')

exports.getAll = async ctx => {
  const costs = await Costs.query().where('userId', ctx.params.userId)
  ctx.body = costs
}

exports.getById = async ctx => {
  const cost = await Costs.query().where('id', ctx.params.id)
  ctx.body = cost
}
