'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venues', [
      {
        name: "Chapters on the Horizon",
        description: "Quaint and countrified, Chapters on the Horizon boasts an idyllic charm, perfect for a WEEKEND gathering of family and friends to celebrate your nuptials. Conveniently host all festivities on site -rehearsal dinner, ceremony and reception. In the fall, the forest showcases vibrant, intense foliage, and you can wander the small apple orchard. Exchange vows on the lush green lawn under a simple arbor, before sneaking off to the pond for a quick ride in the blue rowboat (hello, photo op!) while your guests enjoy a cocktail or two on the deck, which is equipped with gas fire pits to keep things cozy during cooler nights. You can top off your evening with dinner and dancing while the sun drops down over the dramatic valley views, either outdoors under the stars, or in the charming banquet hall.",
        gpsLocation: "43.512155776323056, -90.65116008465739",
        city: "Viola",
        state: "Wisconsin",
        zipCode: 54664,
        maxNumberGuests: 400,
        averagePrice: 20000,
        imgUrl:`https://cdn.wedding-spot.com/__sized__/images/venues/16725/Chapters-on-the-Horizon-Viola-WI-656b3321-c425-4fda-8b25-703a4d817069.1608224091-97450e389c42885476f1fbe9bc5bca5a.jpeg`,
        host:"Chapters on the Horizon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Venues', null, {});
  }
};
