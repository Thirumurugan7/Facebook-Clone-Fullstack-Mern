import { Form, Formik } from "formik";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import * as Yup from "yup";
import DateofBirthSelect from "./DateofBirthSelect";
import GenderSelect from "./GenderSelect";
const userInfos = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: "",
};
export default function RegisterForm() {
  const [user, setUser] = useState(userInfos);

  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;

  const yearTemp = new Date().getFullYear();

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const years = Array.from(new Array(109), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, i) => i + 1);
  console.log(years);
  console.log(months);

  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  console.log(days);

  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("First Name is required")
      .min(4, "First name must be atleast 2 characters")
      .max(20, "FIrst name must be maximum of 20 characters")
      .matches(/^[aA-zZ]+$/, "Numbers and special characteres are not allowed"),
    last_name: Yup.string()
      .required("Last Name is required")
      .min(4, "Last name must be atleast 2 characters")
      .max(20, "Last name must be maximum of 20 characters")
      .matches(/^[aA-zZ]+$/, "Numbers and special characteres are not allowed"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be between 6 to 20 characters")
      .max(20, "Password must be atleast 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email address"),
  });
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>it's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date();
            let picked_date = new Date(bYear, bMonth - 1, bDay);
            let atleast14 = new Date(1970 + 14, 0, 1);
            let noMoreThan80 = new Date(1970 + 80, 0, 1);
            console.log(current_date, "currendate");
            console.log(picked_date, "picked date");
            console.log(atleast14, "atleast 14");
            if (current_date - picked_date < atleast14) {
              setDateError(
                "It looks like you have entered a wrong date of birth"
              );
            } else if (current_date - picked_date > noMoreThan80) {
              setDateError("It looks like you are too old to use Facebook");
            } else if (gender == "") {
              setGenderError(
                "Please choose a gender. You can change who can see this later."
              );
            }
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Surname"
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Mobile number or email address"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="New password"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <DateofBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              <div className="reg_infos">
                By clicking Sign Up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper">
                <button className="blue_btn open_signup" type="button">
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
