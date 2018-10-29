const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const Schema = mongoose.Schema;

// Creates Schema:
const itemSchema = new Schema({
  abv: { type: Float },
  ibu: { type: Schema.Types.Mixed },
  id: { type: Number },
  name: { type: String },
  style: { type: String },
  brewery_id: { type: Number },
  ounces: { type: Float }
  
  // https://mongoosejs.com/docs/guide.html
}, { collection: 'beers' });

module.exports = Item = mongoose.model('item', itemSchema);
