const express = require("express");
const asyncHandler = require("express-async-handler");
const { Venue, Review, Amenity, User } = require("../../db/models");
const sequelize = require("sequelize");

const Op = sequelize.Op;

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
  "/search/:query",
  asyncHandler(async (req, res) => {
    const query = req.params.query;

    const results = await Venue.findAll({
      where : {
        city: {
          [Op.iLike] : `%${query}%`
        }
      }
    })
    res.json(results);
  })
)

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const venueId = parseInt(req.params.id, 10)
    const venues = await Venue.findByPk(venueId)
    res.json(venues);
  })

);

router.post("/reviews", asyncHandler(async (req, res) => {
  const {userId, venueId, rating, title, reviewBody, verifiedBooking} = req.body;
  await Review.create({
    userId,
    venueId,
    rating,
    title,
    body: reviewBody,
    verifiedBooking
  })
  const venues = await Venue.findAll({
    include: [
      {model: Review,
      include: {model:User}},
      {model: Amenity, through: {attributes: []}}
    ]}

    );
  res.json(venues);
}) )

module.exports = router;
