import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const Footer = () => {
  const { displayNo, loading } = useDataContext();

  const date = new Date();
  return (
    <>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Company</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <h1>
                    <Link to="/" className="text-dark navbar-brand lead">
                      <img src="images/logo.png" alt="" className="w-50" />
                    </Link>
                  </h1>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Quick Links</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/services"}>Services</Link>
                  </li>

                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Contact Us</h4>
                <p>
                  To get expert worker and resources for work and project
                  <span className="pl-2 text-color font-weight-bold ti-arrow-right"></span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 ml-auto col-sm-6">
              <div className="widget">
                <div className="logo mb-4">
                  <img src="images/logo.png" alt="" className="w-50" />
                </div>
                <h6>
                  <a href="mailto:info@burjalkanz.com">info@burjalkanz.com</a>
                </h6>
                <a
                  href={`tel:${
                    displayNo.inputNo ? displayNo.inputNo : "+971 551459531"
                  }`}
                >
                  <span className="text-color h4">
                    {displayNo.inputNo
                      ? `+${displayNo.inputNo}`
                      : "+971 551459531"}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  &copy;{date.getUTCFullYear()} Reserved to{" "}
                  <Link
                    className="text-color text-decoration-none"
                    to={"/login"}
                  >
                    Burj-Al-Kanz.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
