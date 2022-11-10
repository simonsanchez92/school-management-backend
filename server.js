const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hey man");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
