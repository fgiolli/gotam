//Obtenemos la conexión con la base de datos y las funciones de sequelize que actuan sobre las tablas

const db = require("../models");
const Empleado = db.empleados;

exports.create = (req, res) => {
  const empleado = req.body;
  Empleado.create(empleado)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
  Empleado.findAll({ include: [{association:Empleado.Areas}]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Empleado.destroy({ where: { dni: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ok.",
        });
      } else {
        res.send({
          message: "Error al intentar eliminar",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al intentar actualizar DNI: " + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Empleado.update(req.body, { where: { dni: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Ok.",
        });
      } else {
        res.send({
          message: "Error al intentar actualizar",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error al intentar actualizar el DNI: " + id,
      });
    });
};
