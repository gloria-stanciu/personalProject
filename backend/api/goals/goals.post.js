'use strict'

const Goals = require('../../models/goals')

exports.create = async ctx => {
  const goals = await Goals.query().insertGraph({
    userId: ctx.params.userId,
    title: ctx.request.body.title,
    description: ctx.request.body.description,
    amount: ctx.request.body.amount,
    startDate: ctx.request.body.startDate,
    endDate: ctx.request.body.endDate,
    reached: ctx.request.body.reached,
  })

  ctx.body = { message: 'Money added successfully', inserted: goals }
}
