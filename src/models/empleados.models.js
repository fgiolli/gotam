module.exports = (sequelize, Sequelize) => {
  //Definimos el esquema de la tabla Empleado
  const Empleado = sequelize.define("Empleado", {
    fullname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    DNI: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    developer: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
  });
  return Empleado;
};
