module.exports = (app) => {
  const students = require("../controllers/students");

  const router = require("express").Router();

  // Create a new user

  // Retrieve all teachers
  router.get("/", students.findAll);

  //   // // Retrieve a single user with id
  //   router.get("/:id", teachers.findOne);

  app.use("/api/v1/students", router);
};
