'use strict'

const Goals = require('../../models/goals')
const { countGoals } = require('../../middleware/updateUser.middleware')

exports.remove = async ctx => {
  const deleteGoal = await Goals.query().where('id', ctx.params.id)
  await Goals.query()
    .where('id', ctx.params.id)
    .del()
  await countGoals(deleteGoal[0].userId, deleteGoal[0])

  ctx.body = 'Goal deleted successfully'
}
