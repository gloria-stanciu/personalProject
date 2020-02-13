'use strict'

const Costs = require('../../models/costs')

exports.remove = async ctx => {
  await Costs.query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'User deleted successfully'
}
