module.exports = (sequelize, Sequelize) => {
  //Definimos el esquema de la tabla Area
  const Area = sequelize.define("Area", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Area;
};
