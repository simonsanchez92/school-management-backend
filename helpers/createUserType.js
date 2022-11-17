const db = require("../models");
const { Admin, Teacher, Student } = db;

exports.test = async () => {
  console.log("testinnggg");
};
exports.createUserType = async (userId, roleId) => {
  const roles = {
    admin: 1,
    teacher: 2,
    student: 3,
  };

  if (roleId == roles.admin) {
    const newAdmin = Admin.build({
      status: true,
      name: null,
      surname: null,
      user_id: userId,
    });

    await newAdmin.save({
      fields: ["status", "name", "surname", "user_id"],
    });
  }

  if (roleId == roles.teacher) {
    const newTeacher = Teacher.build({
      name: null,
      surname: null,
      status: true,
      dob: "01/01/1900",
      gender: null,
      address: null,
      phone: null,
      user_id: userId,
      join_date: new Date(),
    });

    await newTeacher.save({
      fields: [
        "name",
        "surname",
        "status",
        "dob",
        "gender",
        "address",
        "phone",
        "user_id",
        "join_date",
      ],
    });
  }
  if (roleId == roles.student) {
    const newStudent = Student.build({
      name: null,
      surname: null,
      status: true,
      dob: "01/01/1900",
      gender: null,
      address: null,
      phone: null,
      user_id: userId,
      join_date: new Date(),
    });

    await newStudent.save({
      fields: [
        "name",
        "surname",
        "status",
        "dob",
        "gender",
        "address",
        "phone",
        "user_id",
        "join_date",
      ],
    });
  }
};
