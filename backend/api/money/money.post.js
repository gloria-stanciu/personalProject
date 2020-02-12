'use strict'

const inMoney = require('../../models/inMoney')

exports.addMoney = async ctx => {
  const money = await inMoney.query().insertGraph({
    userId: ctx.params.userId,
    amount: ctx.request.body.amount,
    details: ctx.request.body.details,
  })

  ctx.body = 'Money added successfully'
}
