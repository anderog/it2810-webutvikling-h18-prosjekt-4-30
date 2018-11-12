const express = require("express");
const Product = require("../../models/Product");

const router = express.Router();

// @route GET api/products
router.get("/", (request, response) => {
  //Det som tidligere var i .find() er nå flyttet inn som første argument i .paginate.
  let query = {};
  request.query.search !== ""
    ? (query["$text"] = { $search: request.query.search })
    : null;
  for (var key in request.query) {
    request.query[key] !== "" && key !== "page" && key !== "search"
      ? (query[key] = request.query[key])
      : null;
  }
  Product.paginate(query, {
    page: request.query.page,
    limit: 10
  }).then(items => response.json(items));

  // https://mongoosejs.com/docs/guide.html
});

module.exports = router;
