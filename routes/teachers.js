module.exports = (app) => {
  const teachers = require("../controllers/teachers");

  const router = require("express").Router();

  // Create a new teacher
  router.post("/", teachers.register);

  // Retrieve all teachers
  router.get("/", teachers.findAll);

  // Retrieve a single teacher by id
  router.get("/:id", teachers.findOne);

  app.use("/api/v1/teachers", router);
};
