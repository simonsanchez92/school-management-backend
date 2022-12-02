module.exports = (app) => {
  const classrooms = require("../controllers/classrooms");

  const router = require("express").Router();

  // Create a new classroom
  router.post("/register", classrooms.register);

  // Retrieve all classrooms
  router.get("/", classrooms.findAll);

  // // Retrieve a single classrooms with id
  router.get("/:id", classrooms.findOne);

  // // Delete a classrooms with id
  router.delete("/:id", classrooms.delete);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/v1/classrooms", router);
};
