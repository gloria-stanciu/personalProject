'use strict'

const Joi = require('@hapi/joi')

exports.create = async (ctx, next) => {
    const schema = Joi.object({
        title: Joi.string().max(50).required(),
        description: Joi.string().required(),
        amount: Joi.number().positive().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        returned: Joi.boolean()
    })

    const validate = await schema.validateAsync(ctx.request.body, {
        abortEarly: false
    })

    ctx.debt = validate
    await next()
}