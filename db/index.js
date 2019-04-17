const Sequelize = require('sequelize')
const config = require('../config')

class DB {
  constructor() {
    this.db = new Sequelize(config.db)
  }

  async connect() {
    try {
      await this.db.authenticate()
  
      console.info('Database Successful Connected.')
    } catch (error) {
      console.error('Database Connection Error:', error)
    }
  }
}

module.exports = new DB()