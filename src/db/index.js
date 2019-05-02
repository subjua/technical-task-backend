const Sequelize = require('sequelize');
const config = require('../config');

class DB {
  constructor() {
    this.connection = new Sequelize(config.db);
  }

  async connect() {
    await this.connection.authenticate();

    console.info('Database successfully connected');
  }

  async close() {
    await this.connection.close();

    console.info('Closed database connection');
  }
}

module.exports = new DB();
