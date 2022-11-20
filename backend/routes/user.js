const express = require("express");
const { home } = require("../controllers/user");

const router = express.Router();

router.get("/user", home);
router.get("/friend", (req, res) => {
  res.send("welcome from friend");
});
router.get("/mia", (req, res) => {
  res.send("mia wants to fuck you");
});

module.exports = router;
