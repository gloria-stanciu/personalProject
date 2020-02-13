'use strict'

const inMoney = require('../../models/inMoney')

exports.getAll = async ctx => {
  const money = await inMoney.query().where('userId', ctx.params.userId)
  ctx.body = money
}

exports.getById = async ctx => {
  const money = await inMoney.query().where('id', ctx.params.id)
  ctx.body = money
}
