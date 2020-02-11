'use strict'

const argon = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../../models/users')

exports.login = async ctx => {
  const user = await User.query()
    .select('id', 'username', 'password')
    .where('username', ctx.request.body.username)
    .first()

  if (user && (await argon.verify(user.password, ctx.request.body.password))) {
    const token = jwt.sign(
      { username: user.username, id: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    )
    ctx.cookies.set('token', token)

    return {
      status: (ctx.status = 200),
      message: (ctx.message = 'Login successfully!'),
    }
  }
  return {
    status: (ctx.status = 500),
    message: (ctx.message = 'Invalid username or password'),
  }
}
