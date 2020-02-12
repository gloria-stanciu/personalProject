'use strict'

const inMoney = require('../../models/inMoney')

exports.getAll = async ctx => {
  const money = await inMoney.query().where('userId', ctx.params.userId)
  ctx.body = money
}
