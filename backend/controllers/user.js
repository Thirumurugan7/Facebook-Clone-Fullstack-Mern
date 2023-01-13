const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const { validate } = require("../models/User");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
const { sendVerificationEmail } = require("../helpers/mailer");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid email address",
      });
    }

    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: "this email alread exists, try with a different email address",
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message:
          "first name should be at least 3 characters and not more than 30 characters",
      });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message:
          "last name should be at least 3 characters and not more than 30 characters",
      });
    }

    if (!validateLength(password, 6, 30)) {
      return res.status(400).json({
        message:
          "password should be at least 6 characters and not more than 30 characters",
      });
    }

    const cryptedPassword = await bcrypt.hash(password, 1);
    let tempusername = first_name + last_name;
    //console.log(tempusername);
    const newUsername = await validateUsername(tempusername);
    //console.log(newUsername);
    const user = await new User({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    // console.log(emailVerificationToken);
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "registered successfully! activate your email",
    });
    //res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
