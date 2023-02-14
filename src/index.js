// import Rutas
const routerProduct = require("./routers/routerProduct");
const routerCart = require("./routers/routerCart");
const carrito = require("./routers/carrito");
// const viewsRouters = require("./routers/viewsRouter");
// const productsRouter = require("./routers/productsRouter");

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const dotenv = require("dotenv");
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Vistas
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// Rutas
app.use("/productos", routerProduct);
app.use("/cart", routerCart);
app.use("/carrito", carrito);
// app.use("/", viewsRouters);
// app.use("/", productsRouter);

// Puerto servidor
const PORT = 8080;

// Activacion servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Conexion a MongoDB
const dbMongoConnect = require("./mongo");
