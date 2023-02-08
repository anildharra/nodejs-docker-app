const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Dharra (Node Full Stack Architect), from inside a docker container...</h1>");
});

app.listen(3000, () => {
  console.log("Now, App running on port 3000...");
});
