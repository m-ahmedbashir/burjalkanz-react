import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn, CiPhone } from "react-icons/ci";

const ContactUs = () => {
  return (
    <>
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="index.html" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-white">/</span>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-white-50">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="images/blog/contact.jpg"
                alt=""
                className="w-100 rounded rounded-3"
              />
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">We are Professionals</span>
                <h2 className="mb-5 mt-2">
                  Don’t Hesitate to contact with us for any kind of information
                </h2>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-direction mr-3">
                      <CiLocationOn />
                    </i>
                    Al Zaroni building offiece no.104 Al Qasis 2 Dubai.
                  </li>
                  <li>
                    <i className=" mr-3">
                      <AiOutlineMail />
                    </i>
                    Email: info@burjalkanz.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3">
                      <CiPhone />
                    </i>
                    Phone:+971 43553385
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
