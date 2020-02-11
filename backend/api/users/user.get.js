'use strict'

const User = require('../../models/users')

exports.getAll = async ctx => {
  const users = await User.query()
  ctx.body = users
}

exports.getById = async ctx => {
  const user = await User.query().where('id', ctx.params.id)
  ctx.body = user
}
