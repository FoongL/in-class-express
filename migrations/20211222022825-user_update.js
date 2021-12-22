'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'email', {type: Sequelize.STRING, unique: true, allowNull: false});
    await queryInterface.addColumn('users', 'password', {type: Sequelize.STRING, allowNull: false});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('users', 'email')
    await queryInterface.removeColumn('users', 'password')
  }
};
