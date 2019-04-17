# Migrations
## Create
npx sequelize migration:generate --name [migrationName]
## Up
npx sequelize db:migrate
## Down
npx sequelize db:migrate:undo