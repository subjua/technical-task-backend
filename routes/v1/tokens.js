const Router = require('koa-router')
const tokensController = require('../../api/controllers/v1/tokensController')

const router = new Router({ prefix: '/tokens' })

router.post('/', tokensController.create)

module.exports = router