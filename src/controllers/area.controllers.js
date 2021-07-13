const db = require('../models')
const Area = db.areas;

exports.findAll = (req, res) => {
    Area.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };