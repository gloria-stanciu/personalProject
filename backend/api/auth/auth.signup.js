'use strict'

const { hash, argon2id } = require('argon2')
const User = require('../../models/users')

exports.signUp = async ctx => {
  //Check if a user with the same username or email already exists
  const isUser = await User.query()
    .select('username', 'email')
    .where('username', ctx.request.body.username)
    .orWhere('email', ctx.request.body.email)

  //If exists, a conflict will show up
  if (isUser.length !== 0) {
    if (isUser.find(user => user.username === ctx.request.body.username)) {
      return {
        status: (ctx.status = 400),
        message: (ctx.message = 'Username is already taken.'),
      }
    } else
      return {
        status: (ctx.status = 400),
        message: (ctx.message = 'Email is already taken.'),
      }
  }

  //Hash password
  const password = await hash(ctx.request.body.password, { type: argon2id })

  await User.query().insertGraph({
    fullName: ctx.request.body.fullName,
    username: ctx.request.body.username,
    email: ctx.request.body.email,
    password: password,
    role: 'user',
  })

  return {
    status: (ctx.status = 200),
    message: (ctx.message = 'User created successfully!'),
  }
}
