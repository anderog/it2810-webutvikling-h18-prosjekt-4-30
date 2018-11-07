const express = require("express");
const Review = require("../../models/Review");

const router = express.Router();

// Eks. on a post with the eks. schema in models/Review.js
// @route Post api/reviews/add
router.post("/add", (request, response) => {
  const newReview = new Review({
    productID: request.body.productID,
    reviews: request.body.reviews
  });
  newReview.save().then(items => response.json(items));
});

// @route GET api/reviews
router.get("/", (request, response) => {
  Review.find({ productID: request.param("productID") }).then(items =>
    response.json(items)
  );
});

module.exports = router;
