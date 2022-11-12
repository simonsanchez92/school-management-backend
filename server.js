const express = require("express");
const app = express();
const PORT = process.env.PORT;

const { sequelize } = require("./models/");

app.get("/", (req, res) => {
  res.send("hey man");
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
