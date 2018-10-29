const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creates Schema:
const itemSchema = new Schema({
  // Schema goes her..
  // name: {
  //      type: String
  // },
  // phone: {
  //   type: String
  // }

  // https://mongoosejs.com/docs/guide.html
});

module.exports = Item = mongoose.model('item', itemSchema);
