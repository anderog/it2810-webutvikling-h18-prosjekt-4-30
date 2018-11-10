const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    productID: { type: String },
    reviews: { type: Array }
  },
  { collection: "reviews" }
);

module.exports = Review = mongoose.model("review", reviewSchema);
