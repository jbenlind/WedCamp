const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking, Venue } = require("../../db/models");

const router = express.Router();

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const booking = await Booking.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(booking);
  })
);

router.post(
  "/:userId",
  asyncHandler(async (req, res, next) => {
    const userId = await parseInt(req.params.userId, 10);
    const { venueId, date, numGuests } = req.body;
    const venue = await Venue.findByPk(venueId)
    const booking = await Booking.create({
      userId,
      venueId: Number(venueId),
      date,
      numberOfGuests: numGuests,
    });
    if(venue.reservedDates) {
      venue.reservedDates.push(date);
      venue.save();
    } else {
      venue.reservedDates = [];
      venue.reservedDates.push(date);
      venue.save();
    }
    res.json(booking);
  })
);

module.exports = router;
