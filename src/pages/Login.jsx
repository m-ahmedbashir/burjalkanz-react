import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./style.css";
import Alert from "../components/Alert";
import { useAuthContext } from "../context/AuthContext";
import SlideAnimation from "../animation/SlideAnimation";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorType, setErrorType] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const {
    authUser,
    login,
    errorMsg: error,
    clearErrorMsg,
    Resetpassword,
  } = useAuthContext();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setErrorMsg("");
  }, [forgetPassword, login]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (authUser) {
      navigate("/dashboard");
    }
  }, [authUser]);

  // handle user Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!emailRegex.test(signInData.email)) {
      setErrorMsg("Enter a valid email format");
      setErrorType("danger");
      return;
    } else if (error) {
      setErrorMsg(error.split("-").join(" "));
      setErrorType("danger");
    } else {
      setErrorMsg("");
      setErrorType("");
      login(signInData);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!emailRegex.test(signInData.email)) {
      setErrorMsg("Enter a valid email format");
      setErrorType("danger");
      return;
    } else if (error) {
      setErrorMsg(error);
      setErrorType("danger");
    } else {
      Resetpassword(signInData.email);
      setErrorMsg("Email sent");
      setErrorType("success");
    }
  };

  return (
    <section
      className="background-radial-gradient overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{
                color: "hsl(218, 81%, 95%)",
                fontSize: "2rem", // Adjust font size for small screens
              }}
            >
              Welcome <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                to Burjalkanz Admin Section
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{
                color: "hsl(218, 81%, 85%)",
                fontSize: "1rem", // Adjust font size for small screens
              }}
            >
              You can only sign in. If your credentials are authorized by one of
              the website owner.
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <SlideAnimation>
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  {errorMsg && <Alert type={errorType} text={errorMsg} />}
                  <form>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={signInData.email}
                        onChange={handleLoginChange}
                        className="form-control"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Password input */}
                    {!forgetPassword && (
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <div className="d-flex align-items-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={signInData.password}
                            name="password"
                            className="form-control"
                            onChange={handleLoginChange}
                            placeholder="Password"
                          />
                          <span
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>
                    )}
                    {!forgetPassword ? (
                      <label
                        className="form-label float-left"
                        onClick={() => setForgetPassword(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Forget Password?
                      </label>
                    ) : (
                      <label
                        className={
                          forgetPassword
                            ? "btn btn-outline-primary btn-block mb-4"
                            : `form-label float-left`
                        }
                        onClick={() => setForgetPassword(false)}
                        style={{ cursor: "pointer" }}
                      >
                        Login
                      </label>
                    )}

                    {/* Submit button */}
                    <button
                      type="button"
                      onClick={
                        forgetPassword ? handleResetPassword : handleLogin
                      }
                      className="btn btn-primary btn-block mb-4"
                    >
                      {forgetPassword ? "Reset Password" : "Login"}
                    </button>
                  </form>
                </div>
              </div>
            </SlideAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
