const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { readdirSync } = require("fs");
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
app.use(express.json());
//routing manually
// const useRoutes = require("./routes/user");

// app.use("/user", useRoutes);

// routing dynamically
//mapping through the files in routes directory and requiring it
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// database

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((err) => {
    console.log("error connecting to mongodb", err);
  });
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("listening to port and running in " + port);
});
