const db = require("../models");
const { Admin } = db;

// @Description - Create new Admin
// @Route - POST  /api/v1/admins
// @access - Private
exports.register = async (req, res) => {
  const { name, surname, status, user_id } = req.body;

  try {
    let newAdmin = Admin.build({
      name,
      surname,
      status,
      user_id,
    });

    await newAdmin.save({
      fields: ["name", "surname", "status", "user_id"],
    });

    res.status(201).json({ succes: true, data: newAdmin });
  } catch (err) {
    console.log(err);
    res.status(500).json({ succes: false, message: "Internal server error" });
  }
};

// @Description - Retrieve all admins
// @Route - GET  /api/v1/users
// @access - Private
exports.findAll = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json({ success: true, data: admins });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// @Description - Retrieve admin by id
// @Route - GET  /api/v1/admins/:id
// @access - Private

exports.findOne = async (req, res) => {
  try {
    const admin = await Admin.findOne({ where: { id: req.params.id } });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: `No admin found with id ${req.params.id}`,
      });
    }
    res.status(200).json({ success: true, data: admin });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
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

// @Description - update admin profile by id
// @Route - PUT  /api/v1/admins/:id
// @access - Private
exports.update = async (req, res) => {
  //   console.log(req.body);
  //   const { name, surname, phone, address, gender, status, dob, user_id } =
  //     req.body;
  //   try {
  //     await Student.update(
  //       { name, surname, phone, address, gender, status, dob },
  //       {
  //         where: {
  //           user_id: user_id,
  //         },
  //       }
  //     );
  //     const updatedStudent = await Student.findOne({
  //       where: { user_id: user_id },
  //     });
  //     res.status(200).json({ success: true, data: updatedStudent });
  //   } catch (err) {
  //     res
  //       .status(500)
  //       .json({ success: false, message: "Student could not be updated" });
  //   }
};
