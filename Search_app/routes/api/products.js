//import { MongooseQueryParser } from "mongoose-query-parser";

const express = require("express");
const Product = require("../../models/Product");

const router = express.Router();

//const parser = new MongooseQueryParser();

// @route GET api/products

router.get("/", (request, response) => {
  var query = { $text: { $search: request.query.search } };
  var options = {
    page: 1,
    limit: 10,
    select: "Varenavn"
  };
  Product.paginate(query, options).then(items => response.json(items));
});

// router.get("/", (request, response) => {
//   //console.log(parser.parse(request));
//   Product.find(
//     {
//       Varetype: request.query.search,
//       Pris: { $lte: parseInt(request.query.price) || 25000 }
//     },
//     "Varenavn Pris",
//     function(err, docs) {}
//   ).then(items => response.json(items));
//
//   // https://mongoosejs.com/docs/guide.html
// });

//@route GET api/products search
// router.get('/cider', (request, response) => {
//   Product.find({$text: {$search: "Cider"}, style: "Cider"})
//     .then(items => response.json(items))

// https://mongoosejs.com/docs/guide.html
// });

// Eks. on a post with the eks. schima in models/Item.js
// // @route Post api/pruducts
// router.post('/', (request, response) => {
//   const newItem = new Item({
//     name: request.body.name
//     phone: request.body.phone
//   });
//
//   newItem.save().then(item => response.json(item));
//
//     // https://mongoosejs.com/docs/guide.html
// });

// @route DEL api/products/:id
router.delete("/:id", (request, response) => {
  // request.params.id will fetch the id from the uri
  Product.findById(request.params.id)
    .then(item => item.remove().then(() => response.json({ success: true })))
    .catch(err => response.status(404).json({ success: false }));

  // https://mongoosejs.com/docs/guide.html
});

module.exports = router;
