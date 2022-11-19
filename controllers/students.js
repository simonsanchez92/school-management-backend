const db = require("../models");
const { User, Student } = db;

// @Description - Create new Teacher
// @Route - POST  /api/v1/teachers
// @access - Private
exports.register = async (req, res) => {
  const { name, surname, phone, address, gender, status, dob, user_id } =
    req.body;

  try {
    let newStudent = Student.build({
      name,
      surname,
      phone,
      address,
      gender,
      status,
      dob,
      user_id,
    });

    await newStudent.save({
      fields: [
        "name",
        "surname",
        "phone",
        "address",
        "gender",
        "status",
        "dob",
        "user_id",
      ],
    });

    res.status(201).json({ succes: true, data: newStudent });
  } catch (err) {
    console.log(err);
    res.status(500).json({ succes: false, message: "Internal server error" });
  }
};

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
  const { name, surname, phone, address, gender, status, dob, user_id } =
    req.body;

  try {
    await Student.update(
      { name, surname, phone, address, gender, status, dob },
      {
        where: {
          user_id: user_id,
        },
      }
    );

    const updatedStudent = await Student.findOne({
      where: { user_id: user_id },
    });

    res.status(200).json({ success: true, data: updatedStudent });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Student could not be updated" });
  }
};
