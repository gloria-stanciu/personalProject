'use strict'

const Goals = require('../../models/goals')
const { addGoalsMoney } = require('../../middleware/updateUser.middleware')

exports.update = async ctx => {
  const goals = await Goals.query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  const goal = await Goals.query().where('id', ctx.params.id)
  await addGoalsMoney(goal[0])
  ctx.body = goals
}
