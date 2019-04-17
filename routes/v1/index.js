const Router = require('koa-router')

const router = new Router({ prefix: '/v1' })

const apiController = require('../../api/controllers/v1/apiController')

const tokensRoutes = require('./tokens')
const notessRoutes = require('./notes')

router.get('/', apiController.index)
router.use(tokensRoutes.routes())
router.use(notessRoutes.routes())

module.exports = router