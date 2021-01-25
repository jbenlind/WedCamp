'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        userId:1,
        venueId:1,
        date: new Date(),
        numberOfGuests: 50,
        cost: 5500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
