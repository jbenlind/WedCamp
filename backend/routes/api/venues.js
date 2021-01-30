const express = require("express");
const asyncHandler = require("express-async-handler");
const { Venue, Review, Amenity, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const venues = await Venue.findAll({
      include: [
        {model: Review,
        include: {model:User}},
        {model: Amenity, through: {attributes: []}}
      ]}

      );
    res.json(venues);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const venueId = parseInt(req.params.id, 10)
    const venues = await Venue.findByPk(venueId)
    res.json(venues);
  })
);

module.exports = router;
