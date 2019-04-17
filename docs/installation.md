# Setup
```sh npm i ```

# Migrations
* **Create**
```sh npx sequelize migration:generate --name [migrationName] ```
* **Up** 
```sh npx sequelize db:migrate ```
* **Down** 
```sh $ npx sequelize db:migrate:undo ```

# Run
```sh npm start```