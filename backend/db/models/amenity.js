'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenities = sequelize.define('Amenity', {
    name: DataTypes.STRING(100)
  }, {});
  Amenities.associate = function(models) {
    const columnMapping = {
      through: 'VenueAmenity',
      otherKey: 'venueId',
      foreignkey: 'amenitiesId'
    }
    Venue.belongsToMany(models.Amenities, columnMapping)

  };
  return Amenities;
};
