'use strict'

const Joi = require('@hapi/joi')

exports.create = async (ctx, next) => {
    const schema = Joi.object({
        type: Joi.string().max(20).required(),
        amount: Joi.number().positive().required(),
        date: Joi.date().required(),
        location: Joi.string().min(2).max(30).required(),
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.cost = validate
    await next()
}