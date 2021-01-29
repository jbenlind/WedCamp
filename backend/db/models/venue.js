'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    gpsLocation: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    maxNumberGuests: DataTypes.INTEGER,
    averagePrice: DataTypes.NUMERIC(10, 2),
    imgUrl: DataTypes.STRING,
    host: DataTypes.STRING,
    reservedDates: DataTypes.DATE
  }, {});
  Venue.associate = function(models) {
    Venue.hasMany(models.Booking, { foreignKey: 'venueId'});
    Venue.hasMany(models.Review, { foreignKey: 'venueId'});
    const columnMapping = {
      foreignKey: 'venueId',
      otherKey: 'amenitiesId',
      through: 'VenueAmenity',
    }
    Venue.belongsToMany(models.Amenity, columnMapping)
  };

  return Venue;
};
