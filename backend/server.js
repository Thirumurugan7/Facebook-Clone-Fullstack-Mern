const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to home");
});
app.get("/friends", (req, res) => {
  res.send("welcome to friends");
});
app.get("/books", (req, res) => {
  res.send("welcome to books");
});

app.listen(8000, () => {
  console.log("listening to port and running");
});
