module.exports = (app) => {
  const students = require("../controllers/students");

  const router = require("express").Router();

  // Retrieve all students
  router.get("/", students.findAll);

  // Retrieve a student user with id
  router.get("/:id", students.findOne);

  // Update student profile
  router.put("/:id", students.update);

  app.use("/api/v1/students", router);
};
