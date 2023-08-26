import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import AddNumber from "./AddNumber";
import Model from "../components/Model";
import ToggleSwitch from "./ToggleSwitch";
import SignUp from "../pages/SignUp";
import HeaderCard from "./HeaderCard";
import CurrentDetails from "./CurrentDetails";
import { useDataContext } from "../context/DataContext";
import { Alert } from "react-bootstrap";
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navState, setNavState] = useState(1);
  const [isOn, setIsOn] = useState(false);
  const {
    SetWhatsappNumber,
    SetDisplayNumber,
    whatsAppNo,
    displayNo,
    getLatestWhatsAppNumber,
  } = useDataContext();

  useEffect(() => {
    getLatestWhatsAppNumber();
    // getDisplayNumber();
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
      <section
        className="background-radial-gradient overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start ">
          <HeaderCard setNavState={setNavState} />
          <div className="row gx-lg-5 align-items-center mb-5">
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
                  {navState === 2 && (
                    <Alert type={"info"} text={`${whatsAppNo.inputNo}`} />
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
                        isOn ? "Add Display Number" : "Add WhatsApp Numbers"
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
