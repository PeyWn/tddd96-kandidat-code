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
        allowNull: false,
        type: Sequelize.STRING
      },
      preparationTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      operationTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dismantlingTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      postOperationalTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      downTime: {
        allowNull: false,
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
