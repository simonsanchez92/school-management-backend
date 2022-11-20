module.exports = (app) => {
  const admins = require("../controllers/admins");

  const router = require("express").Router();

  // Retrieve all students
  router.post("/", admins.register);

  // Retrieve all students
  router.get("/", admins.findAll);

  // Retrieve a student user with id
  router.get("/:id", admins.findOne);

  // Update student profile
  router.put("/:id", admins.update);

  app.use("/api/v1/admins", router);
};
