// Configuración de BD
const Sequelize = require("sequelize");
const sequelize = new Sequelize("gotam", process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: 'mysql',
});

// Creamos un modulo y le agregamos las propiedades de la conexión ya establecida
// además le agregamos las funciones de sequelize que actuan sobre los esquemas o modelos de las tablas

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.empleados = require("./empleados.models")(sequelize, Sequelize)
db.areas = require("./areas.models")(sequelize, Sequelize);

// Creamos la relacion de 1 a 1: 
db.empleados.Areas = db.empleados.belongsTo(db.areas); 


module.exports = db;
