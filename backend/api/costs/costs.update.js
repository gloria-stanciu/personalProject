'use strict'

const Costs = require('../../models/costs')

exports.update = async ctx => {
  const costs = await Costs.query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  ctx.body = costs
}
