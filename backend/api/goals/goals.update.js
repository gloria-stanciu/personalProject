'use strict'

const Goals = require('../../models/goals')

exports.update = async ctx => {
  const goals = await Goals.query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  ctx.body = goals
}
