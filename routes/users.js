module.exports = (app) => {
  const users = require("../controllers/users");

  const router = require("express").Router();

  // Create a new user
  router.post("/register", users.register);

  // Retrieve all Users
  router.get("/", users.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/v1/users", router);
};
