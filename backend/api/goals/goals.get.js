'use strict'

const Goals = require('../../models/goals')

exports.getAll = async ctx => {
  const goals = await Goals.query()
  ctx.body = goals
}

exports.getById = async ctx => {
  const goal = await Goals.query().where('id', ctx.params.id)
  ctx.body = goal
}
