const Router = require('koa-router')
const auth = require('../../midlewares/auth')
const notesController = require('../../api/controllers/v1/notesController')

const router = new Router({ prefix: '/notes' })

router.get('/', auth, notesController.find)
router.get('/:id', auth, notesController.findOne)
router.post('/', auth, notesController.create)
router.delete('/:id', auth, notesController.destroy)
router.patch('/:id', auth, notesController.update)

module.exports = router