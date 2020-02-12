'use strict'

const inMoney = require('../../models/inMoney')

exports.update = async ctx => {
  const money = await inMoney
    .query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  ctx.body = money
}
