const fs = require('fs')
const path = require('path')

const dbConnect = require('../db')

const basename = path.basename(__filename)

const getModels = () => {
  let models = {}

  fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach(file => {
      const model = dbConnect.db.import(path.join(__dirname, file))

      models[model.name] = model
    })

  return models
}

class Models {
  constructor() {
    this.sequelize = dbConnect.db
    this.Sequelize = dbConnect.db
    const models = getModels()

    Object.keys(models)
      .forEach(modelKey => this[modelKey] = models[modelKey])
  }
}

module.exports = new Models()