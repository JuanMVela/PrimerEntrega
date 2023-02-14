const mongoose = require("mongoose");

const carrito = "carrito";

const cartSchema = new mongoose.Schema(
  {
    articulos: [
      {
        artId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "productCart",
        },
        quantity: { type: String, ref: "productCart" },
        _id: false,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const cartModel = mongoose.model(carrito, cartSchema);

module.exports = { cartModel };
