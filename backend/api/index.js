'use strict'

const fs = require('fs')
const { basename, join } = require('path')
const Router = require('@koa/router')

const baseName = basename(__filename)

function applyApiMiddleware(app) {
  const base = new Router()

  base.get('/', ctx => {
    if (!ctx.query.verify) {
      ctx.noContent()
    }
    return ctx.ok('Works good!')
  })

  const router = new Router({
    prefix: `/api/`,
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
