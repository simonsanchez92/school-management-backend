const db = require("../models");
const { User, Role, Admin, Teacher, Student } = db;

const bcrypt = require("bcrypt");

// @Description - Retrieve all users
// @Route - GET  /api/v1/users
// @access - Private

exports.findAll = async (req, res) => {
  try {
    const student = await Student.findAll();

    res.status(200).json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @Description - Retrieve user by id
// @Route - GET  /api/v1/users/:id
// @access - Private

exports.findOne = async (req, res) => {
  try {
    const student = await Student.findOne({ where: { id: req.params.id } });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: `No student found with id ${req.params.id}`,
      });
    }
    res.status(200).json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @Description - delete user by id
// @Route - DELETE  /api/v1/users/:id
// @access - Private

exports.delete = async (req, res) => {
  console.log(req.params);

  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `User with id ${req.params.id} does not exist`,
      });
    }
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @Description - update student profile by id
// @Route - PUT  /api/v1/students/:id
// @access - Private
exports.update = async (req, res) => {
  console.log(req.body);
  res.json(req.body);
};
