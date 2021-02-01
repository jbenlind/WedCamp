'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    numberOfGuests: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId'});
    Booking.belongsTo(models.Venue, { foreignKey: 'venueId'});
  };
  return Booking;
};
