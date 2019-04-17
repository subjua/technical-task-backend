module.exports = {
  server: {
    port: process.env.SERVER_PORT || 3001
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: process.env.DB_SSL || false,
      }
    },
    maxConcurrentQueries: 200,
    pool: {
      max: 45,
      min: 2,
      idle: 500
    }
  }
}