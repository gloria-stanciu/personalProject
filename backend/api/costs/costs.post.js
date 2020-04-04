'use strict'

const Costs = require('../../models/costs')
const { addCosts } = require('../../middleware/updateUser.middleware')

exports.create = async ctx => {
  const cost = await Costs.query().insertGraph({
    userId: ctx.params.userId,
    type: ctx.request.body.type,
    amount: ctx.request.body.amount,
    date: ctx.request.body.date,
    location: ctx.request.body.location,
  })


  await addCosts(cost)

  ctx.body = { message: 'Cost added successfully', inserted: cost }
}
