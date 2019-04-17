const Router = require('koa-router')

const router = new Router({ prefix: '/v1' })

const tokensRoutes = require('./tokens')
const notessRoutes = require('./notes')

router.use(tokensRoutes.routes())
router.use(notessRoutes.routes())

module.exports = router