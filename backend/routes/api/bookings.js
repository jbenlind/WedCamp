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
    await Booking.create({
      userId,
      venueId: Number(venueId),
      date,
      numberOfGuests: numGuests,
    });
    if(venue.reservedDates) {
      venue.reservedDates = [...venue.reservedDates, date.toString().slice(0, 10)];
      venue.save();
    } else {
      venue.reservedDates = [];
      venue.reservedDates = [...venue.reservedDates, date.toString().slice(0, 10)];
      venue.save();
    }
    const bookings = await Booking.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(bookings);
  })
);

router.post(
  "/:userId/delete",
  asyncHandler(async (req, res, next) => {
    const { bookingId } = req.body;

    const bookingToRemove = await Booking.findByPk(bookingId);
    const venueId = bookingToRemove.venueId;
    const venue = await Venue.findByPk(venueId);

    function formatDate(param) {
      let month = '' + (param.getMonth() + 1)
      let day = '' + param.getDate()
      let year = param.getFullYear()

      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;

      return [year, month, day].join('-');
    }

    let formattedDate = formatDate(bookingToRemove.date)
    let updatedReservedDates = venue.reservedDates.filter((date) => {
      return date !== formattedDate
    })
    venue.reservedDates = updatedReservedDates;
    venue.save()

    await Booking.destroy({
      where: {
        id: bookingId
      }
    });
    const bookings = await Booking.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(bookings);
  })
);

module.exports = router;
