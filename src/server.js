const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');

const router = require('./router');
const cors = require('./middleware/cors');
const errorHandler = require('./middleware/errorHandler');

const DB = require('./db');

const init = async () => {
  await DB.connect();

  const app = new Koa();

  // app.use(gracefulShutdown.middleware);
  app.use(errorHandler);

  app.use(bodyParser);
  app.use(cors);

  app.use(router.routes());
  app.use(router.allowedMethods());

  const server = app.listen(config.server.port);

  const { address, port } = server.address();

  console.info(`Server Listening on ${address}:${port}`);

  // gracefulShutdown.registerCleanup(promisify(server.close.bind(server)));
  // gracefulShutdown.registerCleanup(database.close);
};

module.exports = init;
