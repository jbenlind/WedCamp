"use strict";
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define("Amenity", {
      name: DataTypes.STRING(100),
    },
    {}
  );
  Amenity.associate = function (models) {
    const columnMapping = {
      foreignKey: "amenitiesId",
      otherKey: "venueId",
      through: "VenueAmenity",
    };
    Amenity.belongsToMany(models.Venue, columnMapping);
  };
  return Amenity;
};
