'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      latitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      maxNumberGuests: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      averagePrice: {
        allowNull: false,
        type: Sequelize.NUMERIC(10, 2)
      },
      imgUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      host: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reservedDates: {
        allowNull: true,
        type:Sequelize.ARRAY(Sequelize.STRING)
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
    return queryInterface.dropTable('Venues');
  }
};
