const express = require("express");
const Review = require("../../models/Review");

const router = express.Router();

// @route POST api/reviews/add
router.post("/add", (request, response) => {
  const newReview = new Review({
    productID: request.body.productID,
    reviews: request.body.reviews
  });
  newReview.save().then(items => response.json(items));
});

// @route PUT api/reviews/update
router.put("/update", (request, response) => {
  let review = Review.where({
    productID: request.body.productID
  });
  review
    .findOneAndUpdate({ reviews: request.body.reviews })
    .setOptions({ new: true })
    .then(items => response.json(items));
});

// @route GET api/reviews
router.get("/", (request, response) => {
  Review.find({ productID: request.query.productID }).then(items =>
    response.json(items)
  );
});

module.exports = router;
