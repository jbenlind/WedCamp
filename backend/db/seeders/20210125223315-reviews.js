'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        venueId: 1,
        title: "Best Venue Ever!!",
        body: "This venue was exactly what we were looking for. Everything was ready for us, and we did not have to worry about anything. The weather was perfect and the trees were at the perfect color. The host had set everything up so that all we had to do was show up and enjoy ourselves, and it was perfect.",
        rating: 10,
        verifiedBooking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
