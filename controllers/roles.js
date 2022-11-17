const db = require("../models");
const Role = db.Role;
const op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
};

// @Description - Retrieve all roles
// @Route - GET  /api/v1/roles
// @access - Private

exports.getAll = async (req, res) => {
  try {
    let roles = await Role.findAll();

    if (!roles.length) {
      res
        .status(404)
        .json({ success: true, message: "No roles found", data: roles });
    }
    res.status(200).json({ success: true, data: roles });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
