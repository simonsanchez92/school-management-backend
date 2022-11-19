module.exports = (app) => {
  const teachers = require("../controllers/teachers");

  const router = require("express").Router();

  // Create a new user

  // Retrieve all teachers
  router.get("/", teachers.findAll);

  //   // // Retrieve a single user with id
  //   router.get("/:id", teachers.findOne);

  app.use("/api/v1/teachers", router);
};
