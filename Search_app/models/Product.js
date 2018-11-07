const mongoose = require("mongoose");
//const mongoosePaginate = require('mongoose-paginate')
const Float = require("mongoose-float").loadType(mongoose);

const Schema = mongoose.Schema;

// Creates Schema:
const productSchema = new Schema(
  {
    Datotid: { type: String },
    Varenummer: { type: Number },
    Varenavn: { type: String },
    Volum: { type: Float },
    Pris: { type: Float },
    Literpris: { type: Float },
    Varetype: { type: String },
    Produktutvalg: { type: String },
    Butikkategori: { type: String },
    Fylde: { type: Number },
    Friskhet: { type: Number },
    Garvestoffer: { type: Number },
    Bitterhet: { type: Number },
    Sodme: { type: Number },
    Farge: { type: String },
    Lukt: { type: String },
    Smak: { type: String },
    Passertil01: { type: String },
    Passertil02: { type: String },
    Passertil03: { type: String },
    Land: { type: String },
    Distrikt: { type: String },
    Underdistrikt: { type: String },
    Argang: { type: String },
    Rastoff: { type: String },
    Metode: { type: String },
    Alkohol: { type: Float },
    Sukker: { type: String },
    Syre: { type: String },
    Lagringsgrad: { type: String },
    Produsent: { type: String },
    Grossist: { type: String },
    Distributor: { type: String },
    Emballasjetype: { type: String },
    Korktype: { type: String },
    Vareurl: { type: String },
    Okologisk: { type: String },
    Biodynamisk: { type: String },
    Fairtrade: { type: String },
    Miljosmart_emballasje: { type: String },
    Gluten_lav_pa: { type: String },
    Kosher: { type: String },
    HovedGTIN: { type: Number },
    AndreGTINs: { type: String }

    // https://mongoosejs.com/docs/guide.html
  },
  { collection: "alkohol" }
);

//productSchema.plugin(mongoosePaginate)

module.exports = Product = mongoose.model("product", productSchema);
