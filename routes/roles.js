module.exports = (app) => {
  const roles = require("../controllers/roles");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", roles.create);

  // Retrieve all roles
  router.get("/", roles.getAll);

  app.use("/api/v1/roles", router);
};
