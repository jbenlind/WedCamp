'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Amenities', [
      {
        name: "Indoor seating",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Wifi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parking",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Yard games",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Prep kitchen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Restrooms",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Handicap accessible",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Free clean up",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dance area",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Electricity",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Full bar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sound system",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flatware ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Venue planner",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dressing area",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Running water",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stage",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoking allowed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lighting",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Amenities', null, {});
  }
};
