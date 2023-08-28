import React, { useState } from "react";
import "./style.css";
import Alert from "../components/Alert";
import { useAuthContext } from "../context/AuthContext";
import Model from "../components/Model";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorType, setErrorType] = useState("");
  const [isModalOpen, setIsModelOpen] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const { Register, errorMsg: error, getUsers } = useAuthContext();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!emailRegex.test(signInData.email)) {
      setErrorMsg("Enter a valid email format");
      setErrorType("danger");
      return;
    } else if (
      !signInData.email ||
      !signInData.firstName ||
      !signInData.lastName ||
      !signInData.password
    ) {
      setErrorMsg("Please Check input field, Something is missing");
      setErrorType("danger");
    } else if (error) {
      setErrorMsg(error.split("-").join(" "));
      setErrorType("danger");
    } else {
      setErrorMsg("User Created Successfully");
      setErrorType("success");
      Register(signInData);
      getUsers();
      setIsModelOpen(false);
    }
  };

  return (
    <div id="new-user">
      {isModalOpen && (
        <Model
          isModalOpen={isModalOpen}
          closeModal={() => setIsModelOpen(false)}
          title={"Confirmation"}
          description={
            "You are going to register a new user. This user will be able to change details on the website. A confimation email to this email will be sent. New user needs to confirm email to activate his email before using dashboard. Are you sure you want to Add User. "
          }
          handleSubmit={handleSignup}
        />
      )}
      <div className=" px-4 py-5 px-md-5">
        <text className="font-weight-bold lead ">Register New User</text>
        {errorMsg && <Alert type={errorType} text={errorMsg} />}
        <form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={signInData.firstName}
                className="form-control"
                onChange={handleSignupChange}
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6 mb-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={signInData.lastName}
                onChange={handleSignupChange}
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={signInData.email}
              onChange={handleSignupChange}
              className="form-control"
              placeholder="example@email.com"
            />
          </div>

          {/* Password input */}

          <div className="form-outline mb-4">
            <div className="d-flex align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={signInData.password}
                name="password"
                className="form-control"
                onChange={handleSignupChange}
                placeholder="Password"
              />
            </div>

            <div className="form-group form-check float-left ">
              <input
                type="checkbox"
                className="form-check-input mt-1 pt-2"
                id="exampleCheck1"
                onClick={togglePasswordVisibility}
              />
              <label className="form-check-label small" for="exampleCheck1">
                Show Password
              </label>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="button"
            onClick={() => setIsModelOpen(true)}
            className="btn btn-primary btn-block mb-4"
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
