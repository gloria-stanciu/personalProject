'use strict'

const User = require('../models/users')
// const Debts = require('../../models/debts')
// const Goals = require('../../models/goals')
// const Costs = require('../../models/costs')

// exports.addMoneyGoals = async (ctx, goalsAmount) => {
//     await User.query().where({ id: ctx.params.userId }).update('totalMoney', User.totalMoney + goalsAmount)
//     await next()
// }

// exports.substractDebts = async (ctx, Debt) => {
//     await User.query().where({ id: ctx.params.userId }).update('totalDebts', User.totalDebts + Debt.amount)
//     if (Debt.returned == true)
//         await User.query().where({ id: ctx.params.userId }).update('totalMoney', User.totalMoney - Debt.amount)
//     await next()
// }

exports.addDeleteCost = async (cost) => {
    await User.query().where('id', cost.userId).decrement('totalCosts', cost.amount)
    await User.query().where('id', cost.userId).increment('totalMoney', cost.amount)
}

exports.substractCosts = async (cost) => {
    await User.query().where('id', cost.userId).increment('totalCosts', cost.amount)
    await User.query().where('id', cost.userId).decrement('totalMoney', cost.amount)
}

exports.addTotalMoney = async (money) => {
    await User.query().where('id', money.userId).increment('totalMoney', money.amount)
}

exports.subTotalMoney = async (money) => {
    await User.query().where('id', money.userId).decrement('totalMoney', money.amount)
}