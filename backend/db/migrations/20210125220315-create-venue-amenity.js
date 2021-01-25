'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VenueAmenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      venueId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Venues'}
      },
      amenitiesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Amenities'}
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
    return queryInterface.dropTable('VenueAmenities');
  }
};
