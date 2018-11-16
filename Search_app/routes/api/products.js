const express = require("express");
const Product = require("../../models/Product");

const router = express.Router();

// Creates a proper get from the URL
//Note that .paginate takes both a query and an options argument
router.get("/", (request, response) => {
  let query = {};
  let order = {};
  order[request.query.orderBy] = request.query.order;
  request.query.search !== ""
    ? (query["$text"] = { $search: request.query.search })
    : null;
  //Because the .paginate function takes two different arguments, both
  //of which derive from request.query, it is necessary to go through
  //the request.query and ignore the options-parts of it when generating the
  //query-argument.
  // These options-parts are added to the options-argument afterwards.
  for (var key in request.query) {
    request.query[key] !== "" &&
    key !== "page" &&
    key !== "search" &&
    key !== "order" &&
    key !== "orderBy"
      ? (query[key] = request.query[key])
      : null;
  }
  Product.paginate(query, {
    page: request.query.page,
    limit: 10,
    sort: order
  }).then(items => response.json(items));

  // https://mongoosejs.com/docs/guide.html
});

module.exports = router;
