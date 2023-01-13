const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;

const oauth_link = "https://developers.google.com/oauthplayground";

const { EMAIL, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, ACCESS_TOKEN } =
  process.env;
const auth = new OAuth2(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, oauth_link);

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
    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Facebook Account Verification</title></head><body><div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEU7V53///84VZwqTJjBx9tRaKUhRpbx8va5wNctTpkzUpt+jLj8/P03VJwnSZdDXqHj5/DJ0OJZb6ra3uurtdKTn8RddK1GYKLr7vWapslccKlUaqdNZaVwgrOyu9bU2eeKmMCCkb1ne7Cirs5zhLYAOZAVQJM9hR2BAAAEL0lEQVR4nO3d63KjOBCGYdGK7UgR4oydjHPOzP1f4sZxvLtVM0NkE6lb1Pf+TFVcPAU2BwlQxTHXDGOlllI1Do37lKmjr1feEnEv2LdFZL3q3X/CutXL0Z0i3dYnYWdK7sWJkjXdUVib5a3AY2Tqg9C1lntJomVb9y7sNfdyREz3hXJqqdvoIaqcajz3UkTNN2pY7rfwkB3UuOSNVKlyVNWyhbScQ1GEEEIIIYQQQgghFDWi8hTRYfxvOWOAVFrjjdru2/burn3vx2q/31aK3v/stTHG2jLfITOy2m/vh4fHerc5DeUexnHdZrPb1XX3ePXQ3z7dvLSZXgq1Xt9c1/+T/TXnbvK7Yk+anpsA3GfZCUvdPoSsvFyF5MczVl9+QjLV1Zm+vISkb8/2ZSU0q+4CYEZCf7O5BJiNkPwlW2hOQnN9ITATIenzf0PzEq4vXoOZCP3r5cAshOZ5BjAHYbk66zg0PyHpi3b0GQkvOlTLSUjVPKB84frcs6XchOXLTKB4oX5cuLAc5wKlC2ccj+YhnP1DKl5oZu4L5QvX8w5n5AtpOx8oW/gdG6lsoZ97PCNeWF52dS0f4flHbO73RAvtEE7r+qdxb/369wQDlQ69/rS7XXljy/xGt0NP7l9ttvd/7oI20JdsbzyjfdAVqLd8b46kuxBgznd/2rcA4EbyT+VX2acA4WvGqzDsqDTT6TLHTP81cLfmXso5hQwZXuW8kQZdo7k13Es5pxDhc84/pUHCl1wP1z4KEeZ9m3mI8Mfi1+Fq8esQQtlBCKH8IIRQfhBCKD8IIZQfhBDKD0IIRUR/mFnwbz8DrupXUx9wiHl8mIzbTBQwBDz17x91vEQyXxtm9rh44TXv4FQCIfPgVAIh85yvBMKWd2AjgZDVl0K4Y57rFl/YMY+Cxxc2zDMZ4gu554TFFz4xz2SIL7xfvPCOeZw/unCzZT5/jC7c2aULmc8OEwiZz50SCF+5J/ZFF3LvDuML77knhcUWuj33xcboQvZXjcUW1uyzwGML+V9UFVv4wL2ziC7kn+ceW/jGvTuMLuQfmYot9EsXbth3FrGF7OdO0YXclxIP2avrieqvEZP/L+KWIT3Rr4Bx/K2f+AAJwMkWMVNhMgghlB+EEMoPQgjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQih/CCEUH4QQig/CCGUH4QQyg9CCOUHIYTygxBC+UEIofwghFB+EEIov4TC6ls+5exSCalSTC9sTSUsRzXwPEIjldAOiumxZ6mEvlFOsWymiYRUOcX0VOxEQt0XqnAtxzcxjdC27l1Y1BwPkUwiJFMXB2HRmfTPOk0htKYrjsKibnXq1RhfSLr9eNrWh7BwvfI26dsi4gqJrFf98YVL6vPTXDOMKQ/g4gqrcWhOL5T6B1A+TfrSdQDIAAAAAElFTkSuQmCC" alt="fb-icon" style="width:30px"><span>Action required : Activate your Facebook Account!</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You have created an account of Facebook. To complete your registration , Please confirm your account</span></div><a href="${url}" style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">Confirm your Account</a><br><div style="padding-top:1rem;font-family:Roboto"><span>Facebook helps people to connect all across the world!</span></div></div></body></html>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
