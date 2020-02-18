'use strict'

const totalMoney = require('../../models/totalMoney')
const { subTotalMoney } = require('../../middleware/updateUser.middleware')

exports.remove = async ctx => {
  const deleteMoney = await totalMoney.query().where('id', ctx.params.id)
  await subTotalMoney(deleteMoney[0])
  await totalMoney
    .query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'Money entry deleted successfully'
}
