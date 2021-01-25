'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    gpsLocation: DataTypes.NUMERIC,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    maxNumberGuests: DataTypes.INTEGER,
    averagePrice: DataTypes.NUMERIC,
    imgUrl: DataTypes.STRING,
    host: DataTypes.STRING
  }, {});
  Venue.associate = function(models) {
    // associations can be defined here
  };
  return Venue;
};
