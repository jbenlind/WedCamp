'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    verifiedBooking: DataTypes.BOOLEAN
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Users, { foreignKey: 'userId'});
    Review.belongsTo(models.Venue, { foreignKey: 'venueId'});
  };
  return Review;
};
