'use strict'

const Joi = require('@hapi/joi')

exports.create = async (ctx, next) => {
    const schema = Joi.object({
        type: Joi.string().max(20).required(),
        amount: Joi.number().positive().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        notification: Joi.boolean(),
        returned: Joi.boolean()
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.debt = validate
    await next()
}