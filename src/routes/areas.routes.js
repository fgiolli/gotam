module.exports = (app) => {
  //definimos las rutas y los controladores de estas
    const areas = require("../controllers/area.controllers.js");
  
    var router = require("express").Router();
  
    router.get("/", areas.findAll);

    app.use("/api/areas", router);
  };
  