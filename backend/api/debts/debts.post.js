'use strict'

const Debts = require('../../models/debts')
const { addDebts } = require('../../middleware/updateUser.middleware')

exports.create = async ctx => {
  const debt = await Debts.query().insertGraph({
    userId: ctx.params.userId,
    type: ctx.request.body.type,
    amount: ctx.request.body.amount,
    startDate: ctx.request.body.startDate,
    endDate: ctx.request.body.endDate,
    notification: ctx.request.body.notification,
    returned: ctx.request.body.returned,
  })
  await addDebts(debt)

  ctx.body = { message: 'Money added successfully', inserted: debt }
}
