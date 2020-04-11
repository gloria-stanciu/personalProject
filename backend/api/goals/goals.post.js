'use strict'

const Goals = require('../../models/goals')
const { countGoals } = require('../../middleware/updateUser.middleware')

exports.create = async ctx => {
  const goal = await Goals.query().insertGraph({
    userId: ctx.params.userId,
    title: ctx.request.body.title,
    description: ctx.request.body.description,
    targetedAmount: ctx.request.body.targetedAmount,
    amount: ctx.request.body.amount,
    endDate: ctx.request.body.endDate,
    reached: ctx.request.body.reached,
  })
  await countGoals(ctx.params.userId, goal)
  ctx.body = { message: 'Money added successfully', inserted: goal }
}
