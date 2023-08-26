import { MdSupportAgent } from "react-icons/md";

const Banner3 = () => {
  return (
    <>
      <section className="section counter">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0">
                  <span className="counter-state material-icons">
                    <MdSupportAgent />
                  </span>
                </h3>
                <p className="text-muted">Customer support</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0">
                  <span className="counter-stat font-weight-bold">1000 </span>+
                </h3>
                <p className="text-muted">Customers</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0">
                  <span className="counter-state font-weight-bold">24/7</span>
                </h3>
                <p className="text-muted">Availble</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner3;
