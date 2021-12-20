'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },      
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('tasks');
  }
};
