module.exports = (app) => {
  const users = require("../controllers/users");

  const router = require("express").Router();

  // Create a new user
  router.post("/register", users.register);

  // Retrieve all Users
  router.get("/", users.findAll);

  // // Retrieve a single user with id
  router.get("/:id", users.findOne);

  // // Delete a user with id
  router.delete("/:id", users.delete);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/v1/users", router);
};
