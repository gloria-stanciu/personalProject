'use strict'

const Joi = require('@hapi/joi')

exports.create = async (ctx, next) => {
    const schema = Joi.object({
        amount: Joi.number().positive().required(),
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.debt = validate
    await next()
}