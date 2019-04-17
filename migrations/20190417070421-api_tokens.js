'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('api_tokens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: Sequelize.STRING,
      token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('api_tokens');
  }
};
