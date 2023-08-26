import { MdOutlineElectricalServices, MdSplitscreen } from "react-icons/md";
import { AiFillTool, AiOutlineHome, AiFillFormatPainter } from "react-icons/ai";
import { TbAirConditioning } from "react-icons/tb";
import { GiWoodAxe, GiCeilingLight } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa";
const ServicesSection = () => {
  return (
    <>
      <section className="section service border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Our Services</span>
                <h2 className="mt-3 content-title">
                  We provide a wide range of technical services
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-plug">
                  <MdOutlineElectricalServices />
                </i>
                <h4 className="mb-3">Electromechanical.</h4>
                <p>
                  We provide Electrome chanical Equipment Installation and
                  Maintenance services
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-wrench">
                  <AiFillTool />
                </i>
                <h4 className="mb-3">Plumbing & Sanitary Installation.</h4>
                <p>we provide Plumbing & Sanitary Installation services</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="material-icons">
                  <TbAirConditioning />
                </i>
                <h4 className="mb-3">
                  Air-Conditioning & Air Filtration Systems.
                </h4>
                <p>
                  We provide Air-Conditioning, Ventilations & Air Filtration
                  Systems services
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-home">
                  <AiOutlineHome />
                </i>
                <h4 className="mb-3">Floor & Wall Tiling Works.</h4>
                <p>We provide floor & wall tiling works services</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="fas fa-paint-roller">
                  <AiFillFormatPainter />
                </i>
                <h4 className="mb-3">Painting Contracting.</h4>
                <p>We provide painting contracting services</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="material-icons">
                  <GiWoodAxe />
                </i>
                <h4 className="mb-3">Carpentry & wood Flooring.</h4>
                <p>We provide carpentry & wood flooring works services</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="material-icons">
                  <FaToolbox />
                </i>
                <h4 className="mb-3">Wallpaper Fixing Works.</h4>
                <p>We provide wallpaper fixing works services</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="material-icons">
                  <GiCeilingLight />
                </i>
                <h4 className="mb-3">
                  False Ceiling & Light Partitions Installation.
                </h4>
                <p>
                  We provide false ceiling & light partitions installation
                  services
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="material-icons">
                  <MdSplitscreen />
                </i>
                <h4 className="mb-3">Plaster Works.</h4>
                <p>We provide plaster works Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
