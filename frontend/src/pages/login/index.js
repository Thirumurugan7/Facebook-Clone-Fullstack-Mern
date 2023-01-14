import "./style.css";

import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
import Register from "../../components/login/Register";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <Register />
        <Footer />
      </div>
    </div>
  );
}
