"use strict";
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define(
    "Amenity",
    {
      name: DataTypes.STRING(100),
    },
    {}
  );
  Amenity.associate = function (models) {
    const columnMapping = {
      through: "VenueAmenity",
      otherKey: "venueId",
      foreignkey: "amenitiesId",
    };
    Amenity.belongsToMany(models.Venue, columnMapping);
  };
  return Amenity;
};
