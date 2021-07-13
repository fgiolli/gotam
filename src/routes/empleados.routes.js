module.exports = (app) => {
  const empleados = require("../controllers/empleado.controllers.js");

  var router = require("express").Router();

  router.post("/", empleados.create);

  router.get("/", empleados.findAll);

  router.put("/:id", empleados.update);

  router.delete("/:id", empleados.delete);

  app.use("/api/empleados", router);
};
