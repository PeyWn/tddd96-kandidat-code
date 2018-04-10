'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Procedures', {
      kvåCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      preparationTime: {
        type: Sequelize.INTEGER
      },
      operationTime: {
        type: Sequelize.INTEGER
      },
      dismantlingTime: {
        type: Sequelize.INTEGER
      },
      postOperationalTime: {
        type: Sequelize.INTEGER
      },
      downTime: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Procedures');
  }
};
