const db = require("../models");
const { Admin, Teacher, Student } = db;

const roles = {
  admin: 1,
  teacher: 2,
  student: 3,
};

exports.createUserProfile = async (userId, roleId) => {
  let newUser;

  if (roleId == roles.admin) {
    newUser = Admin.build({
      status: true,
      name: null,
      surname: null,
      user_id: userId,
    });

    await newUser.save({
      fields: ["status", "name", "surname", "user_id"],
    });
  }

  if (roleId == roles.teacher) {
    newUser = Teacher.build({
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

    await newUser.save({
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
    newUser = Student.build({
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

    await newUser.save({
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

  return newUser;
};

//TO DO
exports.getUserProfile = async (userId, roleId) => {
  let userProfile;

  if (roleId == roles.admin) {
    userProfile = await Admin.findOne({ where: { user_id: userId } });
  }

  if (roleId == roles.teacher) {
    userProfile = await Teacher.findOne({ where: { user_id: userId } });
  }
  if (roleId == roles.student) {
    userProfile = await Student.findOne({ where: { user_id: userId } });
  }

  return userProfile.dataValues;
};
