import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import AddNumber from "./AddNumber";
import Model from "../components/Model";
import ToggleSwitch from "./ToggleSwitch";
import SignUp from "../pages/SignUp";
import HeaderCard from "./HeaderCard";
import CurrentDetails from "./CurrentDetails";
import { useDataContext } from "../context/DataContext";
import { useAuthContext } from "../context/AuthContext";

import { Alert } from "react-bootstrap";
import EmailVerifyHeader from "./EmailVerifyHeader";
import ErrorModel from "../components/ErrorModel";
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navState, setNavState] = useState(1);
  const [isOn, setIsOn] = useState(false);
  const {
    SetWhatsappNumber,
    SetDisplayNumber,
    getLatestWhatsAppNumber,
    getLatestDisplay,
    message,
    errorMsg,
  } = useDataContext();

  const { authUser } = useAuthContext();
  const showPolicy = JSON.parse(localStorage.getItem("showPolicy"));

  if (showPolicy === null || showPolicy === undefined) {
    localStorage.setItem("showPolicy", JSON.stringify(true));
  }

  const handlePrivacyClick = () => {
    localStorage.setItem("showPolicy", JSON.stringify(false));
  };
  useEffect(() => {
    getLatestWhatsAppNumber();
    getLatestDisplay();
  }, []);

  return (
    <>
      {isModalOpen && (
        <Model
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          title={"Welcome"}
          description={"Welcome to the admin panel"}
        />
      )}

      {/*privacy && (
        <ErrorModel
          isModalOpen={privacy}
          title={"Privacy and Security Assurance:"}
          description={
            "Your privacy and security are of utmost importance to us. We want to assure you that we do not retain or store your login credentials in any form. When you log in to our platform, rest assured that your sensitive information remains confidential and is never saved on our servers. As a security measure, please note that you will be required to log in again if you refresh the page or close the tab. This ensures an added layer of protection for your account and data. We are committed to maintaining the highest standards of privacy and security, and this practice reflects our dedication to safeguarding your online experience. Thank you for entrusting us with your information."
          }
          closeModal={() => setPrivacy(false)}
          handleSubmit={handlePrivacyClick}
        />
        )*/}

      <section
        className="background-radial-gradient overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start ">
          {authUser.emailVerified === false && <EmailVerifyHeader />}
          <HeaderCard setNavState={setNavState} />
          <div className="row gx-lg-4 mb-5">
            <div className="col-lg-4 mb-5 mb-lg-0 " style={{ zIndex: 10 }}>
              <div className="card bg-glass mt-3">
                <div className="card-body px-4 py-5 px-md-5">
                  <text className="lead p-2 font-weight-bold">
                    Current Details
                  </text>
                  <CurrentDetails />
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-5 mb-lg-0 position-relative">
              <div className="card bg-glass mt-3" style={{ zIndex: 10 }}>
                <div className="card-body px-2 py-3 px-md-5">
                  {navState === 2 && errorMsg && (
                    <Alert type={"danger"} text={errorMsg} />
                  )}
                  {navState === 2 && (
                    <div className="d-flex">
                      <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />{" "}
                      <text className="pl-2">Switch Number</text>
                    </div>
                  )}
                  {navState === 1 && <UserTable />}

                  {navState === 2 && (
                    <AddNumber
                      title={
                        isOn ? "Add Display Number" : "Add WhatsApp Number"
                      }
                      handleSubmit={isOn ? SetDisplayNumber : SetWhatsappNumber}
                    />
                  )}

                  {navState === 3 && <SignUp />}
                </div>
              </div>

              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
