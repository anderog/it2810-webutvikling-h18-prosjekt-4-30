const express = require("express");
const Product = require("../../models/Product");

const router = express.Router();

// @route GET api/products
router.get("/", (request, response) => {
  //Det som tidligere var i .find() er nå flyttet inn som første argument i .paginate.
  Product.paginate(
    { Varetype: "Akevitt" },
    {
      page: 2,
      limit: 10,
      select: "Varenavn"
    }
  ).then(items => response.json(items));

  // https://mongoosejs.com/docs/guide.html
});

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
