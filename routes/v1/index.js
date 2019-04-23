const Router = require('koa-router')

const router = new Router({ prefix: '/v1' })

const throttle = require('../../midlewares/throttle')

const tokensRoutes = require('./tokens')
const notessRoutes = require('./notes')

router.use(tokensRoutes.routes())
router.use(notessRoutes.routes(), throttle)

module.exports = router