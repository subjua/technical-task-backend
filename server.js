const Koa = require('koa')
const config = require('./config')

const router = require('./routes')

const corsMidleware = require('./midlewares/cors')

const DB = require('./db')

function Server() {
  this.app = new Koa()
  this.db = DB
  this.server = null
}

Server.prototype.loadRoutes = function () {
  this.app
    .use(router.routes())
    .use(router.allowedMethods())
}

Server.prototype.initDB = function () {
  this.db.connect()
}

Server.prototype.loadMidlewares = function () {
  this.app.use(corsMidleware)
}

Server.prototype.connect = function () {
  this.app.use(corsMidleware)
}

Server.prototype.runServer = function () {
  this.server = this.app.listen(config.server.port)
}

Server.prototype.start = function () {
  this.loadMidlewares()
  this.loadRoutes()
  this.initDB()
  this.runServer()

  const { address, port } = this.server.address()

  console.info(`Server Listening on ${address}:${port}`)
}

module.exports = Server