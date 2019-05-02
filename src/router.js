'use strict';

const Router = require('koa-router');
const requireAuth = require('./middleware/requireAuth');
const throttle = require('./middleware/throttle');

const notesController = require('./controllers/v1/notesController');
const tokensController = require('./controllers/v1/tokensController');

const router = new Router({ prefix: '/api/v1' });

router.post('/tokens', tokensController.create);

router.use(throttle, requireAuth);

router.get('/notes', notesController.find);
router.get('/notes/:id', notesController.findOne);
router.post('/notes', notesController.create);
router.delete('/notes/:id', notesController.destroy);
router.patch('/notes/:id', notesController.update);

module.exports = router;
