const express = require("express");
const app = express();
const PORT = process.env.PORT;

const { sequelize } = require("./models/");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Importing routes
require("./routes/users")(app);
require("./routes/roles")(app);
require("./routes/teachers")(app);
require("./routes/students")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app's entry point" });
});

const connectDB = async () => {
  console.log("checking db connection...");

  try {
    await sequelize.authenticate();
    console.log("Database connection established!");
  } catch (err) {
    console.log("database connection failed ", err);
    process.exit(1);
  }
};

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})();
