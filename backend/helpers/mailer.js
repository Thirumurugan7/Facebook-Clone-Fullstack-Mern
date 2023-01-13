const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;

const oauth_link = "https://developers.google.com/oauthplayground";

const { EMAIL, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;
const auth = new OAuth2(CLIENT_ID, REFRESH_TOKEN, CLIENT_SECRET, oauth_link);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });
  const accessToken = auth.getAccessToken();

  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Facebook email verification",
    html: ``,
  };
  stmp.send(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
