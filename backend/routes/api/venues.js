const express = require("express");
const asyncHandler = require("express-async-handler");
const { Venue, Review, Amenity } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const venues = await Venue.findAll({
      include: [
        {model: Review},
        {model: Amenity, through: {attributes: []}}
      ]}

      );
    res.json(venues);
  })
);

module.exports = router;
