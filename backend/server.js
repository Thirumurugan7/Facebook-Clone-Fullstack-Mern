const express = require("express");
const cors = require("cors");
const app = express();
// let allowed = ["http://localhost:3000", "some otherlinks"];
// function options(req, res) {
//   let tmp;
//   let origin = req.header("Origin");
//   if (allowed.indexOf(origin) > -1) {
//     tmp = {
//       origin: true,
//       optionSuccessStatus: 200,
//     };
//   } else {
//     tmp = {
//       origin: "stupid",
//     };
//   }
//   res(null, tmp);
// }
// app.use(cors(options)); //specify the origin --> from where the server can be accessed usually frontend

app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home");
});
app.get("/friends", (req, res) => {
  res.send("welcome to friends");
});
app.get("/books", (req, res) => {
  res.send("welcome to harrypotter");
});

app.listen(8000, () => {
  console.log("listening to port and running");
});
