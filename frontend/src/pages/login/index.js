import "./style.css";
import { Formik, Form } from "formik";

import { Link } from "react-router-dom";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <div className="register"></div>
        <footer className="login_footer">
          <div className="login_footer_wrap">
            <Link to="/">English(UK)</Link>
            <Link to="/">Francais(FR)</Link>
            <Link to="/">Espanol</Link>
            <Link to="/">Italiano</Link>
            <Link to="/">Deutsch</Link>
            <Link to="/">Portugues (Brazil)</Link>
            <Link to="/">Hindi</Link>
            <Link to="/">Japanese</Link>
            <Link to="/">chinese</Link>
            <Link to="/">catonese</Link>
            <Link to="/" className="footer_square">
              <i className="plus_icon"></i>
            </Link>
          </div>
          <div className="footer_splitter"></div>
          <div className="login_footer_wrap">
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Messenger</Link>
            <Link to="/">FaceBook Lite</Link>
            <Link to="/">Watch</Link>
            <Link to="/">Places</Link>
            <Link to="/">Games</Link>
            <Link to="/">Market Place</Link>
            <Link to="/">Facebook Pay</Link>
            <Link to="/">Oculus</Link>
            <Link to="/">Portal</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Bulletin</Link>
            <Link to="/">Local</Link>
            <Link to="/">Fundraisers</Link>
            <Link to="/">Services</Link>
            <Link to="/">Voting Information center</Link>
            <Link to="/">Groups</Link>
            <Link to="/">About</Link>
            <Link to="/">Create Ad</Link>
            <Link to="/">Create Page</Link>
            <Link to="/">Developers</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">
              AdChoices <i className="adChoice_icon"></i>
            </Link>
            <Link to="/">Terms</Link>
            <Link to="/">Help</Link>
          </div>
          <div className="login_footer_wrap">
            <Link to="/" style={{ fontSize: "12px", marginTop: "10px" }}>
              Meta @ 2023
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
