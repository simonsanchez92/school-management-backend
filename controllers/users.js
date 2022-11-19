const db = require("../models");
const { User, Role, Admin, Teacher, Student } = db;
// const Role = db.Role;
const op = db.Sequelize.Op;
const bcrypt = require("bcrypt");

const {
  createUserProfile,
  getUserProfile,
} = require("../helpers/createUserType");
// @Description - Register user
// @Route - POST  /api/v1/users/register
// @access - Public
exports.register = async (req, res) => {
  // Validate request

  const { email, password, role_id } = req.body;

  try {
    let user = await User.findOne({ where: { email: email } });

    if (user) {
      return res.status(400).json({
        success: false,
        message: `User '${user.dataValues.email}' already exists`,
      });
    }

    user = User.build({ email, password, role_id });

    //Password encryption
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save({ fields: ["email", "password", "role_id"] });

    const savedUser = await User.findOne({ where: { email: email } });

    //Create Admin/Teacher/Student according to role_id
    const userProfile = await createUserProfile(
      savedUser.dataValues.id,
      role_id
    );

    res.status(200).json({ success: true, data: { user, userProfile } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }

  // Create a Tutorial
  //   const tutorial = {
  //     title: req.body.title,
  //     description: req.body.description,
  //     published: req.body.published ? req.body.published : false,
  //   };

  //   // Save Tutorial in the database
  //   Tutorial.create(tutorial)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Tutorial.",
  //       });
  //     });
};

// @Description - Retrieve all users
// @Route - GET  /api/v1/users
// @access - Private

exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    // console.log(users);

    //TO DO
    const response = users.map(async (u) => {
      let user = u.dataValues;
      let profile = await getUserProfile(user.id, user.role_id);
      console.log({ currentUser: u, profile });
    });

    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @Description - Retrieve user by id
// @Route - GET  /api/v1/users/:id
// @access - Private

exports.findOne = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `No user found with id ${req.params.id}`,
      });
    }
    res.status(200).json({ success: true, data: user });
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
