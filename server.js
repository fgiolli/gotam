const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const db = require('./src/models')

require('dotenv').config()

//Desde donde permitimos la conexión?
var corsOptions = {
  origin: "*",
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Rutas
require("./src/routes/empleados.routes")(app);
require("./src/routes/areas.routes")(app);

db.sequelize.sync() // Sincroniza la base de datos

app.listen(port, () => {});
