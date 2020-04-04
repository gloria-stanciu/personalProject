'use strict'

const User = require('../models/users')
const Goals = require('../models/goals')

exports.addCosts = async (cost) => {
    await User.query().where('id', cost.userId).increment('totalCosts', cost.amount)
    await User.query().where('id', cost.userId).decrement('totalMoney', cost.amount)
}
exports.substractCosts = async (cost) => {
    await User.query().where('id', cost.userId).decrement('totalCosts', cost.amount)
    await User.query().where('id', cost.userId).increment('totalMoney', cost.amount)
}

exports.addTotalMoney = async (money) => {
    await User.query().where('id', money.userId).increment('totalMoney', money.amount)
}

exports.subTotalMoney = async (money) => {
    await User.query().where('id', money.userId).decrement('totalMoney', money.amount)
}

exports.addDebts = async (debt) => {
    await User.query().where('id', debt.userId).increment('totalDebts', debt.amount)
    await User.query().where('id', debt.userId).decrement('totalMoney', debt.amount)
}

exports.substractDebts = async (debt) => {
    await User.query().where('id', debt.userId).decrement('totalDebts', debt.amount)
    await User.query().where('id', debt.userId).increment('totalMoney', debt.amount)
}

exports.countGoals = async (userId, goal) => {
    const countGoals = await Goals.query().count('userId').where('userId', userId)
    await User.query().where('id', goal.userId).update({ goalsNumber: countGoals[0].count })
}

exports.addGoalsMoney = async goal => {
    await User.query().where('id', goal.userId).increment('totalMoney', goal.amount)
}