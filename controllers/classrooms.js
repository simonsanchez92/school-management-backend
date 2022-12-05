const db = require("../models");
const { Classroom } = db;

// @Description - Register classroom
// @Route - POST  /api/v1/classrooms
// @access - Public
exports.register = async (req, res) => {
  try {
    const { year, description, division_id } = req.body;

    let classroom = await Classroom.findOne({
      where: { year: year, description: description, division_id: division_id },
    });

    //Returns in case classroom is in use for that year and division
    if (classroom) {
      return res
        .status(403)
        .json({ success: false, message: "Classroom already exists" });
    }

    //Create new classroom in case it does not exists already
    classroom = Classroom.build({ year, description, division_id });
    await classroom.save({ fields: ["year", "description", "division_id"] });

    return res.status(201).json({ success: true, data: classroom });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }

  //   res.json({ messsage: "No classroom found" });

  //   try {
  //     let user = await User.findOne({ where: { email: email } });

  //     if (user) {
  //       return res.status(400).json({
  //         success: false,
  //         message: `User '${user.dataValues.email}' already exists`,
  //       });
  //     }

  //     user = User.build({ email, password, role_id });

  //     //Password encryption
  //     const salt = await bcrypt.genSalt(10);

  //     user.password = await bcrypt.hash(password, salt);

  //     await user.save({ fields: ["email", "password", "role_id"] });

  //     // const savedUser = await User.findOne({ where: { email: email } });

  //     //Create Admin/Teacher/Student according to role_id
  //     // const userProfile = await createUserProfile(
  //     //   savedUser.dataValues.id,
  //     //   role_id
  //     // );

  //     res.status(200).json({ success: true, data: user });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ success: false, message: "Internal Server Error" });
  //   }
};

// @Description - Retrieve all users
// @Route - GET  /api/v1/users
// @access - Private

exports.findAll = async (req, res) => {
  //   try {
  //     const users = await User.findAll();
  //     // console.log(users);
  //     //TO DO
  //     const response = users.map(async (u) => {
  //       let user = u.dataValues;
  //       let profile = await getUserProfile(user.id, user.role_id);
  //       console.log({ currentUser: u, profile });
  //     });
  //     res.status(200).json({ success: true, data: users });
  //   } catch (err) {
  //     res.status(500).json({ success: false, message: "Server error" });
  //   }
};

// @Description - Retrieve user by id
// @Route - GET  /api/v1/users/:id
// @access - Private

exports.findOne = async (req, res) => {
  //   try {
  //     const user = await User.findOne({ where: { id: req.params.id } });
  //     if (!user) {
  //       return res.status(404).json({
  //         success: false,
  //         message: `No user found with id ${req.params.id}`,
  //       });
  //     }
  //     res.status(200).json({ success: true, data: user });
  //   } catch (err) {
  //     res.status(500).json({ success: false, message: "Server error" });
  //   }
};

// @Description - delete user by id
// @Route - DELETE  /api/v1/users/:id
// @access - Private

exports.delete = async (req, res) => {
  //   console.log(req.params);
  //   try {
  //     const deleted = await User.destroy({ where: { id: req.params.id } });
  //     if (!deleted) {
  //       return res.status(404).json({
  //         success: false,
  //         message: `User with id ${req.params.id} does not exist`,
  //       });
  //     }
  //     res.status(200).json({ success: true, message: "User deleted" });
  //   } catch (err) {
  //     res.status(500).json({ success: false, message: "Server error" });
  //   }
};
