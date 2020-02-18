'use strict'

const totalMoney = require('../../models/totalMoney')

exports.update = async ctx => {
  const money = await totalMoney
    .query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  ctx.body = money
}
