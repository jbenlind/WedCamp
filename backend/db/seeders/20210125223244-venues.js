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
      {
        name: "The Loft and Chapel at Cedar Ridge",
        description: "Choose The Loft and Chapel at Cedar Ridge for your beautiful wedding celebration. The Loft and Chapel provide beautifully landscaped outdoor grounds for your ceremony. The breathtaking outdoor gazebo, a mid acres of perfectly manicured grounds, is the perfect location to tie the knot. The structure is simple, white and surrounded by greenery. It also creates the perfect backdrop for capturing once-in-a-lifetime photos. But don't worry if you decide to get married in the winter. The Loft and Chapel offers a wonderful hall for all of your guest to enjoy your ceremony and reception on your special day, while staying warm and toasty indoors. The Loft features exposed brick walls, neutral tones and wood trim accents. The open layout allows you to configure the exact layout you need to accommodate your guests for a flawless gathering. Celebrate the most romantic day of your life at The Loft and Chapel at Cedar Ridge.",
        gpsLocation: "43.04052, -88.22286",
        city: "Waukesha",
        state: "Wisconsin",
        zipCode: 53188,
        maxNumberGuests: 300,
        averagePrice: 9000,
        imgUrl: "https://images.cvent.com/ws/images/venues/7687/The-Loft-and-Chapel-at-Cedar-Ridge-Wedding-Waukesha-WI-1.1454666032.jpg?f=webp&unique=true&d=490",
        host: "Cedar Ridge",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Venues', null, {});
  }
};
