'use strict'

const Goals = require('../../models/goals')

exports.remove = async ctx => {
  await Goals.query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'Goal deleted successfully'
}
