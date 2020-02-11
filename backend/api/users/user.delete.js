'use strict'

const User = require('../../models/users')

exports.remove = async ctx => {
  await User.query()
    .where('id', ctx.params.id)
    .del()

  ctx.body = 'User deleted successfully'
}
