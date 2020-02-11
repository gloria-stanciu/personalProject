'use strict'

const User = require('../../models/users')

exports.update = async ctx => {
  console.log(Object.keys(ctx.request.body))
  const user = await User.query()
    .where('id', ctx.params.id)
    .update(ctx.request.body)

  ctx.body = user
}
