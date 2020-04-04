'use strict'

const Costs = require('../../models/costs')
const { substractCosts } = require('../../middleware/updateUser.middleware')

exports.remove = async ctx => {
  const deleteCost = await Costs.query().where('id', ctx.params.id)
  await substractCosts(deleteCost[0])
  await Costs.query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'Cost removed successfully'
}
