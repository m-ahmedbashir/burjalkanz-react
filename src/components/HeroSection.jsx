import { Link } from "react-router-dom";
import TransitionAnimation from "../animation/TransitionAnimation";

const HeroSection = () => {
  return (
    <>
      <section className="slider">
        <div className="container">
          <TransitionAnimation>
            <div className="row">
              <div className="col-lg-9 col-md-10">
                <div className="block">
                  <span className="d-block mb-3 text-white text-capitalize">
                    Prepare for new future
                  </span>
                  <h1 className="animated fadeInUp mb-5">
                    Our work is <br />
                    presentation of our <br />
                    capabilities.
                  </h1>
                  <Link
                    to="/services"
                    className="btn btn-main animated fadeInUp btn-round-full"
                  >
                    Get our Services
                    <i className="btn-icon fa fa-angle-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </TransitionAnimation>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
