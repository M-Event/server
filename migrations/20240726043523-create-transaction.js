'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrderId: {
        type: Sequelize.STRING
      },
      ticketQuantity: {
        type: Sequelize.INTEGER
      },
      grandTotal: {
        type: Sequelize.INTEGER
      },
      paymentStatus: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER, 
        references: {
          model: "Users",
          key: "id"
        }
      },
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Events",
          key: "id"
        }
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
    await queryInterface.dropTable('Transactions');
  }
};