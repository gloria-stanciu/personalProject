'use strict'

const inMoney = require('../../models/inMoney')

exports.remove = async ctx => {
  await inMoney
    .query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'User deleted successfully'
}
