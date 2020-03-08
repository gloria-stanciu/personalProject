'use strict'

const Joi = require('@hapi/joi')

exports.signUp = async (ctx, next) => {
    const schema = Joi.object({
        fullName: Joi.string().min(4).max(100).required().error(() => new Error('Full name must be between 4 and 100 characters.')),
        username: Joi.string().min(4).max(100).required().error(() => new Error('Username must be between 4 and 100 characters.')),
        email: Joi.string().email().required().error(() => new Error('Email must be a valid email address.')),
        password: Joi.string().min(8).max(100).required().error(() => new Error('Password must be between 8 and 100 characters.'))
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.user = validate
    await next()
}

exports.logIn = async (ctx, next) => {
    const schema = Joi.object({
        username: Joi.string().required().error(() => new Error('Username is required')),
        password: Joi.string().required().error(() => new Error('Password is required'))
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.user = validate
    await next()
}