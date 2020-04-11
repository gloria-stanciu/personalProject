'use strict'

const totalMoney = require('../../models/totalMoney')
const User = require('../../models/users')
const { addTotalMoney } = require('../../middleware/updateUser.middleware')

exports.addMoney = async ctx => {
  const money = await totalMoney.query().insertGraph({
    userId: ctx.params.userId,
    type: ctx.request.body.type,
    amount: ctx.request.body.amount,
    details: ctx.request.body.details,
  })

  await addTotalMoney(money)

  ctx.body = { message: 'Money added successfully', inserted: money }
}
