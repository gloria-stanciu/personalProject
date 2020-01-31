'use strict'

const fs = require('fs')
const { basename, join } = require('path')
const Router = require('@koa/router')

const baseName = basename(__filename)

/**
 * [koa-respond]
 * ok - HTTP 200
 * created - HTTP 201
 * noContent - HTTP 204 - always sends an empty response!
 * badRequest - HTTP 400
 * unauthorized - HTTP 401
 * forbidden - HTTP 403
 * notFound - HTTP 404
 * internalServerError - HTTP 500
 */

function applyApiMiddleware(app) {
  const base = new Router()

  base.get('/', ctx => {
    if (!ctx.query.verify) {
      ctx.noContent()
    }
    return ctx.ok('Works good!')
  })

  const router = new Router({
    prefix: `/api/`
  })

  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== baseName)
    .forEach(file => {
      const api = require(join(__dirname, file))(Router)
      router.use(api.routes())
    })

  app.use(router.routes()).use(router.allowedMethods())
}

module.exports = applyApiMiddleware