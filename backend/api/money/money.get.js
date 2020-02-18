'use strict'

const totalMoney = require('../../models/totalMoney')

exports.getAll = async ctx => {
  const money = await totalMoney.query().where('userId', ctx.params.userId)
  ctx.body = money
}

exports.getById = async ctx => {
  const money = await totalMoney.query().where('id', ctx.params.id)
  ctx.body = money
}
