const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking } = require("../../db/models");

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
    const booking = await Booking.create({
      userId,
      venueId: Number(venueId),
      date,
      numberOfGuests: numGuests,
    });
    res.json(booking);
  })
);

module.exports = router;
