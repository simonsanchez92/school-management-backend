const { send } = require("express/lib/response");
const db = require("../models");
const User = db.User;
const op = db.Sequelize.Op;

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

    res.status(200).json({ success: true, user });
  } catch (err) {
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
// @Route - GET  /api/v1/register
// @access - Private

exports.findAll = async (req, res) => {
  // Tutorial.findAll({ where: condition })
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving tutorials."
  //     });
  //   });
  //   console.log(req);
  try {
    const users = await User.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
