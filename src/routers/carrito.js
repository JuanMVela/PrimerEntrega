const express = require("express");
const carrito = express.Router();

// const { productModel } = require("../models/products.model");
const { cartModel } = require("../models/cart.model");
const { productCartModel } = require("../models/productcart.model");

carrito.get("/", async (req, res) => {
  const datos = await cartModel.find();
  res.json(datos);
});

carrito.post("/", async (req, res) => {
  const body = req.body;
  await cartModel.create(body);
  res.send("Carrito creado");
});

carrito.put("/canasta/:idart/curso/:idcurso", async (req, res) => {
  //tomamos los datos de la url
  const id_art = req.params.idart;
  const id_curso = req.params.idcurso;

  //seleccionamos al alumno
  const alumno = await cartModel.findOne({ _id: id_art });
  if (!alumno) {
    res.send("El alumno no existe");
  }

  //seleccionamos el curso
  const curso = await productCartModel.findOne({ _id: id_curso });
  if (!curso) {
    res.send("El curso no existe");
  }

  //revisamos si el alumno ya tiene el curso
  const cursoExistente = alumno.articulos.find(
    (element) => element.articulos.toString() === id_curso.toString()
  );

  if (cursoExistente) {
    res.send("El curso ya existe");
  } else {
    alumno.articulos.push({ artId: id_curso, quantity: curso.producto });

    await cartModel.updateOne({ _id: id_art }, alumno);

    res.send({ mensaje: `Alumno ${id_art} Actualizado`, alumno: alumno });
  }
});

// carrito.put(
//   "/eliminarCurso/alumno/:idalumno/curso/:idcurso",
//   async (req, res) => {
//     //tomamos los datos de la url
//     const id_alumno = req.params.idalumno;
//     const id_curso = req.params.idcurso;

//     //seleccionamos al alumno
//     const alumno = await cartModel.findOne({ _id: id_alumno });

//     const cursosActualizados = alumno.cursos.filter(
//       (element) => element.curso.toString() !== id_curso.toString()
//     );
//     alumno.cursos = cursosActualizados;

//     await modeloUsuario.updateOne({ _id: id_alumno }, alumno);

//     res.send({ mensaje: `Alumno ${id_alumno} Actualizado`, alumno: alumno });
//   }
// );

module.exports = carrito;
