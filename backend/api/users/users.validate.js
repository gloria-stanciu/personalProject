'use strict'

const Joi = require('@hapi/joi')

exports.create = async (ctx, next) => {
    const schema = Joi.object({
        fullname: Joi.string().min(3).max(60).required(),
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        totalMoney: Joi.number().min(0).default(0),
        totalDebts: Joi.number().min(0).default(0),
        totalCosts: Joi.number().min(0).default(0),
        verified: Joi.boolean().default(false)
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.debt = validate
    await next()
}