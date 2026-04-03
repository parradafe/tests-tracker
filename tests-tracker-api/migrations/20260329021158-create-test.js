'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      categoryId: {
        type: Sequelize.UUID
      },
      variantId: {
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.CHAR
      },
      description: {
        type: Sequelize.CHAR
      },
      icon: {
        type: Sequelize.STRING
      },
      inputValues: {
        type: Sequelize.JSON
      },
      referenceValues: {
        type: Sequelize.JSON
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tests');
  }
};