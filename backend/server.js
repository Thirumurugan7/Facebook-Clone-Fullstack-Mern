const express = require("express");
const cors = require("cors");
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
//routing manually
// const useRoutes = require("./routes/user");

// app.use("/user", useRoutes);

// routing dynamically
//mapping through the files in routes directory and requiring it
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

app.listen(8000, () => {
  console.log("listening to port and running");
});
