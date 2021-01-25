'use strict';
module.exports = (sequelize, DataTypes) => {
  const VenueAmenity = sequelize.define('VenueAmenity', {
    venueId: DataTypes.INTEGER,
    amenitiesId: DataTypes.INTEGER
  }, {});
  VenueAmenity.associate = function(models) {
    // associations can be defined here
  };
  return VenueAmenity;
};
