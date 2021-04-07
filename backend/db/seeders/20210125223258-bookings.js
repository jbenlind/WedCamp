'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Bookings', [{}]);
    return new Promise((promise) => promise())
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
