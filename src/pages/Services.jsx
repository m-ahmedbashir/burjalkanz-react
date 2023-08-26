import React from "react";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <>
      <section className="page-title bg-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Our services</span>
                <h1 className="text-capitalize mb-4 text-lg">What We Do</h1>
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
                      Our services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
};

export default Services;
