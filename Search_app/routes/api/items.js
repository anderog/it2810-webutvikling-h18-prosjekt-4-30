const express = require('express');
const Item = require('../../models/Item');

const router = express.Router();

// @route GET api/items
router.get('/', (request, response) => {
  Item.find()
    .then(items => response.json(items))

    // https://mongoosejs.com/docs/guide.html
});

// Eks. on a post with the eks. schima in models/Item.js
// // @route Post api/items
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

// @route DEL api/items/:id
router.delete('/:id', (request, response) => {
  // request.params.id will fetch the id from the uri
  Item.findById(request.params.id)
  .then(item => item.remove().then(() => response.json({success: true})))
  .catch(err => response.status(404).json({success: false}))

  // https://mongoosejs.com/docs/guide.html
});

module.exports = router;
