const mongoose = require("mongoose");

const productCartSchema = new mongoose.Schema(
  {
    producto: String,
    quantity: String,
  },
  {
    versionKey: false,
  }
);

const productCartModel = mongoose.model("productCart", productCartSchema);

module.exports = { productCartModel };
