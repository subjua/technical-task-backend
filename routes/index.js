const Router = require('koa-router')

const router = new Router({ prefix: '/api' })

const v1Routes = require('./v1')

router.use(v1Routes.routes())

module.exports = router