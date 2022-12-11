const db = require("../models");
const { Classroom, Student, Classroom_Student } = db;

// @Description - Register classroom
// @Route - POST  /api/v1/classrooms
// @access - Public
exports.register = async (req, res) => {
  try {
    const { year, school_year_id, division_id, shift_id } = req.body;

    let classroom = await Classroom.findOne({
      where: {
        year: year,
        school_year_id: school_year_id,
        division_id: division_id,
        shift_id: shift_id,
      },
    });

    //Returns in case classroom is in use for that year and division
    if (classroom) {
      return res
        .status(403)
        .json({ success: false, message: "Classroom already exists" });
    }

    //Create new classroom in case it does not exists already
    classroom = Classroom.build({
      year,
      school_year_id,
      division_id,
      shift_id,
    });
    await classroom.save({
      fields: ["year", "school_year_id", "division_id", "shift_id"],
    });

    return res.status(201).json({ success: true, data: classroom });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// @Description - Retrieve all classrooms
// @Route - GET  /api/v1/classrooms
// @access - Private

exports.findAll = async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();

    res.status(200).json({ success: true, data: classrooms });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }

  // res.json({ test: "Testing classroom endpoint" });
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

// @Description - enroll new student to classroom
// @Route - POST  /api/v1/classroom/student/enroll
// @access - Private

exports.enrollStudent = async (req, res) => {
  const { id } = req.params; //classroom ID passed through URL
  const { student_id } = req.body;

  console.log(req.params.id);
  // const classroom = await Classroom.findOne({ where: { id: req.params.id } });
  // const student = await Student.findOne({ where: { id: student_id } });

  // console.log(classroom);
  // console.log(student);

  // await student.addClassroom(classroom, { through: "Classroom_Student" });
  console.log({ id, student_id });

  try {
    const isEnrolled = await Classroom_Student.findOne({
      where: { classroom_id: id, student_id: student_id },
    });

    if (isEnrolled) {
      return res.json({
        success: false,
        message: "Student already enrolled",
        data: isEnrolled,
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }

  res.json({ test: "testing endpoint" });
};
