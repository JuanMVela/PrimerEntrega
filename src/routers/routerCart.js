const express = require("express");
const routerCart = express.Router();

// const { productModel } = require("../models/products.model");
// const { cartModel } = require("../models/cart.model");
const { productCartModel } = require("../models/productcart.model");

routerCart.get("/", async (req, res) => {
  const datosCart = await productCartModel.find();
  res.send(datosCart);
});

// routerCart.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const datoId = await productModel.findOne({ _id: id });
//   res.json(datoId);
// });

routerCart.post("/", async (req, res) => {
  const body = await req.body;
  await productCartModel.create(body);
  res.send("Carrito cargado");
});

// routerCart.post("/:cid/product/:pid",async (req, res) => {
//   const { cid } = req.params;
//   const datoId = await cartModel.findOne({ _id: cid });

//   const { pid } = req.params;

//   res.send("Carrito cargado");
// });

// routerCart.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const bodyNew = await req.body;
//   await productModel.findByIdAndUpdate({ _id: id }, bodyNew);
//   res.send(`Producto "${id}" actualizado`);
// });

// routerCart.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   await productModel.deleteOne({ _id: id });
//   res.send(`Producto "${id}" eliminado`);
// });

module.exports = routerCart;
