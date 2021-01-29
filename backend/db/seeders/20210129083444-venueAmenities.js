"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "VenueAmenities",
      [
        {
          venueId: 1,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 1,
          amenitiesId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 1,
          amenitiesId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 1,
          amenitiesId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 1,
          amenitiesId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 1,
          amenitiesId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 1,
          amenitiesId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 2,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 3,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 4,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 5,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 6,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 7,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 8,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 9,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 10,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 11,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 12,
          amenitiesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("VenueAmenities", null, {});
  },
};
