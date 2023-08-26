import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
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
                  <a href="mailto:burjalkanz@gmail.com">info@burjalkanz.com</a>
                </h6>
                <a href="tel:+971 43553385">
                  <span className="text-color h4">+971 43553385</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  &copy;{date.getUTCFullYear()} Reserved to
                  <span className="text-color">Burj-Al-Kanz.</span>
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
