import { LiaFileContractSolid } from "react-icons/lia";
import { BsPerson, BsHouseDoor } from "react-icons/bs";
const CreativeSection = () => {
  return (
    <>
      <section className="section intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <span className="h6 text-color">
                  We are creative & expert people
                </span>
                <h2 className="mt-3 content-title">
                  We provide solution and services to clients for their problem
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-files color-one"></i>
                <LiaFileContractSolid className={"xxl  color-one"} size={70} />
                <h4 className="mt-4 mb-3">Contract Base</h4>
                <p>
                  We can provide our services on contract bases. Let us know the
                  type of work you need
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-user color-one"></i>
                <BsPerson className={"xxl  color-one"} size={70} />
                <h4 className="mt-4 mb-3">Person Base</h4>
                <p>
                  We provide you with the best worker for the required problem
                  field
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item">
                <i className="ti-truck color-one"></i>
                <BsHouseDoor className={"xxl  color-one"} size={70} />
                <h4 className="mt-4 mb-3">Services At Your Door Step</h4>
                <p>
                  Let us know where and what type of service you need from us we
                  will provide that at your door step
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CreativeSection;
