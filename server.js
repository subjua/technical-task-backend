const Koa = require('koa')
const config = require('./config')

const router = require('./routes')

const corsMidleware = require('./midlewares/cors')
const bodyParserMidleware = require('./midlewares/bodyParser')

const DB = require('./db')

class Server {
  constructor() {
    this.app = new Koa()
    this.db = DB
    this.server = null
  }

  loadRoutes() {
    this.app
      .use(router.routes())
      .use(router.allowedMethods())
  }

  initDB() {
    this.db.connect()
  }

  loadMidlewares() {
    this.app
      .use(corsMidleware)
      .use(bodyParserMidleware)
  }

  connect() {
    this.app.use(corsMidleware)
  }

  async runServer() {
    this.server = await this.app.listen(config.server.port)
  }

  async start() {
    this.loadMidlewares()
    this.loadRoutes()
    this.initDB()
    await this.runServer()

    const { address, port } = this.server.address()

    console.info(`Server Listening on ${address}:${port}`)
  }
}

module.exports = Server