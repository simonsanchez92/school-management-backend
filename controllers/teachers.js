const db = require("../models");
const { User, Role, Admin, Teacher, Student } = db;

const bcrypt = require("bcrypt");

// @Description - Retrieve all users
// @Route - GET  /api/v1/users
// @access - Private

exports.findAll = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    // console.log(users);

    //TO DO
    // const response = users.map(async (u) => {
    //   let user = u.dataValues;
    //   let profile = await getUserProfile(user.id, user.role_id);
    //   console.log({ currentUser: u, profile });
    // });

    res.status(200).json({ success: true, data: teachers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @Description - Retrieve user by id
// @Route - GET  /api/v1/users/:id
// @access - Private

exports.findOne = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ where: { id: req.params.id } });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: `No teacher found with id ${req.params.id}`,
      });
    }
    res.status(200).json({ success: true, data: teacher });
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
