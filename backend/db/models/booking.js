'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    numberOfGuests: DataTypes.INTEGER,
    cost: DataTypes.NUMERIC(10, 2)
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Users, { foreignKey: 'userId'});
    Booking.belongsTo(models.Venue, { foreignKey: 'venueId'});
  };
  return Booking;
};
